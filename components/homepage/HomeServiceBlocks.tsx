"use client";

import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import { useRef, useEffect } from "react";

type Service = {
    href: string;
    label: string;
    imageSrc: string;
    videoSrc: string;
};

const services: Service[] = [
    {
        label: "Digital Design",
        href: "/services/digital-design",
        imageSrc: "/digital-design-bg.png",
        videoSrc: "",
    },
    {
        label: "Frontend Development",
        href: "/services/frontend-development",
        imageSrc: "/frontend-bg.png",
        videoSrc: "",
    },
    {
        label: "WordPress Development",
        href: "/services/wordpress-development",
        imageSrc: "",
        videoSrc: "wordpress-development.mp4",
    },
    {
        label: "Bespoke Solutions",
        href: "/services/bespoke-solutions",
        imageSrc: "ai-bg.png",
        videoSrc: "",
    },
];

const HomeServiceBlocks = () => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, services.length);
    }, []);

    const handleMouseEnter = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.play().catch((error) => {
                console.error("Error playing video:", error);
            });
        }
    };

    const handleMouseLeave = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
        }
    };

    return (
        <div className="pt-20 pb-32">
            <div className="container mx-auto px-6 md:px-0">
                <Title subTitle={"Our Craft"} mainTitle={"What We Do"} />
            </div>
            <div className="w-full flex flex-wrap justify-between pt-10 pb-32">
                {services.map((service, index) => (
                    <Link
                        className="relative w-full sm:w-1/2 lg:w-[24.9%] bg-center bg-contain group h-[300px] sm:h-[400px] lg:h-[700px]"
                        key={index}
                        href={service.href}
                    >
                        <div className="overflow-hidden transition-all duration-500 h-[300px] group-hover:h-[216px] sm:h-[400px] lg:h-[700px] sm:group-hover:h-[316px] lg:group-hover:h-[616px]">
                            <div className="h-full w-full transition-all duration-500 group-hover:scale-[1.1] overflow-hidden">
                                {service.imageSrc ? (
                                    <>
                                        <div className="absolute z-10 transition-all duration-500 bg-black w-full h-[300px] sm:h-[400px] lg:h-[700px] left-0 top-0 opacity-90 group-hover:opacity-20"></div>
                                        <img
                                            className="relative top-[50%] -translate-y-[50%] z-0 object-cover w-full h-full"
                                            src={service.imageSrc}
                                            alt="Service Image"
                                            width="100%"
                                            height="auto"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <video
                                            ref={(el) => {
                                                videoRefs.current[index] = el;
                                            }}
                                            onMouseEnter={() =>
                                                handleMouseEnter(index)
                                            }
                                            onMouseLeave={() =>
                                                handleMouseLeave(index)
                                            }
                                            muted
                                            loop
                                            className="!h-full relative z-10 top-[50%] -translate-y-[50%] z-0 transition-opacity opacity-20 hover:opacity-100"
                                            src={service.videoSrc}
                                        ></video>
                                        <div className="absolute z-0 bg-black w-full h-full left-0 top-0"></div>
                                    </>
                                )}
                            </div>
                        </div>
                        <h3 className="flex items-center absolute bottom-[24px] left-6 font-semibold z-[10]">
                            {service.label}
                            <Image
                                className="ml-2 duration-600 transition-all relative opacity-0 group-hover:block group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                                src="/arrow.svg"
                                alt="Arrow Icon"
                                width={16}
                                height={16}
                            />
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeServiceBlocks;
