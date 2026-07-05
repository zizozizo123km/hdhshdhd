/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, Heart, Flower } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
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
    <div className="min-h-screen bg-brand-cream overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.hero} 
            alt="Noor Hero" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/0 via-transparent to-brand-cream" />
        </div>

        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <span className="text-brand-gold font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Radiant Essence
            </span>
            <h1 className="text-7xl md:text-9xl font-serif text-white drop-shadow-lg mb-8">
              Noor
            </h1>
            <div className="arabic-text text-3xl md:text-5xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              🌸 إلى نور 🌸
            </div>
          </FadeIn>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans tracking-widest"
          >
            SCROLL TO EXPLORE
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-12 bg-white/30 mx-auto mt-4"
            />
          </motion.div>
        </div>
      </section>

      {/* Dedication Section */}
      <section className="py-24 px-6 md:py-32">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="arabic-text text-2xl md:text-4xl text-stone-700 text-center leading-[1.8] md:leading-[2] space-y-8">
              <p>
                نور... اسمك وحده يحمل معنى الجمال والإشراق، وكأنك شعاع يبدد العتمة أينما حضر.
              </p>
              <p className="text-brand-gold/80 italic">
                فيكِ رقيّ في الكلام، وهدوء يبعث الراحة، وابتسامة تجعل الأيام أجمل.
              </p>
              <p>
                جمالك لا يقتصر على الملامح، بل يظهر أيضًا في أخلاقك ولطفك واحترامك للآخرين.
              </p>
              <p className="text-stone-500 text-xl md:text-2xl pt-8">
                أتمنى أن تبقي دائمًا كما أنتِ، مصدرًا للنور والبهجة لكل من يعرفك. دمتِ متألقة، يا نور، فالاسم يليق بكِ حقًا.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Qualities Grid */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="The Essence of Noor" subtitle="Attributes of Light" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <div className="group text-center">
                <div className="w-16 h-16 bg-brand-soft-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Sun className="w-8 h-8 text-rose-300" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Radiance</h3>
                <p className="text-stone-500 font-sans leading-relaxed">
                  A presence that illuminates every room, bringing clarity and warmth to everyone you touch.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group text-center">
                <div className="w-16 h-16 bg-brand-cream border border-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Flower className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Grace</h3>
                <p className="text-stone-500 font-sans leading-relaxed">
                  An innate elegance that flows through your words and actions, a quiet strength that inspires.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 text-stone-400" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Spirit</h3>
                <p className="text-stone-500 font-sans leading-relaxed">
                  A soul that reflects the purity of a first light, kind-hearted and eternally bright.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visual Journey */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Visual Symphony" subtitle="Reflections of Beauty" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px] md:h-[800px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img 
                src={images.radiance} 
                alt="Radiance" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay" />
            </motion.div>
            
            <div className="grid grid-rows-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img 
                  src={images.floral} 
                  alt="Floral Detail" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-soft-pink flex flex-col items-center justify-center p-12 text-center rounded-2xl"
              >
                <Heart className="w-12 h-12 text-rose-300 mb-6" />
                <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-snug italic">
                  "Beauty is not in the face; beauty is a light in the heart."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-brand-gold/10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Noor</h2>
            <div className="w-8 h-px bg-brand-gold mx-auto mb-8" />
            <p className="text-stone-500 font-sans tracking-widest text-xs mb-12 uppercase">
              A Tribute to Endless Brilliance
            </p>
            <div className="arabic-text text-xl text-stone-400 mb-12">
              دمتِ متألقة، يا نور
            </div>
            <div className="text-[10px] text-stone-300 tracking-[0.2em] uppercase">
              &copy; 2026 Crafted with Love
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
