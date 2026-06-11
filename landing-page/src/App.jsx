import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
