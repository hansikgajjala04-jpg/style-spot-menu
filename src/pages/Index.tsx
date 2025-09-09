import Header from "@/components/restaurant/Header";
import Hero from "@/components/restaurant/Hero";
import Menu from "@/components/restaurant/Menu";
import About from "@/components/restaurant/About";
import Gallery from "@/components/restaurant/Gallery";
import Reservation from "@/components/restaurant/Reservation";
import Contact from "@/components/restaurant/Contact";
import Footer from "@/components/restaurant/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
