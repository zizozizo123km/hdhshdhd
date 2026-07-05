/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Sun, Heart, Flower, MousePointer2 } from 'lucide-react';
import { HeartRain } from './components/HeartRain';
import { BackgroundMusic } from './components/BackgroundMusic';

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl ${className}`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative preserve-3d"
      >
        {children}
      </div>
    </motion.div>
  );
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif text-stone-900 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-stone-500 font-sans tracking-widest uppercase text-sm"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-12 h-px bg-brand-gold mx-auto mt-6 opacity-50" />
  </div>
);

export default function App() {
  const images = {
    hero: "/src/assets/images/noor_hero_1783283084307.jpg",
    radiance: "/src/assets/images/noor_radiance_1783283095281.jpg",
    floral: "/src/assets/images/noor_floral_detail_1783283107644.jpg",
  };

  return (
    <div className="min-h-screen bg-brand-cream overflow-hidden selection:bg-brand-gold/20 selection:text-brand-gold">
      <HeartRain />
      <BackgroundMusic />
      {/* Interactive Hero */}
      <section className="relative h-screen flex items-center justify-center perspective-1000">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={images.hero} 
            alt="Noor Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-cream" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <TiltCard className="p-8 md:p-16 glass-card">
            <FadeIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="mb-6 flex justify-center"
              >
                <Sun className="w-10 h-10 text-brand-gold animate-pulse" />
              </motion.div>
              <span className="text-stone-800 font-sans tracking-[0.4em] uppercase text-xs md:text-sm mb-6 block font-medium">
                Radiant Essence
              </span>
              <h1 className="text-8xl md:text-[12rem] font-serif text-stone-900 leading-none mb-4 -tracking-wider">
                Noor
              </h1>
              <div className="arabic-text text-4xl md:text-6xl text-brand-gold/90 font-light mt-8">
                🌸 نور 🌸
              </div>
            </FadeIn>
          </TiltCard>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-stone-400 text-[10px] font-sans tracking-[0.3em] uppercase flex flex-col items-center gap-4"
          >
            <span>Scroll To Begin</span>
            <div className="w-px h-16 bg-gradient-to-b from-brand-gold/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 3D Dedication Card Section */}
      <section className="py-32 px-6 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft-pink/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto">
          <TiltCard className="glass-card p-12 md:p-24 shadow-2xl">
            <FadeIn>
              <div className="arabic-text text-2xl md:text-4xl text-stone-800 text-center leading-[2] md:leading-[2.4] space-y-12">
                <p className="hover:text-brand-gold transition-colors duration-500">
                  نور... اسمك وحده يحمل معنى الجمال والإشراق، وكأنك شعاع يبدد العتمة أينما حضر.
                </p>
                <div className="h-px w-24 bg-brand-gold/30 mx-auto" />
                <p className="font-medium text-stone-900">
                  فيكِ رقيّ في الكلام، وهدوء يبعث الراحة، وابتسامة تجعل الأيام أجمل.
                </p>
                <p className="text-stone-500 text-xl md:text-2xl pt-4 font-light">
                  جمالك لا يقتصر على الملامح، بل يظهر أيضًا في أخلاقك ولطفك واحترامك للآخرين.
                </p>
                <div className="pt-12">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-brand-gold/5 p-8 rounded-2xl border border-brand-gold/10"
                  >
                    أتمنى أن تبقي دائمًا كما أنتِ، مصدرًا للنور والبهجة لكل من يعرفك. دمتِ متألقة، يا نور، فالاسم يليق بكِ حقًا.
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </TiltCard>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-32 bg-stone-900 text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Divine Attributes" subtitle="The light within" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: "Radiance", desc: "A presence that illuminates every room, bringing clarity and warmth.", color: "text-amber-300" },
              { icon: Flower, title: "Grace", desc: "An innate elegance that flows through your words and actions.", color: "text-brand-gold" },
              { icon: Sparkles, title: "Spirit", desc: "A soul that reflects the purity of a first light, kind-hearted.", color: "text-blue-200" }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <TiltCard className="p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors h-full">
                  <item.icon className={`w-12 h-12 ${item.color} mb-8`} />
                  <h3 className="text-3xl font-serif mb-6">{item.title}</h3>
                  <p className="text-stone-400 font-sans leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Canvas */}
      <section className="py-32 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Aesthetic Harmony" subtitle="Reflections of Excellence" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-8 h-[500px] md:h-[700px]">
              <TiltCard className="w-full h-full overflow-hidden shadow-2xl">
                <img 
                  src={images.radiance} 
                  alt="Radiance" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </TiltCard>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6 md:gap-10">
              <TiltCard className="overflow-hidden shadow-xl">
                <img 
                  src={images.floral} 
                  alt="Floral" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </TiltCard>
              <motion.div 
                whileHover={{ rotateY: 15 }}
                className="bg-stone-900 p-12 flex flex-col justify-center rounded-3xl shadow-xl preserve-3d"
              >
                <Heart className="w-10 h-10 text-brand-gold mb-8" />
                <p className="font-serif text-2xl text-white italic leading-relaxed">
                  "Light is not what you see, it's what you are."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Signature */}
      <footer className="pt-48 pb-12 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-brand-gold/30" />
              <Sun className="w-6 h-6 text-brand-gold" />
              <div className="h-px w-12 bg-brand-gold/30" />
            </div>
            
            <h2 className="text-6xl font-serif text-stone-900 mb-8 tracking-tighter">Noor</h2>
            
            <div className="arabic-text text-2xl text-stone-500 mb-24 font-light">
              دمتِ متألقة، يا نور
            </div>

            {/* Signature Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative py-12 border-t border-stone-100"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 text-[10px] tracking-[0.4em] text-stone-300 uppercase">
                Dedication By
              </div>
              <div className="arabic-text text-4xl md:text-5xl font-serif text-brand-gold/80 italic py-4 hover:scale-110 transition-transform cursor-default">
                من طرف ناصر
              </div>
              <div className="mt-12 flex justify-center gap-8 opacity-20">
                <Sparkles className="w-4 h-4" />
                <Heart className="w-4 h-4" />
                <Sun className="w-4 h-4" />
              </div>
            </motion.div>

            <div className="mt-12 text-[10px] text-stone-300 tracking-[0.3em] uppercase">
              &copy; 2026 Radiant Memoirs &bull; UI/UX Excellence
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
