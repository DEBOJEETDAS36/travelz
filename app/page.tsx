import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import ReviewSection from "@/components/ReviewSection";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PackagesSection />
        <AboutSection />
        <ReviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
