import { useEffect } from "react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Distance user scrolled is different than the navbar
      setIsScrolled(window.screenY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return <nav className="{fixed w-full z-40 isScrolled ? 'py-3 bg-background/80' : 'py-5' }">

    <div className="container flx items-center justify-between">
      <a href="">Anastassia Medvedeva Portfolio
      </a>
    </div>


  </nav>
}