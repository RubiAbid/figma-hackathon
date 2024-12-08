import HeroSection from "@/components/HeroSection";
import ShopCard from "@/components/ShopCard";
import Featured from "@/components/Featured";
import Carausel from "@/components/Carausel";
import ContainerFluid from "@/components/ContainerFluid";
import FeaturedPost from "@/components/FeaturedPost";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
     
      <HeroSection />
      <ShopCard/>
      <Featured/>
      <Carausel/>
      <ContainerFluid/>
      <FeaturedPost/>
  
          </div>
  );
}
