const Hero = () => {
  return (
    <section id="home" className="bg-hero text-primary-foreground min-h-screen flex items-center section-padding">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-hero font-bold mb-6">
          Experience Culinary Excellence
        </h1>
        <p className="text-subheading mb-8 max-w-2xl mx-auto opacity-90">
          Where every dish tells a story and every meal becomes a memory. 
          Join us for an unforgettable dining experience in the heart of the city.
        </p>
        <button className="btn-hero animate-glow">
          Book a Table
        </button>
      </div>
    </section>
  );
};

export default Hero;