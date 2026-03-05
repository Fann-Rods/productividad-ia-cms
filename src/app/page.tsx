'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ---- DATA ----
const categorias = [
  {
    slug: 'herramientas-ia',
    nombre: 'Herramientas de IA',
    desc: 'Multiplica tu productividad con las mejores herramientas de IA del mercado.',
    icono: '⚡',
    color: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/30',
    tag: '#00d4ff',
  },
  {
    slug: 'automatizacion',
    nombre: 'Automatización',
    desc: 'Diseña flujos de trabajo autónomos que trabajen para ti 24/7.',
    icono: '🤖',
    color: 'from-purple-500/20 to-pink-600/10',
    border: 'border-purple-500/30',
    tag: '#bd00ff',
  },
  {
    slug: 'marketing-ia',
    nombre: 'Marketing con IA',
    desc: 'Estrategias disruptivas para dominar el mercado digital.',
    icono: '🚀',
    color: 'from-orange-500/20 to-red-600/10',
    border: 'border-orange-500/30',
    tag: '#ff4d00',
  },
  {
    slug: 'negocios-rentables',
    nombre: 'Negocios Rentables',
    desc: 'Crea activos digitales escalables y monetizables con IA.',
    icono: '💰',
    color: 'from-green-500/20 to-emerald-600/10',
    border: 'border-green-500/30',
    tag: '#00ff85',
  },
];

const posts = [
  {
    title: 'Cómo crear un blog autónomo con Next.js y Payload',
    slug: 'blog-autonomo-nextjs-payload',
    excerpt: 'Guía paso a paso para automatizar la creación y publicación de contenido.',
    date: '4 Mar 2024',
    category: 'Automatización',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Top 10 herramientas de IA para productividad en 2024',
    slug: 'top-10-herramientas-ia-2024',
    excerpt: 'Las herramientas que están cambiando las reglas del juego este año.',
    date: '3 Mar 2024',
    category: 'Herramientas de IA',
    image: 'https://images.unsplash.com/photo-1676299081847-824916ff030a?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 font-sans">
      {/* --- Header --- */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent uppercase">
            Productividad <span className="text-cyan-400">IA</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#categorias" className="hover:text-cyan-400 transition-colors">Categorías</Link>
            <Link href="#blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <Link href="#newsletter" className="hover:text-cyan-400 transition-colors">Suscripción</Link>
            <Link href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
          </nav>

          <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-all active:scale-95">
            Empezar Ahora
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden py-24 md:py-40 border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Nueva Era de Productividad
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                CONSTRUYE EL FUTURO <br /> CON INTELIGENCIA <span className="text-cyan-500">ARTIFICIAL</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-2xl">
                Aprende a crear sitios web rentables, automatizar procesos complejos y dominar las herramientas que están redefiniendo el trabajo digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#blog" className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all text-center">
                  Explorar Artículos
                </Link>
                <Link href="#categorias" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 font-bold rounded-xl transition-all text-center">
                  Ver Categorías
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- Categorías --- */}
        <section id="categorias" className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">Nuestros Pilares</h2>
                <h3 className="text-4xl md:text-5xl font-black">Especialización Estratégica</h3>
              </div>
              <p className="text-white/40 max-w-md">Cuatro áreas fundamentales diseñadas para transformar tu visión en un activo digital rentable.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categorias.map((cat) => (
                <Link key={cat.slug} href={`/categoria/${cat.slug}`} className="group relative">
                  <div className={`h-full p-8 rounded-3xl border ${cat.border} bg-gradient-to-br ${cat.color} backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/10`}>
                    <div className="text-4xl mb-6">{cat.icono}</div>
                    <h4 className="text-xl font-bold mb-3">{cat.nombre}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{cat.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                      Explorar <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- Featured Blog --- */}
        <section id="blog" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4">Últimas Investigaciones</h2>
              <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {posts.map((post) => (
                <article key={post.slug} className="group cursor-pointer">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-6 border border-white/10">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase text-cyan-400 mb-3">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-white/40">{post.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold border-b border-white/10 pb-1 hover:border-cyan-400 transition-colors">
                    Leer artículo completo
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- Newsletter --- */}
        <section id="newsletter" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-[3rem] p-8 md:p-20 border border-cyan-500/20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-[100px] -mr-32 -mt-32" />
              
              <h2 className="text-3xl md:text-5xl font-black mb-6">Únete a la Vanguardia</h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                Recibe semanalmente estrategias exclusivas de IA y automatización directamente en tu bandeja de entrada. Sin spam, solo valor puro.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-400 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 transition-all">
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* --- Contacto --- */}
        <section id="contacto" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8">Hablemos del <span className="text-cyan-500">Futuro</span></h2>
              <p className="text-white/50 text-lg mb-12">
                ¿Tienes un proyecto en mente o quieres implementar IA en tu negocio? Nuestro equipo de expertos está listo para ayudarte.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">📍</div>
                  <span className="text-white/80 font-medium">Digital Nomads & Global Remote Team</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">✉️</div>
                  <span className="text-white/80 font-medium">hello@productividadia.com</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-6 bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/40 ml-1">Nombre</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/40 ml-1">Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40 ml-1">Mensaje</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-cyan-500 text-black font-black rounded-xl hover:bg-cyan-400 transition-all uppercase tracking-widest">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter uppercase">
            Productividad <span className="text-cyan-400">IA</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>

          <p className="text-sm text-white/20">
            © 2024 Productividad IA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
