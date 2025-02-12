"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import VisuallyHidden from "@/components/VisuallyHidden";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

const MobileNav = () => {
    const pathName = usePathname();

    return (
        <Sheet>
            <div className="w-full container px-6 mx-auto flex items-center justify-between md:px-0">
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

                <SheetTrigger>
                    <RiMenu3Line className="text-2xl" />
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle className="text-xl">
                        <VisuallyHidden>Menu</VisuallyHidden>
                    </SheetTitle>
                    <nav className="flex flex-col gap-8 mt-12">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                className={`uppercase text-md font-medium hover:text-[--accent] transition-all ${
                                    pathName === link.href
                                        ? "text-[--accent]"
                                        : ""
                                }`}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </div>
        </Sheet>
    );
};
export default MobileNav;
