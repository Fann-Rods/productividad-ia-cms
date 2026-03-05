import Link from 'next/link'

// ---- DATA ----
const categorias = [
  {
    slug: 'herramientas-ia',
    nombre: 'Herramientas de IA',
    desc: 'Descubre y domina las mejores herramientas de IA para multiplicar tu productividad.',
    icono: '⚡',
    count: 24,
    color: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/30',
    tag: '#00d4ff',
  },
  {
    slug: 'automatizacion',
    nombre: 'Automatizacion de Tareas',
    desc: 'Construye flujos de trabajo inteligentes que trabajan por ti 24/7.',
    icono: '⚙',
    count: 18,
    color: 'from-purple-500/20 to-violet-600/10',
    border: 'border-purple-500/30',
    tag: '#7c3aed',
  },
  {
    slug: 'gestion-del-conocimiento',
    nombre: 'Gestion del Conocimiento',
    desc: 'Organiza, conecta y potencia tu base de conocimiento con sistemas IA.',
    icono: '🧠',
    count: 15,
    color: 'from-emerald-500/20 to-green-600/10',
    border: 'border-emerald-500/30',
    tag: '#10b981',
  },
  {
    slug: 'mentalidad-y-habitos',
    nombre: 'Mentalidad y Habitos',
    desc: 'Desarrolla la mentalidad y rutinas de alto rendimiento potenciadas por IA.',
    icono: '🎯',
    count: 12,
    color: 'from-orange-500/20 to-amber-600/10',
    border: 'border-orange-500/30',
    tag: '#f59e0b',
  },
]

const articulos = [
  {
    slug: 'chatgpt-flujo-trabajo',
    titulo: 'ChatGPT en tu flujo de trabajo: la guia definitiva 2025',
    extracto: 'Aprende a integrar ChatGPT en cada etapa de tu dia para multiplicar tu output sin sacrificar calidad.',
    categoria: 'Herramientas de IA',
    catSlug: 'herramientas-ia',
    fecha: '28 Feb 2025',
    lectura: '8 min',
    destacado: true,
  },
  {
    slug: 'n8n-automatizaciones',
    titulo: 'n8n: automatiza cualquier proceso sin codigo en 2025',
    extracto: 'Guia practica para construir automatizaciones complejas con n8n y conectarlas con modelos de IA.',
    categoria: 'Automatizacion',
    catSlug: 'automatizacion',
    fecha: '22 Feb 2025',
    lectura: '12 min',
    destacado: true,
  },
  {
    slug: 'second-brain-notion-ia',
    titulo: 'Second Brain con Notion + IA: el sistema completo',
    extracto: 'Como construir un sistema de gestion del conocimiento que aprende y evoluciona contigo.',
    categoria: 'Gestion del Conocimiento',
    catSlug: 'gestion-del-conocimiento',
    fecha: '15 Feb 2025',
    lectura: '10 min',
    destacado: false,
  },
  {
    slug: 'deep-work-era-ia',
    titulo: 'Deep Work en la era de la IA: nuevas reglas',
    extracto: 'Las reglas del trabajo profundo han cambiado. Descubre como adaptarlas al mundo de la inteligencia artificial.',
    categoria: 'Mentalidad y Habitos',
    catSlug: 'mentalidad-y-habitos',
    fecha: '10 Feb 2025',
    lectura: '7 min',
    destacado: false,
  },
  {
    slug: 'prompt-engineering-avanzado',
    titulo: 'Prompt Engineering avanzado: tecnicas que cambian todo',
    extracto: 'Mas alla del prompting basico. Tecnicas probadas para obtener resultados extraordinarios de cualquier LLM.',
    categoria: 'Herramientas de IA',
    catSlug: 'herramientas-ia',
    fecha: '5 Feb 2025',
    lectura: '15 min',
    destacado: false,
  },
  {
    slug: 'ia-para-contenido',
    titulo: 'IA para creacion de contenido: el workflow ganador',
    extracto: 'El sistema exacto para investigar, redactar y publicar contenido de calidad 10x mas rapido con IA.',
    categoria: 'Automatizacion',
    catSlug: 'automatizacion',
    fecha: '1 Feb 2025',
    lectura: '9 min',
    destacado: false,
  },
]

const stats = [
  { valor: '10K+', label: 'Suscriptores activos' },
  { valor: '150+', label: 'Articulos publicados' },
  { valor: '4.9', label: 'Valoracion media' },
  { valor: '98%', label: 'Tasa de satisfaccion' },
]

// ---- COMPONENTE PRINCIPAL ----
export default function Home() {
  return (
    <div style={{background:'#050811', minHeight:'100vh', color:'#f0f4ff', fontFamily:"'Inter', sans-serif"}}>

      {/* ===== HEADER / NAV ===== */}
      <header style={{position:'sticky', top:0, zIndex:50, borderBottom:'1px solid rgba(0,212,255,0.1)', backdropFilter:'blur(20px)', background:'rgba(5,8,17,0.85)'}}>
        <nav style={{maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between', height:64}}>
          <Link href="/" style={{textDecoration:'none', display:'flex', alignItems:'center', gap:8}}>
            <div style={{width:32, height:32, borderRadius:8, background:'linear-gradient(135deg,#00d4ff,#7c3aed)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16}}>AI</div>
            <span style={{fontWeight:700, fontSize:18, color:'#f0f4ff', letterSpacing:'-0.5px'}}>Productividad<span style={{color:'#00d4ff'}}>.IA</span></span>
          </Link>
          <div style={{display:'flex', gap:8, alignItems:'center'}}>
            {['Herramientas','Automatizacion','Conocimiento','Habitos'].map((item, i) => (
              <Link key={i} href={`/categoria/${categorias[i].slug}`} style={{textDecoration:'none', padding:'6px 14px', borderRadius:20, fontSize:13, color:'#8892b0', transition:'all 0.2s'}}>{item}</Link>
            ))}
            <Link href="#suscripcion" style={{textDecoration:'none', padding:'8px 20px', borderRadius:20, background:'linear-gradient(135deg,#00d4ff,#0080ff)', color:'#050811', fontWeight:600, fontSize:13}}>Newsletter</Link>
          </div>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section style={{position:'relative', overflow:'hidden', padding:'100px 24px 80px', textAlign:'center', background:'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.12) 0%, transparent 70%)'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none'}} />
        <div style={{maxWidth:800, margin:'0 auto', position:'relative'}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:20, border:'1px solid rgba(0,212,255,0.3)', background:'rgba(0,212,255,0.06)', marginBottom:28}}>
            <span style={{width:6, height:6, borderRadius:'50%', background:'#00d4ff', boxShadow:'0 0 8px #00d4ff', display:'inline-block'}} />
            <span style={{fontSize:13, color:'#00d4ff', fontWeight:500}}>Blog activo · Nuevos articulos cada semana</span>
          </div>
          <h1 style={{fontSize:'clamp(2.5rem, 6vw, 4.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-2px', marginBottom:24}}>
            Domina la IA.<br />
            <span style={{background:'linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #10b981 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>Multiplica tu productividad.</span>
          </h1>
          <p style={{fontSize:20, color:'#8892b0', lineHeight:1.7, marginBottom:40, maxWidth:600, margin:'0 auto 40px'}}>
            Estrategias, herramientas y sistemas probados para profesionales que quieren trabajar de forma mas inteligente con inteligencia artificial.
          </p>
          <div style={{display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="#articulos" style={{textDecoration:'none', padding:'14px 32px', borderRadius:12, background:'linear-gradient(135deg,#00d4ff,#0080ff)', color:'#050811', fontWeight:700, fontSize:15, boxShadow:'0 0 30px rgba(0,212,255,0.3)'}}>
              Explorar articulos
            </Link>
            <Link href="#categorias" style={{textDecoration:'none', padding:'14px 32px', borderRadius:12, border:'1px solid rgba(0,212,255,0.3)', color:'#00d4ff', fontWeight:600, fontSize:15, background:'rgba(0,212,255,0.05)'}}>
              Ver categorias
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{borderTop:'1px solid rgba(0,212,255,0.08)', borderBottom:'1px solid rgba(0,212,255,0.08)', background:'rgba(13,21,38,0.5)'}}>
        <div style={{maxWidth:1200, margin:'0 auto', padding:'32px 24px', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0}}>
          {stats.map((s, i) => (
            <div key={i} style={{textAlign:'center', padding:'12px', borderRight: i < 3 ? '1px solid rgba(0,212,255,0.08)' : 'none'}}>
              <div style={{fontSize:32, fontWeight:800, background:'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>{s.valor}</div>
              <div style={{fontSize:13, color:'#8892b0', marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* ===== CATEGORIAS ===== */}
      <section id="categorias" style={{maxWidth:1200, margin:'0 auto', padding:'80px 24px'}}>
        <div style={{textAlign:'center', marginBottom:56}}>
          <span style={{fontSize:12, fontWeight:600, color:'#00d4ff', letterSpacing:3, textTransform:'uppercase'}}>Areas de conocimiento</span>
          <h2 style={{fontSize:'clamp(1.8rem, 4vw, 2.8rem)', fontWeight:800, marginTop:12, letterSpacing:'-1px'}}>Explora por <span style={{color:'#00d4ff'}}>categoria</span></h2>
          <p style={{color:'#8892b0', marginTop:12, fontSize:16}}>Todo lo que necesitas saber organizado en 4 pilares fundamentales</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:20}}>
          {categorias.map((cat) => (
            <Link key={cat.slug} href={`/categoria/${cat.slug}`} style={{textDecoration:'none'}}>
              <div style={{background:'#0d1526', border:`1px solid ${cat.tag}33`, borderRadius:16, padding:28, position:'relative', overflow:'hidden', transition:'all 0.3s', cursor:'pointer'}}>
                <div style={{position:'absolute', top:-40, right:-40, width:120, height:120, borderRadius:'50%', background:`radial-gradient(circle, ${cat.tag}15, transparent)`, pointerEvents:'none'}} />
                <div style={{fontSize:32, marginBottom:16}}>{cat.icono}</div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
                  <h3 style={{fontSize:16, fontWeight:700, color:'#f0f4ff'}}>{cat.nombre}</h3>
                  <span style={{fontSize:11, padding:'3px 8px', borderRadius:10, background:`${cat.tag}20`, color:cat.tag, fontWeight:600}}>{cat.count} arts.</span>
                </div>
                <p style={{fontSize:14, color:'#8892b0', lineHeight:1.6}}>{cat.desc}</p>
                <div style={{marginTop:20, display:'flex', alignItems:'center', gap:6, color:cat.tag, fontSize:13, fontWeight:500}}>
                  <span>Ver articulos</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== ARTICULOS RECIENTES ===== */}
      <section id="articulos" style={{background:'rgba(13,21,38,0.4)', borderTop:'1px solid rgba(0,212,255,0.06)', borderBottom:'1px solid rgba(0,212,255,0.06)'}}>
        <div style={{maxWidth:1200, margin:'0 auto', padding:'80px 24px'}}>
          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:48, flexWrap:'wrap', gap:16}}>
            <div>
              <span style={{fontSize:12, fontWeight:600, color:'#00d4ff', letterSpacing:3, textTransform:'uppercase'}}>Contenido reciente</span>
              <h2 style={{fontSize:'clamp(1.8rem, 4vw, 2.8rem)', fontWeight:800, marginTop:12, letterSpacing:'-1px'}}>Ultimos <span style={{color:'#00d4ff'}}>articulos</span></h2>
            </div>
            <Link href="/blog" style={{textDecoration:'none', padding:'10px 24px', borderRadius:10, border:'1px solid rgba(0,212,255,0.3)', color:'#00d4ff', fontSize:14, fontWeight:500}}>Ver todos →</Link>
          </div>

          {/* Articulo destacado grande */}
          {articulos.filter(a => a.destacado).slice(0,1).map(art => (
            <Link key={art.slug} href={`/blog/${art.slug}`} style={{textDecoration:'none', display:'block', marginBottom:32}}>
              <div style={{background:'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.06))', border:'1px solid rgba(0,212,255,0.2)', borderRadius:20, padding:'40px 48px', position:'relative', overflow:'hidden'}}>
                <div style={{position:'absolute', top:0, right:0, width:300, height:300, background:'radial-gradient(circle at 70% 30%, rgba(0,212,255,0.08), transparent)', pointerEvents:'none'}} />
                <div style={{display:'inline-flex', alignItems:'center', gap:6, padding:'4px 12px', borderRadius:20, background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.2)', marginBottom:20}}>
                  <span style={{width:5, height:5, borderRadius:'50%', background:'#00d4ff', display:'inline-block'}} />
                  <span style={{fontSize:12, color:'#00d4ff', fontWeight:600}}>DESTACADO</span>
                </div>
                <h3 style={{fontSize:'clamp(1.4rem, 3vw, 2rem)', fontWeight:800, color:'#f0f4ff', lineHeight:1.3, marginBottom:16, letterSpacing:'-0.5px'}}>{art.titulo}</h3>
                <p style={{color:'#8892b0', fontSize:16, lineHeight:1.6, marginBottom:24, maxWidth:600}}>{art.extracto}</p>
                <div style={{display:'flex', gap:20, alignItems:'center'}}>
                  <span style={{fontSize:13, color:'#8892b0'}}>{art.fecha}</span>
                  <span style={{width:4, height:4, borderRadius:'50%', background:'#4a5568', display:'inline-block'}} />
                  <span style={{fontSize:13, color:'#8892b0'}}>{art.lectura} de lectura</span>
                  <span style={{width:4, height:4, borderRadius:'50%', background:'#4a5568', display:'inline-block'}} />
                  <span style={{fontSize:13, color:'#00d4ff', fontWeight:500}}>{art.categoria}</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Grid de articulos */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20}}>
            {articulos.filter(a => !a.destacado).map(art => (
              <Link key={art.slug} href={`/blog/${art.slug}`} style={{textDecoration:'none'}}>
                <div style={{background:'#0d1526', border:'1px solid rgba(255,255,255,0.06)', borderRadius:16, padding:28, height:'100%', display:'flex', flexDirection:'column', gap:12}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <span style={{fontSize:11, padding:'3px 10px', borderRadius:10, background:'rgba(0,212,255,0.1)', color:'#00d4ff', fontWeight:600}}>{art.categoria}</span>
                    <span style={{fontSize:12, color:'#4a5568'}}>{art.lectura}</span>
                  </div>
                  <h3 style={{fontSize:16, fontWeight:700, color:'#f0f4ff', lineHeight:1.4}}>{art.titulo}</h3>
                  <p style={{fontSize:14, color:'#8892b0', lineHeight:1.6, flexGrow:1}}>{art.extracto}</p>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:12, borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                    <span style={{fontSize:12, color:'#4a5568'}}>{art.fecha}</span>
                    <span style={{fontSize:13, color:'#00d4ff', fontWeight:500}}>Leer →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== NEWSLETTER / SUSCRIPCION ===== */}
      <section id="suscripcion" style={{padding:'80px 24px', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents:'none'}} />
        <div style={{maxWidth:680, margin:'0 auto', textAlign:'center', position:'relative'}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:20, border:'1px solid rgba(124,58,237,0.4)', background:'rgba(124,58,237,0.08)', marginBottom:28}}>
            <span style={{fontSize:12, color:'#a78bfa', fontWeight:600, letterSpacing:2, textTransform:'uppercase'}}>Newsletter gratuito</span>
          </div>
          <h2 style={{fontSize:'clamp(1.8rem, 4vw, 2.8rem)', fontWeight:800, letterSpacing:'-1px', marginBottom:16}}>
            Mantente al frente<br />
            <span style={{background:'linear-gradient(135deg, #7c3aed, #a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>de la curva de IA</span>
          </h2>
          <p style={{color:'#8892b0', fontSize:16, lineHeight:1.7, marginBottom:40}}>
            Cada semana: las mejores herramientas, estrategias y casos practicos de productividad con IA. Sin spam. Solo valor real.
          </p>
          <form style={{display:'flex', gap:12, maxWidth:480, margin:'0 auto', flexWrap:'wrap'}} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              style={{flex:1, minWidth:220, padding:'14px 20px', borderRadius:12, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(124,58,237,0.4)', color:'#f0f4ff', fontSize:15, outline:'none'}}
            />
            <button
              type="submit"
              style={{padding:'14px 28px', borderRadius:12, background:'linear-gradient(135deg,#7c3aed,#a78bfa)', color:'white', fontWeight:700, fontSize:15, border:'none', cursor:'pointer', boxShadow:'0 0 30px rgba(124,58,237,0.4)', whiteSpace:'nowrap'}}
            >
              Suscribirme gratis
            </button>
          </form>
          <p style={{fontSize:12, color:'#4a5568', marginTop:16}}>+ 10,000 profesionales ya suscritos · Cancela cuando quieras</p>
        </div>
      </section>

      {/* ===== CONTACTO ===== */}
      <section id="contacto" style={{background:'rgba(13,21,38,0.5)', borderTop:'1px solid rgba(0,212,255,0.06)'}}>
        <div style={{maxWidth:1200, margin:'0 auto', padding:'80px 24px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60}}>
          <div>
            <span style={{fontSize:12, fontWeight:600, color:'#00d4ff', letterSpacing:3, textTransform:'uppercase'}}>Contacto</span>
            <h2 style={{fontSize:'clamp(1.5rem, 3vw, 2.2rem)', fontWeight:800, marginTop:12, marginBottom:20, letterSpacing:'-0.5px'}}>Hablemos sobre<br /><span style={{color:'#00d4ff'}}>productividad e IA</span></h2>
            <p style={{color:'#8892b0', fontSize:15, lineHeight:1.7, marginBottom:32}}>Tienes un proyecto, quieres colaborar o simplemente tienes preguntas sobre IA y productividad? Estamos aqui para ayudarte.</p>
            <div style={{display:'flex', flexDirection:'column', gap:16}}>
              {[
                {icono:'📧', label:'Email', valor:'hola@productividad-ia.com'},
                {icono:'📣', label:'Newsletter', valor:'Suscribete arriba para contenido semanal'},
              ].map((item, i) => (
                <div key={i} style={{display:'flex', alignItems:'center', gap:12}}>
                  <span style={{fontSize:20}}>{item.icono}</span>
                  <div>
                    <div style={{fontSize:12, color:'#4a5568', fontWeight:600, textTransform:'uppercase', letterSpacing:1}}>{item.label}</div>
                    <div style={{fontSize:14, color:'#8892b0'}}>{item.valor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form style={{display:'flex', flexDirection:'column', gap:16}} onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Tu nombre" style={{padding:'14px 18px', borderRadius:10, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'#f0f4ff', fontSize:14, outline:'none'}} />
            <input type="email" placeholder="Tu email" style={{padding:'14px 18px', borderRadius:10, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'#f0f4ff', fontSize:14, outline:'none'}} />
            <textarea rows={4} placeholder="Tu mensaje..." style={{padding:'14px 18px', borderRadius:10, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'#f0f4ff', fontSize:14, outline:'none', resize:'vertical', fontFamily:'inherit'}} />
            <button type="submit" style={{padding:'14px', borderRadius:10, background:'linear-gradient(135deg,#00d4ff,#0080ff)', color:'#050811', fontWeight:700, fontSize:15, border:'none', cursor:'pointer'}}>Enviar mensaje</button>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{borderTop:'1px solid rgba(0,212,255,0.08)', background:'#050811'}}>
        <div style={{maxWidth:1200, margin:'0 auto', padding:'48px 24px 32px'}}>
          <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40, marginBottom:48}}>
            <div>
              <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:16}}>
                <div style={{width:28, height:28, borderRadius:6, background:'linear-gradient(135deg,#00d4ff,#7c3aed)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:800}}>AI</div>
                <span style={{fontWeight:700, fontSize:16, color:'#f0f4ff'}}>Productividad<span style={{color:'#00d4ff'}}>.IA</span></span>
              </div>
              <p style={{fontSize:14, color:'#8892b0', lineHeight:1.7, maxWidth:260}}>El blog de referencia para profesionales que quieren dominar la IA y multiplicar su productividad.</p>
            </div>
            {[{titulo:'Categorias', links:[{text:'Herramientas de IA',href:'/categoria/herramientas-ia'},{text:'Automatizacion',href:'/categoria/automatizacion'},{text:'Gestion del Conocimiento',href:'/categoria/gestion-del-conocimiento'},{text:'Mentalidad y Habitos',href:'/categoria/mentalidad-y-habitos'}]},{titulo:'Blog',links:[{text:'Todos los articulos',href:'/blog'},{text:'Destacados',href:'/blog'},{text:'Mas recientes',href:'/blog'}]},{titulo:'Sitio',links:[{text:'Inicio',href:'/'},{text:'Newsletter',href:'#suscripcion'},{text:'Contacto',href:'#contacto'}]}].map((col, i) => (
              <div key={i}>
                <h4 style={{fontSize:12, fontWeight:700, color:'#f0f4ff', letterSpacing:2, textTransform:'uppercase', marginBottom:16}}>{col.titulo}</h4>
                <div style={{display:'flex', flexDirection:'column', gap:10}}>
                  {col.links.map((link, j) => (
                    <Link key={j} href={link.href} style={{textDecoration:'none', fontSize:14, color:'#8892b0'}}>{link.text}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
            <p style={{fontSize:13, color:'#4a5568'}}>© 2025 Productividad con IA · Todos los derechos reservados</p>
            <div style={{display:'flex', gap:8}}>
              {['Privacidad','Cookies','Terminos'].map((item, i) => (
                <Link key={i} href="#" style={{textDecoration:'none', fontSize:12, color:'#4a5568', padding:'4px 8px'}}>{item}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
