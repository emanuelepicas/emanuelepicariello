import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: 'about', label: 'About Me' },
    //{ href: 'services', label: 'Book a Service' },
    { href: 'certifications', label: 'Certifications' },
    { href: 'projects', label: 'Projects' },
  //  { href: 'blog', label: 'Blog' },
    { href: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false); // Close the mobile menu when changing pages
    }
  }, [location]);

  const handleNavClick = (href) => {
    if (location.pathname !== '/') {
      // If not on the homepage, navigate to the homepage with the anchor
      window.location.href = `/#${href}`;
    } else {
      // On the homepage, directly scroll to the section
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="EP"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-3 text-lg font-semibold text-gray-900">
                Emanuele Picariello
              </span>
            </RouterLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              location.pathname === '/' ? (
                <ScrollLink
                  key={item.href}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="nav-link cursor-pointer relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0a2b1d] transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link cursor-pointer relative group bg-transparent border-none p-0"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0a2b1d] transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-2 rounded-md"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                location.pathname === '/' ? (
                  <ScrollLink
                    key={item.href}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="nav-link block cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="nav-link block cursor-pointer bg-transparent border-none p-0"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
