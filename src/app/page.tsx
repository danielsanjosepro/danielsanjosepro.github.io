"use client";
import { Intro } from '@/components/Intro';
import { ProfilePicture } from '@/components/ProfilePicture';
import { Articles } from '@/components/Articles';
import ThemeToggle from '@/components/ThemeToggle';
import { ContactMe } from '@/components/ContactMe';
import { useEffect, useRef, useState } from 'react';
import { Experience } from '@/components/Experience';
import { Studies } from '@/components/Studies';
import { Social } from '@/components/Social';
import { useMotionValue } from 'framer-motion';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mouse position values with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation config
  //const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };

  // Spring values for smoother movement
  //const springX = useSpring(mouseX, springConfig);
  //const springY = useSpring(mouseY, springConfig);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Update mouse position values
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background transition-colors duration-200 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Blurry circle that follows the mouse */}
      {
        //<motion.div
        //  className="pointer-events-none fixed inset-0 z-0 mix-blend-difference"
        //  style={{
        //    position: 'fixed',
        //    left: springX,
        //    top: springY,
        //    translateX: '-0%',
        //    translateY: '-0%',
        //  }}
        //>
        //  <div className="relative">
        //    {/* Main glow */}
        //    <div className="absolute h-[150px] w-[150px] rounded-full bg-white/30 blur-[60px]" />
        //    {/* Core */}
        //    <div className="absolute h-[50px] w-[50px] rounded-full bg-white/50 blur-[30px]" />
        //  </div>
        //</motion.div>
      }
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <ThemeToggle />
          <Social />
        </div>
      </header>

      {/* Main Content */}
      <main className='mx-auto md:w-[70%] w-full px-6 pt-10'>
        <ProfilePicture />
        <Intro />
        <div className="mt-4" />
        <Articles />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          <Experience />
          <Studies />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-primary">
        <ContactMe />
      </footer>
    </div>
  );
}
