import React, { useState, ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { ApproachSlideProps } from "./homepage/ApproachSlide";

interface CarouselProps {
    children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children: slides }) => {
    const [curr, setCurr] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(0);

    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    const transformStyle = {
        width: `${100 / React.Children.count(slides)}%`,
        transform:
            screenWidth < 768
                ? `translateX(${curr * 89}%)`
                : `translateX(${curr * 92}%)`,
    };

    // Calculate slide width and gap
    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const gap = 32; // 32px gap between slides
            const totalSlides = React.Children.count(slides);
            const slideWidth =
                (containerWidth - (totalSlides - 1) * gap) / totalSlides;
            setSlideWidth(slideWidth);
        }
    }, [slides]);

    const prev = () =>
        setCurr((curr) =>
            curr === 0 ? React.Children.count(slides) - 1 : curr - 1
        );
    const next = () =>
        setCurr((curr) =>
            curr === React.Children.count(slides) - 1 ? 0 : curr + 1
        );

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => prev(),
        onTouchStartOrOnMouseDown: (event) => {
            event.event.preventDefault();
        },
        trackMouse: true,
    });

    return (
        <div
            className="w-full md:max-w-[800px] lg:max-w-[1052px] pb-10 overflow-x-hidden lg:overflow-x-visible"
            ref={containerRef}
        >
            <div
                {...handlers}
                className="flex gap-8 overflow-y-visible relative transition ease-in-out duration-500 select-none"
                style={{
                    transform: `translateX(calc(-${curr * 100}% - ${
                        curr * 32
                    }px))`,
                }}
            >
                {React.Children.map(slides, (slide, index) =>
                    React.cloneElement(
                        slide as React.ReactElement<ApproachSlideProps>,
                        {
                            style: { width: `${slideWidth}px` },
                            isPreceeding: curr !== 0 && index < curr,
                            onNext: next,
                        }
                    )
                )}
            </div>
            {/* Carousel Bar */}
            <div className="absolute bottom-0 left-6 md:left-0 w-full">
                <div className="flex items-center w-full absolute left-0 top-0">
                    {/* Blue Bar */}
                    <div
                        className="h-[3px] transition ease-in-out duration-300 bg-(--accent)"
                        style={transformStyle}
                    ></div>
                </div>

                <div className="w-[92%] h-[3px] bg-(--foreground) md:w-[94%]"></div>
            </div>
            {/* Carousel Buttons */}
            <div className="absolute bottom-6 md:bottom-[-15px] px-6 right-0 z-10 md:px-0">
                <button onClick={prev}>
                    <Image
                        className="mr-4 hover:cursor-pointer"
                        src="/arrow-l.svg"
                        alt="Arrow Right"
                        width={22}
                        height={22}
                    />
                </button>
                <button onClick={next}>
                    <Image
                        className="hover:cursor-pointer"
                        src="/arrow-r.svg"
                        alt="Arrow Left"
                        width={22}
                        height={22}
                    />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
