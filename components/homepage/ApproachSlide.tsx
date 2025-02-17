import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export interface ApproachSlideProps {
    isPreceeding?: boolean;
    stepTitle: string;
    slideTitle: string;
    slideText: string;
    slideBtnText: string;
    slideBtnLink: string;
    onNext?: () => void;
    style?: React.CSSProperties;
}

const ApproachSlide: React.FC<ApproachSlideProps> = ({
    isPreceeding,
    stepTitle,
    slideTitle,
    slideText,
    slideBtnText,
    onNext,
}) => {
    return (
        <div
            className={`w-full h-full md:h-[450px] flex-shrink-0 flex relative items-center transition-all justify-end ${
                isPreceeding ? "preceeding-item" : ""
            }`}
        >
            {/* Slide image */}
            <Image
                className="absolute left-10 top-2/4 -translate-y-2/4 hidden md:block"
                src="/slider-ph.jpg"
                alt=""
                draggable="false"
                height={450}
                width={313}
            />
            {/* Slide copy */}
            <div className="flex flex-col items-center md:items-start w-full pl-10 md:pl-[50%] lg:pl-[38%] bg-(--foreground) py-10 md:py-16 pr-10">
                <Image
                    className="block md:hidden mb-10"
                    src="/mob-slider-ph.png"
                    alt=""
                    draggable="false"
                    height={200}
                    width={200}
                />
                <span className="uppercase block w-max bg-[#5A5B5C] text-white py-1 px-6 mb-4">
                    {stepTitle}
                </span>
                <h3 className="text-2xl font-semibold">{slideTitle}</h3>
                <p className="py-6">{slideText}</p>
                <button
                    className="group flex items-end leading-4 text-base font-semibold text-(--lightFont)"
                    onClick={onNext}
                >
                    {slideBtnText}
                    <Image
                        className="ml-2 duration-300 transition-transform relative top-[-2px] group-hover:translate-x-1 group-hover:-translate-y-1"
                        src="/arrow.svg"
                        alt="Arrow Icon"
                        width={12}
                        height={12}
                    />
                </button>
            </div>
        </div>
    );
};

export default ApproachSlide;
