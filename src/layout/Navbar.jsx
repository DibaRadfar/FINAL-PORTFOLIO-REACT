import React from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        } z-50`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors"
          >
            DIBA <span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 items-center flex gap-1">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - نسخه دسکتاپ */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button size="sm">Contact Me</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} target="_blank">
                <Button className="w-full">Contact Me</Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
