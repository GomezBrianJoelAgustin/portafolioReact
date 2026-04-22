function App() {
  return (
    <div className="bg-purple-950 min-h-screen flex items-center justify-center p-6">
      <div className="bg-black text-white w-full max-w-6xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Sidebar */}
        <div className="bg-green-700 rounded-2xl p-6 flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-purple-800 rounded-xl mb-4"></div>

          <h2 className="text-xl font-bold">Agustin Gomez</h2>
          <p className="text-sm text-gray-400 mt-2">
            Fullstack Developer (Laravel + React + Inertia)
          </p>
        </div>

        {/* Contenido */}
        <div className="md:col-span-2 space-y-8">

          {/* Hero */}
          <div>
           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            FULLSTACK <br />
            <span className="text-gray-500">DEVELOPER</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-md">
            Desarrollo aplicaciones web modernas usando Laravel, React y buenas prácticas.
          </p>

            {/* Stats */}
            <div className="flex gap-8 mt-6">
              <Stat number="+3" label="Años aprendiendo" />
              <Stat number="+2" label="Proyectos" />
              <Stat number="0" label="Clientes" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card title="Laravel API / Backend" />
            <Card title="React + Inertia" />
          </div>

          {/* Proyectos */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PROYECTOS</h2>

            <Project
              title="Sistema de Usuarios"
              desc="CRUD completo con autenticación y roles"
            />

            <Project
              title="Panel Admin"
              desc="Dashboard con estadísticas y gestión"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold">{number}</h3>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-br from-green-500 to-green-700 text-black p-5 rounded-2xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
      {title}
    </div>
  );
}

function Project({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-xl border border-zinc-800 hover:border-orange-500 transition">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{desc}</p>

      <div className="flex gap-4 mt-3">
        <button className="text-orange-500 text-sm hover:underline">
          Ver código
        </button>
        <button className="text-orange-500 text-sm hover:underline">
          Ver demo
        </button>
      </div>
    </div>
  );
}

export default App;