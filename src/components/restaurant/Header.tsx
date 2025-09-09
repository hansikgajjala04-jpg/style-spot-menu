import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Bistro Élégant
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#menu" className="nav-link">Menu</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#reservation" className="nav-link">Reservation</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-foreground transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-foreground transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <ul className="flex flex-col space-y-3">
              <li><a href="#home" className="nav-link block" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#menu" className="nav-link block" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
              <li><a href="#about" className="nav-link block" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#gallery" className="nav-link block" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
              <li><a href="#reservation" className="nav-link block" onClick={() => setIsMenuOpen(false)}>Reservation</a></li>
              <li><a href="#contact" className="nav-link block" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;