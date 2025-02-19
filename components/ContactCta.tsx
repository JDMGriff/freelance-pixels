import React from "react";
import Title from "./Title";
import ContactForm from "./ContactForm";

const ContactCta = () => {
    return (
        <div className="bg-(--foreground) px-6 py-20 lg:px-0">
            <div className="container mx-auto flex flex-col items-start justify-between md:flex-row">
                <div className="w-full md:w-[48%] lg:w-[30%]">
                    <Title
                        subTitle={"BUILD AMAZING"}
                        mainTitle={"Got a Project in mind?"}
                    />
                    <p className="mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed hendrerit risus. Morbi dignissim dictum justo, a
                        gravida ipsum ultricies id.
                    </p>
                </div>
                <div className="w-full md:w-[48%] lg:w-[66%]">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactCta;
