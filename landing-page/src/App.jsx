import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logobar from "./components/Logobar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
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
        <Logobar />
        <Features />
        <Pricing />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
