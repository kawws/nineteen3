import { render } from "@react-email/render";
import ContactEmail from "../../../../emails";  // Adjust this path as necessary
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    try {
        // Generate HTML content with render function
        const htmlContent = render(ContactEmail({ name, email, message }));

        const { data, error } = await resend.emails.send({
            from: "INFO <onboarding@resend.dev>",
            to: [email],
            subject: "New Contact Form Submission",
            html: await htmlContent, // Await here
        });

        if (error) {
            return new Response(JSON.stringify({ message: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: "Message sent successfully" }), { status: 200 });
    } catch (error) {
        // Type assertion for error to access the message property
        return new Response(JSON.stringify({ message: (error as Error).message }), { status: 500 });
    }
}
