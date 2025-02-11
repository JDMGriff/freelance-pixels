import Button from "../Button";

const HomeHero = () => {
    return (
        <div className="container mx-auto h-full flex flex-col items-start justify-center">
            <div className="max-w-[600px]">
                <span className="uppercase text-(--lightFont) font-semibold">
                    Lorem Ipsum
                </span>
                <h1 className="uppercase font-bold text-5xl my-6 leading-[60px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <div className="flex gap-10">
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
