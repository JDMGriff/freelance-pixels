"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuToggle = () => {
        setIsToggled((prevState) => !prevState);
    };
    return (
        <>
            <div
                className={`w-full fixed top-0 left-0 right-0 z-[50] py-8 transition-all duration-200 ${isScrolling ? "bg-(--background)" : ""}`}
            >
                <div className="md:hidden">
                    <MobileNav menuToggle={menuToggle} isToggled={isToggled} />
                </div>
                <div className="hidden md:block">
                    <Nav />
                </div>
            </div>
            {/* Mobile Menu BG Overlay */}
            <div
                className={`md:hidden w-full transition-opacity duration-300 fixed left-0 -top-8 z-20 ${
                    isToggled
                        ? "bg-black opacity-90 h-[110vh]"
                        : "opacity-0 h-0"
                }`}
            ></div>
        </>
    );
};

export default Header;
