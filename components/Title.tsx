import React from "react";

interface TitleProps {
    subTitle: String;
    mainTitle: String;
}

const Title: React.FC<TitleProps> = ({ mainTitle, subTitle }) => {
    return (
        <div className="flex items-center">
            {/* Slash */}
            <div className="w-[2px] h-[65px] bg-(--accent) rotate-[25deg] mr-6 ml-4"></div>
            {/* Titles */}
            <div className="flex flex-col">
                <p className="uppercase text-(--lightFont) text-sm font-semibold">
                    {subTitle}
                </p>
                <h2 className="text-2xl md:text-4xl font-bold">{mainTitle}</h2>
            </div>
        </div>
    );
};

export default Title;
