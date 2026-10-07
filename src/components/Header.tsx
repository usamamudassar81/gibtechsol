import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';

interface HeaderProps {
  onOpenContactModal: () => void;
  currentPath?: string;
  onNavigate?: (path: string, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContactModal,
  currentPath = '/',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    currentPath === '/services'
      ? 'services'
      : currentPath === '/portfolio'
      ? 'portfolio'
      : 'hero'
  );

  useEffect(() => {
    if (currentPath === '/services') {
      setActiveSection('services');
      return;
    }
    if (currentPath === '/portfolio') {
      setActiveSection('portfolio');
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['hero', 'services', 'process', 'capabilities', 'projects', 'who-we-are', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'Process', href: '/#process', id: 'process' },
    { name: 'Portfolio', href: '/portfolio', id: 'portfolio' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'home' || href === '/') {
      if (onNavigate) {
        onNavigate('/');
      } else {
        window.history.pushState(null, '', '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'about' || href === '/about') {
      if (onNavigate) {
        onNavigate('/about');
      } else {
        window.history.pushState(null, '', '/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'services' || href === '/services') {
      if (onNavigate) {
        onNavigate('/services');
      } else {
        window.history.pushState(null, '', '/services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'portfolio' || href === '/portfolio') {
      if (onNavigate) {
        onNavigate('/portfolio');
      } else {
        window.history.pushState(null, '', '/portfolio');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // For hash anchors like /#process or /#contact
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (currentPath !== '/') {
        if (onNavigate) {
          onNavigate('/', hash);
        } else {
          window.history.pushState(null, '', '/');
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div
          className={`w-full max-w-[1280px] pointer-events-auto transition-all duration-200 ease-out flex items-center justify-between ${
            isScrolled
              ? 'mt-3 h-[68px] px-6 nav-floating-scrolled'
              : 'mt-4 h-[74px] px-6 sm:px-8 nav-floating-light'
          }`}
        >
          {/* Brand Mark (Zone 1: Single element wordmark with icon) */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero', 'hero')}
            className="flex items-center gap-2.5 text-[18px] sm:text-[20px] font-bold text-[#0F172A] tracking-tight hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
            aria-label="GibTechSols Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-sm shadow-[#2563EB]/25">
              <Code2 className="w-4 h-4" />
            </div>
            <span>GibTechSols</span>
          </a>

          {/* Desktop Navigation (Zone 2: 4-6 text links, 14px / 500) */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#475569]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`py-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563EB] rounded ${
                    isActive
                      ? 'text-[#2563EB] font-semibold'
                      : 'hover:text-[#0F172A]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button (Zone 3: Pill button #2563EB) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenContactModal}
              className="h-[44px] px-6 rounded-full text-[15px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.18)] active:translate-y-0 transition-all duration-180 flex items-center gap-2 group whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-180" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-28 lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-5">
            <span className="text-[12px] uppercase tracking-wider text-[#94A3B8] font-semibold">
              NAVIGATION
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`text-xl font-bold py-2 border-b border-[#E2E8F0] flex items-center justify-between ${
                    isActive ? 'text-[#2563EB]' : 'text-[#0F172A] hover:text-[#2563EB]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}
          </nav>

          <div className="space-y-4 pt-6 border-t border-[#E2E8F0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full h-[48px] rounded-full text-[15px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(37,99,235,0.18)] active:scale-[0.98] transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#64748B]">
              Direct engineering partnership · UK &amp; US Client Coverage
            </p>
          </div>
        </div>
      )}
    </>
  );
};
