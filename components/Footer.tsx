import React from "react";

const Footer = () => {
    return (
        <div className="container mx-auto py-20 px-6 flex flex-col justify-between items-start lg:flex-row">
            <div className="mb-10 lg:mb-0">
                <img src="/logo.svg" alt="Logo" />
                <p className="mt-4 mb-2">Copyright 2024 ©</p>
                <a
                    className="border-r border-(--fontColor) mr-2 pr-2"
                    href="/terms-conditions"
                >
                    Terms & Conditions
                </a>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div className="mb-10 lg:mb-0">
                <h4 className="text-xl font-bold mb-4">MENU</h4>
                <ul className="col-count">
                    <li className="uppercase mb-2 text-sm">
                        <a href="">Home</a>
                    </li>
                    <li className="uppercase mb-2 text-sm">
                        <a href="">About</a>
                    </li>
                    <li className="uppercase mb-2 text-sm">
                        <a href="">Work</a>
                    </li>
                    <li className="uppercase mb-2 text-sm">
                        <a href="">Services</a>
                    </li>
                    <li className="uppercase mb-2 text-sm">
                        <a href="">Reach Out</a>
                    </li>
                    <li className="uppercase text-sm">
                        <a href="">Sitemap</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-xl font-bold mb-4">SERVICES</h4>
                <ul className="col-count">
                    <li className="uppercase mb-2 text-sm">
                        <a href="">Digital Design</a>
                    </li>
                    <li className="uppercase mb-2 text-sm md:mb-2">
                        <a href="">Frontend Development</a>
                    </li>
                    <li className="uppercase mb-2 text-sm">
                        <a href="">WordPress Development</a>
                    </li>
                    <li className="uppercase text-sm">
                        <a href="">Bespoke Solutions</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
