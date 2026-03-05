const categorias: Record<string, { nombre: string; desc: string }> = {
  'herramientas-ia': { nombre: 'Herramientas de IA', desc: 'Las mejores herramientas de inteligencia artificial' },
  'automatizacion': { nombre: 'Automatizacion de Tareas', desc: 'Automatiza procesos repetitivos con IA' },
  'gestion-del-conocimiento': { nombre: 'Gestion del Conocimiento', desc: 'Organiza tu conocimiento con IA' },
  'mentalidad-y-habitos': { nombre: 'Mentalidad y Habitos', desc: 'Habitos de alto rendimiento con IA' },
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const cat = categorias[params.categoria]
  if (!cat) return <div className="p-8">Categoria no encontrada</div>
  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{cat.nombre}</h1>
      <p className="text-gray-600 mb-12">{cat.desc}</p>
      <p className="text-gray-500">Los articulos de esta categoria apareceran aqui pronto.</p>
    </main>
  )
}
