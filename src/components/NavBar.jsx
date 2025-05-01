import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

function NavBar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50 border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="h-4 w-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="h-4 w-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>

        {/* mobile menuBtn */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <MdClose className="size-6" />
          ) : (
            <IoMenu className="size-6" />
          )}
        </button>

        {/* Desktop navitems */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* get in touch btn */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium hover:shadow-lg hover:shadow-blue-100 transition-all">
          <a href="#newsletter">Get In Touch</a>
        </button>
      </div>

      {/* mobilemenuItems */}
      
        {isMenuOpen && (
          <div clasName="md:hidden bg-white border-t py-4  border-gray-100">
            <div className="container mx-auto space-y-3 px-4">
              {navLinks.map((link, i) => (
                <a
                  className={`block text-sm font-medium py-2 ${
                    activeLink == link.href ? "text-blue-600" : "text-gray-900"
                  }`}
                  key={i}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}

              {/* get in touch btn */}
              <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium hover:shadow-lg hover:shadow-blue-100 transition-all">
                <a href="#newsletter">Get In Touch</a>
              </button>
            </div>
          </div>
        )}
   
    </nav>
  );
}

export default NavBar;
