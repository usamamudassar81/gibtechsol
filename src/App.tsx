import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { WhoWeAre } from './components/WhoWeAre';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { Growth } from './components/Growth';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { StrategyModal } from './components/StrategyModal';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Website Development');
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string, hashAnchor?: string) => {
    window.history.pushState(
      null,
      '',
      hashAnchor && path === '/' ? `${hashAnchor}` : path
    );
    setCurrentPath(path);

    if (hashAnchor) {
      setTimeout(() => {
        const el = document.querySelector(hashAnchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForContact(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setStrategyModalOpen(true);
    }
  };

  const scrollToServices = () => {
    handleNavigate('/services');
  };

  const isServicesPage = currentPath === '/services';
  const isPortfolioPage = currentPath === '/portfolio';

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] selection:bg-[#2563EB]/20 selection:text-[#0F172A] flex flex-col antialiased">
      {/* 1. Header with Dynamic Floating Glass Navbar */}
      <Header
        onOpenContactModal={() => setStrategyModalOpen(true)}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {isPortfolioPage ? (
          /* Dedicated Projects / Portfolio Page */
          <PortfolioPage
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenConsultation={(service) => {
              if (service) {
                setSelectedServiceForContact(service);
              }
              setStrategyModalOpen(true);
            }}
            onNavigateServices={() => handleNavigate('/services')}
          />
        ) : isServicesPage ? (
          /* Dedicated Services Page */
          <ServicesPage
            onOpenConsultation={(service) => {
              if (service) {
                setSelectedServiceForContact(service);
              }
              setStrategyModalOpen(true);
            }}
            onNavigateHome={(anchor) => handleNavigate('/', anchor)}
          />
        ) : (
          /* Homepage */
          <>
            {/* 2. Hero Section */}
            <Hero
              onOpenStrategyModal={() => setStrategyModalOpen(true)}
              onOpenProjectModal={() => scrollToContact('General Inquiry')}
              onExploreServices={scrollToServices}
            />

            {/* 3. Trust Bar */}
            <TrustBar />

            {/* 4. Who We Are */}
            <WhoWeAre />

            {/* 5. Services Section */}
            <Services onSelectService={scrollToContact} />

            {/* 6. How We Work / Process Section */}
            <Process />

            {/* 7. Capabilities Section */}
            <Capabilities onOpenConsultation={() => setStrategyModalOpen(true)} />

            {/* 8. Projects Section */}
            <Projects onSelectProject={(project) => setSelectedProject(project)} />

            {/* 9. Growth & Business Impact Section */}
            <Growth />

            {/* 10. Testimonials */}
            <Testimonials />

            {/* 11. Final CTA & Frictionless Briefing Form */}
            <FinalCTA initialService={selectedServiceForContact} />
          </>
        )}
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={(service) => {
          setSelectedProject(null);
          scrollToContact(service);
        }}
      />

      {/* Interactive Strategy Call Booking Modal */}
      <StrategyModal
        isOpen={strategyModalOpen}
        onClose={() => setStrategyModalOpen(false)}
      />
    </div>
  );
}
