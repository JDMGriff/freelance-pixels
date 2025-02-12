"use client";
import React from "react";
import Title from "../Title";
import ApproachSlide from "./ApproachSlide";
import Carousel from "../Carousel";

const slides = [
    {
        stepTitle: "Step 1",
        slideTitle: "Discovery Stage",
        slideText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed hendrerit risus. Morbi dignissim dictum justo, a gravida ipsum ultricies id. Aenean eget augue ac justo tincidunt gravida. Nunc posuere eget mauris eu tincidunt.",
        slideBtnText: "SHOW ME STEP 2",
        slideBtnLink: "#",
    },
    {
        stepTitle: "Step 2",
        slideTitle: "Research & Wireframing",
        slideText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed hendrerit risus. Morbi dignissim dictum justo, a gravida ipsum ultricies id. Aenean eget augue ac justo tincidunt gravida. Nunc posuere eget mauris eu tincidunt.",
        slideBtnText: "SHOW ME STEP 3",
        slideBtnLink: "#",
    },
    {
        stepTitle: "Step 3",
        slideTitle: "Design & Visualise",
        slideText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed hendrerit risus. Morbi dignissim dictum justo, a gravida ipsum ultricies id. Aenean eget augue ac justo tincidunt gravida. Nunc posuere eget mauris eu tincidunt.",
        slideBtnText: "SHOW ME STEP 4",
        slideBtnLink: "#",
    },
    {
        stepTitle: "Step 4",
        slideTitle: "Development",
        slideText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed hendrerit risus. Morbi dignissim dictum justo, a gravida ipsum ultricies id. Aenean eget augue ac justo tincidunt gravida. Nunc posuere eget mauris eu tincidunt.",
        slideBtnText: "SHOW ME STEP 5",
        slideBtnLink: "#",
    },
    {
        stepTitle: "Step 5",
        slideTitle: "Test",
        slideText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed hendrerit risus. Morbi dignissim dictum justo, a gravida ipsum ultricies id. Aenean eget augue ac justo tincidunt gravida. Nunc posuere eget mauris eu tincidunt.",
        slideBtnText: "SHOW ME STEP 6",
        slideBtnLink: "#",
    },
    {
        stepTitle: "Step 6",
        slideTitle: "Launch",
        slideText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed hendrerit risus. Morbi dignissim dictum justo, a gravida ipsum ultricies id. Aenean eget augue ac justo tincidunt gravida. Nunc posuere eget mauris eu tincidunt.",
        slideBtnText: "TELL ME MORE",
        slideBtnLink: "#",
    },
];

const OurApproach = () => {
    return (
        <div className="py-20 bg-(--lightBg)">
            <div className="container mx-auto px-6 relative md:px-0">
                <Title
                    subTitle={"Inception to Completion"}
                    mainTitle={"Our Approach"}
                />
                <div className="py-12">
                    <Carousel>
                        {slides.map((slide) => (
                            <ApproachSlide
                                key={slide.stepTitle}
                                stepTitle={slide.stepTitle}
                                slideTitle={slide.slideTitle}
                                slideText={slide.slideText}
                                slideBtnText={slide.slideBtnText}
                                slideBtnLink={slide.slideBtnLink}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default OurApproach;
