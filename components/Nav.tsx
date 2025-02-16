"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
];

const Nav = () => {
    const pathName = usePathname();

    return (
        <div className="w-full container mx-auto px-6 flex items-center justify-between lg:px-0">
            {/* Logo */}
            <a href="/">
                <Image src="/logo.svg" alt="" width={300} height={41} />
            </a>
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
    );
};

export default Nav;
