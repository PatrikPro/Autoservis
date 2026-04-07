import Hero from "@/components/home/Hero";
import PromoBar from "@/components/home/PromoBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import ImageDivider from "@/components/home/ImageDivider";
import CalculatorCTA from "@/components/home/CalculatorCTA";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <PromoBar />
      <Hero />
      <ServicesPreview />
      <ImageDivider />
      <CalculatorCTA />
      <WhyUs />
      <Testimonials />
    </>
  );
}
