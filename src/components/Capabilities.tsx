import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TechItem } from '../types';
import { ArrowRight, Sparkles, Layers, Cpu, Database, ShoppingCart, Globe } from 'lucide-react';

interface CapabilitiesProps {
  onOpenConsultation?: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenConsultation }) => {
  // Existing GitTechSols technology data fully preserved
  const technologies: TechItem[] = [
    // Frontend
    {
      name: 'React',
      category: 'Frontend',
      description: 'Component-driven interactive SPAs, virtual DOM optimization, and reactive state systems.',
      experience: 'Senior Mastery',
      iconType: 'react',
      useCases: ['Enterprise SaaS Frontends', 'Interactive Portals', 'Fintech Dashboards'],
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      description: 'Server Components, SSR/SSG, dynamic streaming, and sub-second Core Web Vitals.',
      experience: 'Core Architecture',
      iconType: 'next',
      useCases: ['High-traffic Web Platforms', 'Full-stack B2B Systems', 'Marketing Engines'],
    },
    // Backend
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'Asynchronous event-driven I/O runtimes powering microservices and high-throughput gateways.',
      experience: 'Senior Backend',
      iconType: 'node',
      useCases: ['Realtime APIs', 'Microservices', 'Distributed Workers'],
    },
    {
      name: 'Express.js',
      category: 'Backend',
      description: 'Lightweight, battle-tested REST API architecture with robust middleware chains.',
      experience: 'Production Hardened',
      iconType: 'express',
      useCases: ['RESTful Web Services', 'Third-party Integrations', 'Authentication Proxies'],
    },
    {
      name: '.NET',
      category: 'Backend',
      description: 'High-performance C# enterprise applications, typed contracts, and enterprise scalability.',
      experience: 'Enterprise Tier',
      iconType: 'dotnet',
      useCases: ['Mission-critical Banking', 'Healthcare APIs', 'High-concurrency Engines'],
    },
    {
      name: 'PHP',
      category: 'Backend',
      description: 'Modern PHP 8+ object-oriented backends, Laravel architecture, and headless CMS systems.',
      experience: 'Senior Level',
      iconType: 'php',
      useCases: ['Custom Web Portals', 'Legacy Modernization', 'WordPress VIP Custom Core'],
    },
    // E-commerce
    {
      name: 'Liquid',
      category: 'E-commerce',
      description: 'Bespoke Shopify theme templating language for pixel-perfect storefronts and lightning render speeds.',
      experience: 'Theme Specialist',
      iconType: 'liquid',
      useCases: ['Custom Shopify Plus Themes', 'Cart Drawer Engineering', 'Section Architecture'],
    },
    // Databases
    {
      name: 'Firebase',
      category: 'Databases',
      description: 'Firestore real-time persistence, authentication rules, Cloud Functions, and edge triggers.',
      experience: 'Full Integration',
      iconType: 'firebase',
      useCases: ['Mobile App Backends', 'Real-time Chat & Telemetry', 'Rapid MVP Scaffolding'],
    },
    {
      name: 'MongoDB',
      category: 'Databases',
      description: 'Document-oriented NoSQL persistence for dynamic schemas, aggregation pipelines, and high-read indexing.',
      experience: 'Scale & Aggregations',
      iconType: 'mongo',
      useCases: ['Content Catalogs', 'Event Logging & Audit Trails', 'Dynamic Metadata'],
    },
    {
      name: 'Supabase',
      category: 'Databases',
      description: 'PostgreSQL-backed relational database with instant REST/GraphQL APIs and Row Level Security.',
      experience: 'Modern Postgres',
      iconType: 'supabase',
      useCases: ['SaaS Data Layers', 'PostgreSQL RLS Architecture', 'Realtime Subscriptions'],
    },
    {
      name: 'MySQL',
      category: 'Databases',
      description: 'Relational ACID-compliant transaction engines, normalized indexing, and query optimization.',
      experience: 'Enterprise DBA',
      iconType: 'mysql',
      useCases: ['E-commerce Inventory', 'Financial Ledgers', 'High-volume Transactions'],
    },
  ];

  // Hover state between left Bento grid and right visualization
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Grouped categories for the 2x2 Bento grid
  const categoryGroups = [
    {
      id: 'frontend',
      index: '01',
      title: 'FRONTEND',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 'backend',
      index: '02',
      title: 'BACKEND',
      items: ['Node.js', 'Express.js', '.NET', 'PHP'],
    },
    {
      id: 'ecommerce',
      index: '03',
      title: 'E-COMMERCE & CLOUD',
      items: ['Liquid', 'Shopify Plus', 'Firebase'],
    },
    {
      id: 'databases',
      index: '04',
      title: 'DATA & STORAGE',
      items: ['Supabase', 'MySQL', 'MongoDB', 'PostgreSQL'],
    },
  ];

  // Right Side Ecosystem Nodes definition with deterministic relative coordinates
  // (x, y percentages around center 50%, 50%)
  const ecosystemNodes = [
    { name: 'React', x: 50, y: 10, isPrimary: true, delay: '0s' },
    { name: 'Next.js', x: 74, y: 19, isPrimary: false, delay: '0.8s' },
    { name: 'Node.js', x: 26, y: 32, isPrimary: true, delay: '1.2s' },
    { name: 'PHP', x: 88, y: 44, isPrimary: false, delay: '1.6s' },
    { name: '.NET', x: 78, y: 64, isPrimary: true, delay: '0.4s' },
    { name: 'MySQL', x: 22, y: 66, isPrimary: false, delay: '2.1s' },
    { name: 'Supabase', x: 68, y: 88, isPrimary: false, delay: '1.4s' },
    { name: 'Liquid', x: 34, y: 88, isPrimary: false, delay: '0.6s' },
    { name: 'Firebase', x: 14, y: 46, isPrimary: false, delay: '1.9s' },
    { name: 'MongoDB', x: 48, y: 52, isPrimary: false, delay: '1.1s', isCenterLabel: true },
  ];

  // Canvas ref for the central interactive 3D digital sphere mesh
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0.25, y: 0.45 });
  const rotVelocity = useRef({ x: 0.0015, y: 0.0035 });

  // Handle Drag Interaction for 3D sphere rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    dragStartPos.current = { x: e.clientX, y: e.clientY };

    rotation.current.y += dx * 0.008;
    rotation.current.x += dy * 0.008;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Canvas drawing loop for the central digital network sphere
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let prefersReducedMotion = false;
    if (typeof window !== 'undefined' && window.matchMedia) {
      prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Generate sphere lattice vertices
    const sphereRadius = 110;
    const latCount = 14;
    const lonCount = 20;
    const points: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i <= latCount; i++) {
      const theta = (i * Math.PI) / latCount;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let j = 0; j < lonCount; j++) {
        const phi = (j * 2 * Math.PI) / lonCount;
        points.push({
          x: sphereRadius * sinTheta * Math.cos(phi),
          y: sphereRadius * cosTheta,
          z: sphereRadius * sinTheta * Math.sin(phi),
        });
      }
    }

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Gentle auto-rotation if not dragging and not reduced motion
      if (!isDragging.current && !prefersReducedMotion) {
        rotation.current.y += rotVelocity.current.y;
        rotation.current.x += rotVelocity.current.x;
      }

      const rx = rotation.current.x;
      const ry = rotation.current.y;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      // Rotate points
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const fov = 380;
        const scale = fov / (fov + z2 + 160);
        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          z: z2,
          scale,
        };
      });

      // Draw faint wireframe latitude lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i <= latCount; i++) {
        ctx.beginPath();
        const startIdx = i * lonCount;
        for (let j = 0; j < lonCount; j++) {
          const pt = projected[startIdx + j];
          if (j === 0) {
            ctx.moveTo(pt.px, pt.py);
          } else {
            ctx.lineTo(pt.px, pt.py);
          }
        }
        // Close loop
        const firstPt = projected[startIdx];
        ctx.lineTo(firstPt.px, firstPt.py);
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)';
        ctx.stroke();
      }

      // Draw longitude line connections
      for (let j = 0; j < lonCount; j++) {
        ctx.beginPath();
        for (let i = 0; i <= latCount; i++) {
          const pt = projected[i * lonCount + j];
          if (i === 0) {
            ctx.moveTo(pt.px, pt.py);
          } else {
            ctx.lineTo(pt.px, pt.py);
          }
        }
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.12)';
        ctx.stroke();
      }

      // Draw cross-diagonal lattice lines for rich technical structure
      for (let i = 0; i < latCount; i++) {
        for (let j = 0; j < lonCount; j++) {
          const p1 = projected[i * lonCount + j];
          const nextLon = (j + 1) % lonCount;
          const p2 = projected[(i + 1) * lonCount + nextLon];
          if (p1.z > -40) {
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
            ctx.stroke();
          }
        }
      }

      // Draw subtle vertices
      for (let i = 0; i < projected.length; i += 2) {
        const pt = projected[i];
        if (pt.z > -20) {
          const alpha = Math.max(0.1, (pt.z + sphereRadius) / (2 * sphereRadius));
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 1.3 * pt.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(37, 99, 235, ${alpha * 0.4})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleExploreClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="capabilities"
      className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-t border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Two-Column Desktop Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Content + 2x2 Bento Technology Categories    */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Small Eyebrow Label */}
            <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-[0.16em] uppercase block mb-2.5">
              OUR FOUNDATION
            </span>

            {/* Headline with Two-Tone Emphasis */}
            <h2 className="text-fluid-h2 font-bold text-[#0F172A] tracking-[-0.03em] mb-4 text-balance">
              Technology that <br className="hidden sm:inline" />
              <span className="text-[#2563EB]">fits the product</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.6] mb-6 max-w-[500px]">
              We choose technology around the product, the team, and the problem being solved. Our stack covers the tools we use to design, build, launch, and support dependable digital products.
            </p>

            {/* 2 × 2 Bento-style Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-6">
              {categoryGroups.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-[18px] p-4 sm:p-4.5 bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-200 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-semibold tracking-wider text-[#475569] uppercase">
                      {cat.title}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-[#2563EB]">
                      {cat.index}
                    </span>
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech) => {
                      const isHovered = hoveredTech === tech;
                      return (
                        <button
                          key={tech}
                          onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className={`px-2.5 py-0.5 rounded-full text-[11px] sm:text-[12px] font-medium transition-all duration-150 cursor-pointer ${
                            isHovered || selectedTech === tech
                              ? 'bg-[#2563EB] text-white shadow-xs scale-[1.02]'
                              : 'bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB]'
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Information Panel */}
            <div className="w-full rounded-[18px] p-4.5 sm:p-5 bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs">
              <p className="text-[13px] text-[#475569] leading-relaxed mb-3">
                These are some of the technologies we use most often on client work. Our delivery stack also includes additional tools, integrations, and platform-specific skills selected around project requirements.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                <button
                  onClick={handleExploreClick}
                  className="h-[40px] px-5 rounded-full text-[13px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.18)] active:translate-y-0 transition-all duration-180 flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <span>Explore all skills &amp; technologies</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-180" />
                </button>
                <span className="text-[11px] text-[#94A3B8]">
                  See broader capabilities beyond the homepage stack.
                </span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive Technology Ecosystem Visual     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <div
              ref={containerRef}
              className="w-full max-w-[490px] aspect-square rounded-[22px] bg-[#FFFFFF] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.04)] relative overflow-hidden select-none p-3 sm:p-5 flex items-center justify-center cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              title="Click and drag to rotate technology mesh"
            >
              {/* Background ambient radial glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 blur-3xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.12) 0%, rgba(248, 250, 252, 0) 70%)',
                }}
              />

              {/* Central 3D Canvas Network Lattice */}
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full pointer-events-none"
              />

              {/* Connecting SVG Lines between outer nodes & center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {ecosystemNodes.map((node) => {
                  const isHovered = hoveredTech === node.name || selectedTech === node.name;
                  return (
                    <line
                      key={`line-${node.name}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2="50%"
                      y2="50%"
                      stroke={isHovered ? '#2563EB' : 'rgba(226, 232, 240, 0.85)'}
                      strokeWidth={isHovered ? 1.5 : 1}
                      strokeDasharray={isHovered ? 'none' : '3, 3'}
                      className="transition-colors duration-200"
                    />
                  );
                })}
              </svg>

              {/* Floating Technology Nodes */}
              {ecosystemNodes.map((node) => {
                const isHovered = hoveredTech === node.name || selectedTech === node.name;
                const isCenter = node.isCenterLabel;

                return (
                  <div
                    key={node.name}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredTech(node.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTech(selectedTech === node.name ? null : node.name);
                    }}
                    className={`absolute z-20 pointer-events-auto cursor-pointer transition-all duration-200 ease-out ${
                      node.isPrimary ? 'animate-float-card' : 'animate-float-laptop'
                    }`}
                  >
                    <div
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shadow-xs ${
                        isHovered
                          ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-[0_6px_20px_rgba(37,99,235,0.25)] scale-110 z-30'
                          : isCenter
                          ? 'bg-[#FFFFFF] text-[#0F172A] border-[#CBD5E1] text-[12px] font-semibold'
                          : 'bg-[#FFFFFF] text-[#0F172A] border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[12px] sm:text-[13px] font-medium'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                      <span>{node.name}</span>
                    </div>
                  </div>
                );
              })}

              {/* Subtle Interactive Instruction Pill (Bottom Left per Reference Image) */}
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <div className="px-3 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2E8F0] shadow-xs text-[10px] sm:text-[11px] font-medium text-[#64748B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  <span>Drag to explore technologies</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
