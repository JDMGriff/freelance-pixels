import Button from "../ui/Button";

const HomeHero = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-(--background) bg-blend-overlay bg-[url(/home-hero-bg.png)]">
            <div className="bg-cover bg-center bg-no-repeat bg-[url(/bg-overlay.png)]">
                <div className="container mx-auto px-6 h-screen lg:px-0">
                    <div className="max-w-[600px] h-full flex flex-col items-start py-8 md:justify-center">
                        <span className="uppercase text-(--lightFont) text-sm md:text-base font-semibold flex items-center mt-38 md:mt-0">
                            <div className="w-[1px] h-[18px] bg-(--accent) rotate-[25deg] mr-3"></div>
                            Discover {">"} Design {">"} Develop {">"} Deploy
                        </span>
                        <h1 className="uppercase font-bold text-4xl leading-[50px] md:text-5xl md:mb-6 md:leading-[60px] md:mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </h1>
                        <div className="flex flex-col gap-6 mt-auto relative -top-6 md:-top-0 md:flex-row md:gap-10 md:mt-0">
                            <div className="flex flex-col">
                                <span className="uppercase text-xs text-(--lightFont) font-semibold mb-2">
                                    Location
                                </span>
                                <p className="leading-4">
                                    Essex, United Kingdom
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <span className="uppercase text-xs text-(--lightFont) font-semibold mb-2">
                                    Availibility
                                </span>
                                <Button
                                    link={"/contact"}
                                    text={"Available for Work"}
                                    fontSize={"text-base"}
                                    textColour={"text-(--fontColor)"}
                                    fontWeight={"text-base"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
