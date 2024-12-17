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
    <div className="flex flex-col gap-6 relative w-full h-auto">
         <HeaderSection />
     <NavbarSection/>
      <HeroSection />
      <ShopCard/>
      <Featured/>
      <Carausel/>
      <ContainerFluid/>
      <FeaturedPost/>
      <Footer/>
  
          </div>
  );
}
