// app/page.js
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import StepsSection from "./components/StepsSection";
import ProductsSection from "./components/ProductsSection";
import FAQsSection from "./components/FAQsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="mt-16">
        <HomeSection />
        <AboutSection />
        <StepsSection />
        <ProductsSection />
        <FAQsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
