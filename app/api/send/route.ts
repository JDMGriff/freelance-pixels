import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json(); // Parse the request body
        const { fullname, email, phone, enquiryType, message } = body;

        const { data, error } = await resend.emails.send({
            from: "noreply@freelancepixels.uk",
            to: ["hello@freelancepixels.uk"],
            subject: "New Contact Form Submission",
            react: EmailTemplate({
                fullname,
                email,
                phone,
                enquiryType,
                message,
            }) as React.ReactElement,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
