import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { VisualBreakEye, VisualBreakDoctor } from "@/components/VisualBreak";
import VideoSection from "@/components/VideoSection";
import Specialties from "@/components/Specialties";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <VisualBreakEye />
        <Specialties />
        <Differentials />
        <VideoSection />
        <Testimonials />
        <VisualBreakDoctor />
        <FAQ />
        <Locations />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
