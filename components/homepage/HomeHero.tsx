import Button from "../Button";

const HomeHero = () => {
    return (
        <div className="container mx-auto px-6 h-screen flex flex-col items-start justify-center md:px-0">
            <div className="max-w-[600px]">
                <span className="uppercase text-(--lightFont) font-semibold flex items-center">
                    <div className="w-[1px] h-[18px] bg-(--accent) rotate-[25deg] mr-3"></div>
                    Discover, Design, Develop
                </span>
                <h1 className="uppercase font-bold text-4xl mb-4 mt-2 leading-[50px] md:text-5xl md:mb-6 md:leading-[60px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex flex-col">
                        <span className="uppercase text-xs text-(--lightFont) font-semibold mb-2">
                            Location
                        </span>
                        <p className="leading-4">Essex, United Kingdom</p>
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
    );
};

export default HomeHero;
