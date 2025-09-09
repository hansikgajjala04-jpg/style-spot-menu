const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Restaurant Story */}
          <div className="animate-fade-in">
            <h2 className="text-heading font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Founded in 2015, Bistro Élégant began as a dream to create an intimate dining experience 
                that celebrates both traditional French cuisine and modern culinary innovation.
              </p>
              <p className="text-muted-foreground">
                Nestled in the heart of the city, our restaurant combines the warmth of a neighborhood 
                bistro with the sophistication of fine dining. Every dish is a testament to our commitment 
                to quality, creativity, and the pure joy of exceptional food.
              </p>
              <p className="text-muted-foreground">
                We source our ingredients from local farms and artisan producers, ensuring that each meal 
                not only delights your palate but also supports our community.
              </p>
            </div>
          </div>

          {/* Chef Highlight */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <div className="text-center mb-6">
                {/* Chef Avatar (CSS Shape) */}
                <div className="w-24 h-24 bg-accent-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Chef Laurent Dubois</h3>
                <p className="text-accent font-semibold">Executive Chef & Owner</p>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 15 years of experience in Michelin-starred kitchens across France and New York, 
                  Chef Laurent brings a unique vision to every plate.
                </p>
                <p>
                  His philosophy centers on respecting ingredients while pushing creative boundaries, 
                  resulting in dishes that are both familiar and surprising.
                </p>
              </div>

              {/* Awards */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-primary mb-2">Recent Recognition</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• James Beard Award Nominee (2023)</li>
                  <li>• Zagat's "30 Under 30" (2022)</li>
                  <li>• Food & Wine "Best New Chef" (2021)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;