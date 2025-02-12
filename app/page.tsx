import HomeHero from "@/components/homepage/HomeHero";
import HomeServiceBlocks from "@/components/homepage/HomeServiceBlocks";
import OurApproach from "@/components/homepage/OurApproach";
import Nav from "@/components/Nav";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeServiceBlocks />
            <OurApproach />
        </div>
    );
}
