import React from "react";
import Button from "./ui/Button";

interface HeroProps {
    title: string;
    subtitle: string;
    subtext: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, subtext }) => {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-(--background) bg-blend-overlay bg-[url(/home-hero-bg.png)]">
            <div className="bg-cover bg-center bg-no-repeat bg-[url(/bg-overlay.png)]">
                <div className="flex flex-col justify-center container mx-auto px-6 h-screen lg:px-0">
                    <div className="max-w-[700px] flex flex-col justify-center">
                        <span className="uppercase text-(--lightFont) text-sm md:text-base font-semibold flex items-center md:mt-0">
                            <div className="w-[1px] h-[18px] bg-(--accent) rotate-[25deg] mr-3"></div>
                            {subtitle}
                        </span>
                        <h1 className="uppercase font-bold text-3xl  md:leading-[50px] md:text-5xl mb-8 md:leading-[60px] md:mt-2 whitespace-pre-wrap">
                            {title}
                        </h1>
                    </div>
                    <div className="w-full flex flex-col justify-between items-start md:items-end pb-6 md:border-b md:border-[#2E2E2E] md:flex-row">
                        <p className="text-base md:text-lg mb-8 md:mb-0">
                            {subtext}
                        </p>
                        <Button
                            text={"Reach Out"}
                            fontSize={"text-base md:text-lg"}
                            textColour={""}
                            fontWeight={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
