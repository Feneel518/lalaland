import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, checkIn, checkOut, guests, roomType, message } = body;

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Name, email, and phone are required" },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Create transporter with environment variables
        // If no SMTP credentials are provided, log the inquiry instead
        const hasSmtpConfig = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

        if (!hasSmtpConfig) {
            // Log inquiry to console if SMTP is not configured
            console.log("=== NEW INQUIRY ===");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("Check-in:", checkIn || "Not specified");
            console.log("Check-out:", checkOut || "Not specified");
            console.log("Guests:", guests);
            console.log("Room Type:", roomType);
            console.log("Message:", message || "No message");
            console.log("==================");

            return NextResponse.json(
                {
                    success: true,
                    message: "Inquiry received (logged to console - SMTP not configured)"
                },
                { status: 200 }
            );
        }

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Room type display names
        const roomTypes: Record<string, string> = {
            deluxe: "Deluxe Ocean View",
            family: "Family Suite",
            villa: "Premium Villa",
            cottage: "Garden Cottage",
            bungalow: "Beachfront Bungalow",
            honeymoon: "Honeymoon Suite",
        };

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SMTP_TO || process.env.SMTP_USER,
            subject: `New Inquiry from ${name} - La La Land Resort`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2b7a9b; border-bottom: 3px solid #ff6b35; padding-bottom: 10px;">
            New Booking Inquiry
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c2c2c; margin-top: 0;">Guest Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c2c2c; margin-top: 0;">Booking Details</h3>
            <p><strong>Check-in:</strong> ${checkIn || "Not specified"}</p>
            <p><strong>Check-out:</strong> ${checkOut || "Not specified"}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Room Type:</strong> ${roomTypes[roomType] || roomType}</p>
          </div>

          ${message ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c2c2c; margin-top: 0;">Special Requests</h3>
            <p>${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This inquiry was submitted through the La La Land Resort website contact form.</p>
          </div>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: "Inquiry sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send inquiry. Please try again later." },
            { status: 500 }
        );
    }
}
