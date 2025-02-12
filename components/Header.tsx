import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <div className="bg-(--background) w-full fixed top-0 left-0 right-0 z-[50] py-8">
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <Nav />
            </div>
        </div>
    );
};

export default Header;
