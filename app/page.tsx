import HomeHero from "@/components/homepage/HomeHero";
import HomeServiceBlocks from "@/components/homepage/HomeServiceBlocks";
import OurApproach from "@/components/homepage/OurApproach";
import LatestProjects from "@/components/LatestProjects";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeServiceBlocks />
            <OurApproach />
            <LatestProjects />
        </div>
    );
}
