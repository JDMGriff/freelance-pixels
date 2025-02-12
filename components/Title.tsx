import React from "react";

interface TitleProps {
    subTitle: String;
    mainTitle: String;
}

const Title: React.FC<TitleProps> = ({ mainTitle, subTitle }) => {
    return (
        <div className="flex items-center">
            {/* Slash */}
            {/* <svg
                className="mr-2 md:mr-4 max-h-[50px] md:max-h-none"
                xmlns="http://www.w3.org/2000/svg"
                width="32.782"
                height="70.396"
                viewBox="0 0 32.782 70.396"
            >
                <rect
                    id="Rectangle_132"
                    data-name="Rectangle 132"
                    width="76.692"
                    height="1.277"
                    transform="matrix(0.412, -0.911, 0.911, 0.412, 0, 69.87)"
                    fill="#16c6d0"
                />
            </svg> */}
            <div className="w-[2px] h-[65px] bg-(--accent) rotate-[25deg] mr-6"></div>
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
