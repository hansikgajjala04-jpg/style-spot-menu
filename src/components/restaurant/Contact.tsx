const Contact = () => {
  const contactInfo = [
    {
      label: "Address",
      value: "123 Culinary Street\nDowntown, NY 10001",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "(555) 123-4567",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
    },
    {
      label: "Email",
      value: "hello@bistroelegant.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
    },
  ];

  const hours = [
    { day: "Monday - Thursday", time: "5:00 PM - 10:00 PM" },
    { day: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
    { day: "Sunday", time: "4:00 PM - 9:00 PM" },
  ];

  return (
    <section id="contact" className="section-padding bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-bold mb-4">Get in Touch</h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Contact us for reservations, events, or any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.label}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Hours of Operation</h3>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="space-y-4">
                  {hours.map((item) => (
                    <div key={item.day} className="flex justify-between items-center">
                      <span className="font-medium">{item.day}</span>
                      <span className="text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Closed on major holidays. Please call ahead for special events.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold text-primary mb-6">Location</h3>
            <div className="relative rounded-xl overflow-hidden h-96 bg-gradient-to-br from-primary/20 to-accent/20">
              {/* Map Placeholder with Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-primary/20"></div>
                  ))}
                </div>
              </div>
              
              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-glow">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>

              {/* Location Label */}
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <p className="font-semibold text-sm">Bistro Élégant</p>
                <p className="text-xs text-muted-foreground">Downtown District</p>
              </div>
            </div>

            {/* Directions Button */}
            <div className="mt-6 text-center">
              <button className="btn-primary">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;