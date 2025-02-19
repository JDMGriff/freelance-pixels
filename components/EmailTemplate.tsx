import * as React from "react";
import { Text } from "@react-email/components";

interface EmailTemplateProps {
    fullname: string;
    email: string;
    phone: string;
    enquiryType: string;
    message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    fullname,
    email,
    phone,
    enquiryType,
    message,
}) => (
    <div>
        <Text className="text-[24px] font-semibold leading-[32px] text-indigo-400">
            New Email Enquiry!
        </Text>
        <Text>First Name: {fullname}</Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>
        <Text>Enquiry Type: {enquiryType}</Text>
        <Text>Message: {message}</Text>
    </div>
);
