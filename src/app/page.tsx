import Link from 'next/link'

const categorias = [
  { slug: 'herramientas-ia', nombre: 'Herramientas de IA', desc: 'Las mejores herramientas de inteligencia artificial para tu trabajo' },
  { slug: 'automatizacion', nombre: 'Automatizacion de Tareas', desc: 'Automatiza procesos repetitivos con IA y gana tiempo' },
  { slug: 'gestion-del-conocimiento', nombre: 'Gestion del Conocimiento', desc: 'Organiza y potencia tu base de conocimiento con IA' },
  { slug: 'mentalidad-y-habitos', nombre: 'Mentalidad y Habitos', desc: 'Desarrolla habitos de alto rendimiento potenciados por IA' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Productividad con IA</h1>
          <p className="text-xl opacity-90">Tu guia para trabajar de forma inteligente con inteligencia artificial</p>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categorias.map((cat) => (
            <Link key={cat.slug} href={`/categoria/${cat.slug}`} className="block border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{cat.nombre}</h3>
              <p className="text-gray-600">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
