import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SocialMediaSection from "@/components/social-media-section";
import MentoringSection from "@/components/mentoring-section";
import ProductsSection from "@/components/products-section";
import BooksSection from "@/components/books-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SocialMediaSection />
      <MentoringSection />
      <ProductsSection />
      <BooksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
