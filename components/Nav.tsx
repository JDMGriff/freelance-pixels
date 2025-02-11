"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    // { href: "/contact", label: "Contact" },
];

const Nav = () => {
    const pathName = usePathname();

    return (
        <div className="bg-(--background) w-full py-8 absolute top-0 left-0 right-0 z-[100]">
            <div className="container w-full mx-auto flex justify-between">
                {/* Logo */}
                <Image src="/logo.svg" alt="" width={300} height={41} />
                {/* Nav */}
                <nav className="flex items-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className={`uppercase text-sm transition-all xs:text-sm
                                ${
                                    pathName === link.href
                                        ? "font-semibold"
                                        : "font-normal"
                                }`}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        link={"/contact"}
                        text={"CONTACT"}
                        fontSize={"text-sm"}
                        textColour={"text-white"}
                        fontWeight={"font-normal"}
                    />
                </nav>
            </div>
        </div>
    );
};

export default Nav;
