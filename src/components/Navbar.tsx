import { Sun, Moon, Facebook, Twitter, Instagram, Coffee, MapPin, Phone, Mail, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Career', href: '/career' },
  { name: 'Training', href: '/training' },
  { name: "FAQ's", href: '/faqs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', color: 'bg-blue-600' },
  { icon: Twitter, href: '#', color: 'bg-blue-400' },
  { icon: Instagram, href: '#', color: 'bg-red-400' },
  { icon: Coffee, href: '#', color: 'bg-lime-400' },
];

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <nav className="w-full bg-orange-500 dark:bg-zinc-900 text-white dark:text-zinc-100 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link, idx) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className={`font-semibold px-2 hover:text-orange-200 transition-colors ${idx !== navLinks.length - 1 ? 'border-r border-white/30' : ''}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu size={28} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-orange-500 dark:bg-zinc-900 w-64 p-0">
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-6 py-3 text-lg font-semibold hover:bg-orange-600 dark:hover:bg-zinc-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Center: Socials */}
          <div className="hidden md:flex items-center gap-2">
            <span className="font-bold mr-2 hidden md:inline">Follow Us:</span>
            {socialLinks.map(({ icon: Icon, href, color }, idx) => (
              <div key={idx} className="flex items-center">
                {idx !== 0 && (
                  <span className={`w-1 h-8 rounded-full ${color} mx-2`} />
                )}
                <a
                  href={href}
                  className="rounded-full p-1 hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={28} className="text-white" />
                </a>
              </div>
            ))}
          </div>
          {/* Right: CTA + Dark Mode */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button className="bg-lime-400 text-black font-bold hover:bg-lime-500 transition-colors">
                Let's Have a Cup of Coffee?
              </Button>
            </div>
            <div>
              <button
                onClick={() => setDarkMode((d) => !d)}
                className="ml-2 p-2 rounded-full bg-white/20 hover:bg-white/40 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Info Bar Below Navbar */}
      <div className="w-full bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border-b border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-4 text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center min-w-[120px] justify-center md:justify-start w-full md:w-auto mb-2 md:mb-0">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-orange-500 leading-none">JIS</span>
              <span className="text-xs text-cyan-600 font-semibold tracking-wide -mt-1">JHARKHAND IT SOLUTIONS</span>
            </div>
          </div>
          {/* Address */}
          <div className="flex items-center gap-2 flex-1 justify-center border-l border-r border-gray-300 dark:border-zinc-600 px-2 md:px-6 min-w-[180px]">
            <MapPin className="text-zinc-500 mr-2" />
            <div className="text-xs md:text-sm text-zinc-700 dark:text-zinc-200">
              <div>Riverview Colony, Near Vidya Vikas Public School,</div>
              <div>Boriya Road,Morabadi,Ranchi-834006</div>
            </div>
          </div>
          {/* Phone & Email */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 min-w-[180px] justify-end">
            <div className="flex items-center gap-2 border-r border-gray-300 dark:border-zinc-600 pr-0 md:pr-6">
              <Phone className="text-zinc-500 mr-2" />
              <div className="text-xs md:text-sm">
                <div>+91 9031143738</div>
                <div>+91 7033333433</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-zinc-500 mr-2" />
              <div className="text-xs md:text-sm">
                <div>info@jharkhanditsolutions.com</div>
                <div>jharkhanditsolutions@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 