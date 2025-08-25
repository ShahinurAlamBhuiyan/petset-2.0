import AboutUs from "@/components/home/AboutUs";
import PetSpecialists from "@/components/home/PetSpecialists";
import HomeCarousel from "@/components/home/HomeCarousel";
import OurFeatures from "@/components/home/OurFeatures";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <WhyChoose />
      <OurFeatures />
      <AboutUs />
      <PetSpecialists />
    </>
  );
}
