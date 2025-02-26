import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";

export default function Work() {
    return (
        <>
            <Hero
                title={"latest and greatest creations & concoctions"}
                subtitle={"Our Craft"}
                subtext={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            />

            {/* Latest Projects */}
            <LatestProjects />
        </>
    );
}
