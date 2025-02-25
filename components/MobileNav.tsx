"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import VisuallyHidden from "@/components/VisuallyHidden";
import { MouseEventHandler } from "react";

export interface MobileNavProps {
    menuToggle: MouseEventHandler;
    isToggled: boolean;
}

const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

const MobileNav: React.FC<MobileNavProps> = ({ menuToggle, isToggled }) => {
    const pathName = usePathname();

    return (
        <div className="w-full relative container px-6 mx-auto flex items-center justify-between md:px-0">
            {/* Logo */}
            <a href="/">
                <Image
                    className="max-w-[220px]"
                    src="/logo.svg"
                    alt=""
                    width={300}
                    height={41}
                />
            </a>

            <div className="absolute z-20 right-6">
                <RiMenu3Line onClick={menuToggle} className="text-2xl" />
            </div>

            <div
                className={`w-[90%] h-full transition-all duration-300 absolute z-4 -right-full ${
                    isToggled ? "-translate-x-[90%]" : ""
                }`}
            >
                <p className="text-xl">
                    <VisuallyHidden>Menu</VisuallyHidden>
                </p>
                <nav className="flex flex-col mt-[62px] pt-2 h-screen bg-[rgba(15,15,16,0.6)] backdrop-blur-2xl md:gap-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className={`uppercase text-md pl-6 font-medium hover:text-[--accent] py-4 transition-all border-b border-(--foreground) ${
                                pathName === link.href ? "text-[--accent]" : ""
                            }`}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};
export default MobileNav;
