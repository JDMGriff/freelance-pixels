import HomeHero from "@/components/homepage/HomeHero";
import HomeServiceBlocks from "@/components/homepage/HomeServiceBlocks";
import OurApproach from "@/components/homepage/OurApproach";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeServiceBlocks />
            <OurApproach />
        </div>
    );
}
