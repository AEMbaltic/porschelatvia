import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <QuickLinks />
      <Footer />
    </div>
  );
};

export default Index;
