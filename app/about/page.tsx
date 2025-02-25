import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import Title from "@/components/Title";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Hero
                title={
                    "Over 15+ Years of crafting digital experiences for web & mobile"
                }
                subtitle={"Experience matters"}
                subtext={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            />
            {/* USP Bar */}
            <div className="border-t border-b border-[#2E2E2E]">
                <div className="container mx-auto md:px-6 py-8 md:py-12 md:px-0">
                    <div className="flex flex-col sm:flex-row gap-10 items-center justify-between lg:gap-8 xl:gap-20">
                        <div className="w-full flex flex-col md:flex-row gap-4 items-center border-b border-[#2E2E2E] sm:border-[0px] pb-8 sm:pb-0">
                            <Image
                                className="w-10 md:w-[65px]"
                                src={"/icon-tools.svg"}
                                width={65}
                                height={64}
                                alt="Modern Tools & Tech"
                            />
                            <span className="text-sm text-center md:text-left lg:text-base xl:text-lg font-medium px-6 sm:px-0">
                                Utilising modern development tools &
                                technologies
                            </span>
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-4 items-center border-b border-[#2E2E2E] sm:border-[0px] pb-8 sm:pb-0">
                            <Image
                                className="w-10 md:w-[65px]"
                                src={"/icon-design.svg"}
                                width={65}
                                height={65}
                                alt="Data Driven Design"
                            />
                            <span className="text-sm text-center md:text-left lg:text-base xl:text-lg font-medium px-6 sm:px-0">
                                We put an emphasis on data driven design
                            </span>
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-4 items-center pb-2 md:pb-0">
                            <Image
                                className="w-10 md:w-[65px]"
                                src={"/icon-convert.svg"}
                                width={65}
                                height={74}
                                alt="Solutions that Convert"
                            />
                            <span className="text-sm text-center md:text-left lg:text-base xl:text-lg font-medium px-6 sm:px-0">
                                With a desire to create tailored solutions that
                                convert
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Core Values */}
            <CoreValues />

            {/* Partner Spotlight */}
            <div className="container mx-auto px-6 py-12 md:px-0">
                <Title
                    subTitle={"Our Network"}
                    mainTitle={"Partner Spotlight"}
                />

                <div className="w-full h-[400px] overflow-hidden relative mt-10">
                    <a href="https://elgdesign.co.uk/" target="_blank">
                        <video
                            autoPlay
                            muted
                            loop
                            src="https://elgdesign.co.uk/wp-content/uploads/2023/05/Background.mp4"
                        ></video>

                        <div className="absolute left-0 right-0 mx-auto top-1/2 px-12 -translate-y-1/2 xl:max-w-1/2 md:left-20 md:right-auto md:px-0">
                            <p className="uppercase text-(--fontColor) font-bold text-xl md:text-3xl">
                                We work closely with elg design to provide a
                                full service offering.
                            </p>
                            <img
                                className="my-4"
                                src="/elg-logo.svg"
                                alt="elg design logo"
                            />
                            <p className="text-(--fontColor) font-bold text-xl md:text-2xl">
                                Build a Brand . Create a Presence . Be Seen
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Latest Projects */}
            <LatestProjects />
        </div>
    );
}
