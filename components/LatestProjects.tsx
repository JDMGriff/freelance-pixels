import React from "react";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";

const latestProjects = [
    {
        title: "Project Title 1",
        link: "#",
        imageSrc: "",
    },
    {
        title: "Project Title 2",
        link: "#",
        imageSrc: "",
    },
    {
        title: "Project Title 3",
        link: "#",
        imageSrc: "",
    },
    {
        title: "Project Title 4",
        link: "#",
        imageSrc: "",
    },
];

const LatestProjects = () => {
    return (
        <div className="container mx-auto py-20 px-6 lg:px-0">
            <Title
                subTitle={"WHAT WE'VE BEEN UP TO"}
                mainTitle={"Latest Projects"}
            />
            <div className="flex flex-wrap justify-between mt-10 ">
                {latestProjects.map((project, index) => (
                    <Link
                        className={`w-full h-[202px] relative mb-4 group md:h-[302px] lg:h-[502px] lg:mb-6 ${
                            index === 1 || index === 2
                                ? "max-w-none md:max-w-[49%] lg:max-w-[29%]"
                                : "max-w-none md:max-w-[49%] lg:max-w-[69%]"
                        }`}
                        key={project.title}
                        href={project.link}
                    >
                        <div className="overflow-hidden transition-all duration-500 h-[202px] md:h-[302px] lg:h-[502px] group-hover:h-[118px] md:group-hover:h-[218px] lg:group-hover:h-[418px]">
                            <div className="absolute z-10 transition-all duration-500 bg-black w-full h-[202px] md:h-[302px] lg:h-[502px] group-hover:h-[118px] md:group-hover:h-[218px] lg:group-hover:h-[418px] left-0 top-0 opacity-70 group-hover:opacity-20"></div>

                            <div className="h-full w-full transition-all duration-500 group-hover:scale-[1.1]">
                                <img
                                    className="relative top-[50%] -translate-y-[50%] z-0 object-cover w-full h-full"
                                    src={"/digital-design-bg.png"}
                                    alt="Service Image"
                                    width="100%"
                                    height="auto"
                                />
                            </div>
                        </div>

                        <h3 className="flex items-center absolute bottom-[24px] left-6 font-semibold z-[10]">
                            {project.title}
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

export default LatestProjects;
