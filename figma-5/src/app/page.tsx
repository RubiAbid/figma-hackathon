import HeroSection from "@/components/HeroSection";
import ShopCard from "@/components/ShopCard";
import Featured from "@/components/Featured";
import Carausel from "@/components/Carausel";
import ContainerFluid from "@/components/ContainerFluid";
import FeaturedPost from "@/components/FeaturedPost";
import Footer from "@/components/Footer";
import NavbarSection from "@/components/NavbarSection";
import HeaderSection from "@/components/HeaderSection";



export default function Home() {
  return (
    <div className="flex flex-col gap-6 relative w-full h-auto overflow-visible">
         <HeaderSection />
     <NavbarSection/>
      <HeroSection />
      <ShopCard/>
      <Featured/>
      <Carausel/>
      <ContainerFluid/>
      <FeaturedPost/>
      <div className="lg:translate-y-0  sm:translate-y-[200px] lg:translate-x-0 sm:translate-x-[125px]">
      <Footer/>
      </div>
  
          </div>
  );
}
