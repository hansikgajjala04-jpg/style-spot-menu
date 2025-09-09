const Menu = () => {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        {
          name: "Truffle Arancini",
          description: "Crispy risotto balls with black truffle and parmesan",
          price: "$14",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          )
        },
        {
          name: "Seared Scallops",
          description: "Pan-seared with cauliflower purée and pancetta chips",
          price: "$18",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          )
        },
        {
          name: "Burrata Caprese",
          description: "Fresh burrata with heirloom tomatoes and basil oil",
          price: "$16",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          )
        }
      ]
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "Grilled to perfection with roasted vegetables and red wine jus",
          price: "$48",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
            </svg>
          )
        },
        {
          name: "Atlantic Salmon",
          description: "Cedar plank roasted with lemon herb butter and quinoa",
          price: "$32",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16c-2.69 0-5.77 1.28-6 2-1.72-4.62-1.72-9.38 0-14 .23.72 3.31 2 6 2s5.77-1.28 6-2c1.72 4.62 1.72 9.38 0 14-.23-.72-3.31-2-6-2z"/>
            </svg>
          )
        },
        {
          name: "Duck Confit",
          description: "Slow-cooked duck leg with cherry gastrique and wild rice",
          price: "$36",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          )
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Chocolate Soufflé",
          description: "Warm dark chocolate soufflé with vanilla bean ice cream",
          price: "$12",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2 7h7l-5.5 4.5 2 7L12 16l-5.5 4.5 2-7L3 9h7l2-7z"/>
            </svg>
          )
        },
        {
          name: "Crème Brûlée",
          description: "Classic vanilla custard with caramelized sugar and berries",
          price: "$10",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12l2 2 4-4"/>
            </svg>
          )
        },
        {
          name: "Tiramisu",
          description: "Traditional Italian dessert with espresso and mascarpone",
          price: "$11",
          icon: (
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="10" rx="2"/>
              <circle cx="12" cy="5" r="2"/>
              <path d="M12 7v4"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="menu" className="bg-subtle-gradient section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-bold mb-4">Our Menu</h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={item.name} className="menu-card">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <span className="text-accent font-bold text-lg ml-2">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;