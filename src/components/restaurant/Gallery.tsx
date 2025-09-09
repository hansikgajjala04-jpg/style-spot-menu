const Gallery = () => {
  const galleryItems = [
    {
      caption: "Intimate Dining Room",
      gradient: "linear-gradient(135deg, hsl(15 80% 60%), hsl(25 70% 50%))",
      shape: "rounded-xl",
    },
    {
      caption: "Chef's Kitchen",
      gradient: "linear-gradient(135deg, hsl(200 70% 60%), hsl(220 80% 50%))",
      shape: "rounded-full",
    },
    {
      caption: "Private Wine Cellar",
      gradient: "linear-gradient(135deg, hsl(260 60% 50%), hsl(280 70% 60%))",
      shape: "rounded-2xl",
    },
    {
      caption: "Garden Terrace",
      gradient: "linear-gradient(135deg, hsl(120 60% 50%), hsl(140 70% 40%))",
      shape: "rounded-xl",
    },
    {
      caption: "Bar & Lounge",
      gradient: "linear-gradient(135deg, hsl(45 90% 60%), hsl(35 85% 55%))",
      shape: "rounded-3xl",
    },
    {
      caption: "Chef's Table",
      gradient: "linear-gradient(135deg, hsl(0 65% 50%), hsl(15 75% 45%))",
      shape: "rounded-xl",
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-bold mb-4">Our Spaces</h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            Experience the ambiance and elegance of our carefully designed restaurant spaces
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.caption}
              className="gallery-item animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-full h-full ${item.shape} relative overflow-hidden`}
                style={{ background: item.gradient }}
              >
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-black/10">
                  <div className="absolute inset-4 border-2 border-white/20 rounded-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg 
                      className="w-12 h-12 text-white/30" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg text-primary">{item.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;