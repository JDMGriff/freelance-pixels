import React from "react";
import Title from "./Title";

const coreValueItems = [
    {
        title: "Affordability",
        description:
            "No bloated overheads (just a caffeine obsession) means we deliver top-tier work at prices that won’t break the bank.",
        icon: "/icon-affordability.svg",
    },
    {
        title: "Quality",
        description:
            "Pixel-perfect designs, pristine code, and seamless user experiences—our pride shines in every detail.",
        icon: "/icon-quality.svg",
    },
    {
        title: "Scalability",
        description:
            "Not content with providing the minimum viable product, we strive to create scalable solutions that grow with your business.",
        icon: "/icon-scalability.svg",
    },
    {
        title: "Consistency",
        description:
            "We’re in it for the long haul, delivering steady support and dependable solutions whenever you need us.",
        icon: "/icon-consistency.svg",
    },
    {
        title: "Precision",
        description:
            "From design to code, every step is fine-tuned with precision to deliver a flawless finish and functional product.",
        icon: "/icon-precision.svg",
    },
];

const CoreValues = () => {
    return (
        <div className="container mx-auto px-6 py-28 md:px-0">
            <Title subTitle={"What we Represent"} mainTitle={"Core Values"} />
            <div className="flex flex-wrap justify-between mt-10">
                {coreValueItems.map((item, index) => (
                    <div
                        key={index}
                        className={`group bg-(--foreground) pt-40 pl-6 pr-6 pb-6 rounded-sm relative mb-6 w-full ${
                            index > 2 ? "md:w-[49.2%]" : "md:w-[32.4%]"
                        }`}
                    >
                        <img
                            className={`-translate-y-34 transition-all ease-in-out duration-300 ${index > 2 ? "group-hover:-translate-y-16" : "group-hover:-translate-y-20"}`}
                            src={item.icon}
                            alt={item.title}
                            width={30}
                            height={30}
                        />
                        <div className="absolute bottom-4 pr-6">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="mt-2 text-sm text-(--lightFont) md:max-h-0 md:overflow-hidden transition-all ease-out duration-300 group-hover:max-h-[250px] group-hover:duration-300 group-hover:ease-in">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValues;
