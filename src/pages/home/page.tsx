import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ScrollReveal from "../../components/base/ScrollReveal";
import TravelServices from "./components/TravelServices";
import HowItWorks from "./components/HowItWorks";
import AboutSection from "./components/AboutSection";
import WhyBookSection from "./components/WhyBookSection";
import TrustSection from "./components/TrustSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import ContactFooter from "./components/ContactFooter";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <NavBar />
      <main>
        <HeroSection />

        {/* Reassurance strip */}
        <div className="bg-amber-50 border-b border-amber-100 py-6 px-6">
          <ScrollReveal direction="up" delay={0} duration={600}>
            <p className="text-center text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
              Not sure where to start?{" "}
              <span className="font-semibold text-gray-800">That's fine.</span>{" "}
              Just reach out and we'll figure it out together.
            </p>
          </ScrollReveal>
        </div>

        <AboutSection />
        <TravelServices />
        <HowItWorks />
        <WhyBookSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <ContactFooter />
      <FloatingCTA />
    </div>
  );
}
