import React from "react";
import Title from "./Title";
import Link from "next/link";

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
            <div className="flex flex-wrap justify-between mt-10">
                {latestProjects.map((project, index) => (
                    <Link
                        className={`w-full h-[202px] mb-4 md:h-[302px] lg:h-[502px] lg:mb-6 ${
                            index === 1 || index === 2
                                ? "bg-(--foreground) max-w-none md:max-w-[49%] lg:max-w-[29%]"
                                : "bg-(--lightFont) max-w-none md:max-w-[49%] lg:max-w-[69%]"
                        }`}
                        key={project.title}
                        href={project.link}
                    >
                        <img
                            className="relative top-[50%] -translate-y-[50%] z-0 object-cover w-full h-full"
                            src={"/digital-design-bg.png"}
                            alt="Service Image"
                            width="100%"
                            height="auto"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LatestProjects;
