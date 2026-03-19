import Navbar from "@/components/Navbar";
import VideoScrollBanner from "@/components/VideoScrollBanner";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VideoScrollBanner />
      <QuickLinks />
      <Footer />
    </div>
  );
};

export default Index;
