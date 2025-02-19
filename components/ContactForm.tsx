"use client";

import React, { useState } from "react";
import Button from "./ui/Button";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
        enquiryType: "",
        honeypot: "",
    });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check honeypot field for spam
        if (formData.honeypot) {
            console.log("Spam detected!");
            return;
        }

        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send email");
            }

            setSuccess(true);
            // Reset form data
            setFormData({
                fullname: "",
                email: "",
                phone: "",
                message: "",
                enquiryType: "",
                honeypot: "",
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form
                className="flex flex-wrap justify-between mt-12 lg:mt-0"
                onSubmit={handleSubmit}
            >
                <input
                    className="p-3 border-b border-(--light-foreground) w-full lg:w-[49%] mb-4"
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                />
                <input
                    className="p-3 border-b border-(--light-foreground) w-full lg:w-[49%] mb-4"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="p-3 border-b border-(--light-foreground) w-full lg:w-[49%] mb-4"
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    className="p-3 border-b border-(--light-foreground) w-full lg:w-[49%] mb-4"
                    name="enquiryType"
                    type="text"
                    placeholder="What can we help with?"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="p-3 border-b border-(--light-foreground) w-full mb-4"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                {/* Honeypot */}
                <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                    value={formData.honeypot}
                    onChange={handleChange}
                />
                <button className="mt-4" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <div className="group flex items-end leading-4 ">
                            Send{" "}
                            <img
                                className="ml-2 duration-300 transition-transform relative top-[-2px] group-hover:translate-x-1 group-hover:-translate-y-1"
                                src="/arrow.svg"
                                alt="Arrow Icon"
                                width={12}
                                height={12}
                            />
                        </div>
                    )}
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && (
                <p style={{ color: "green" }}>Email sent successfully!</p>
            )}
        </div>
    );
};

export default ContactForm;
