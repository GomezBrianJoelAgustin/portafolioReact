import profile from "./assets/profile.jpg";

type ProjectType = {
  title: string;
  desc: string;
  github: string;
  demo: string;
  tech: string;
};

const projects: ProjectType[] = [
  {
    title: "Sistema de gestión y ventas.",
    desc: "Aplicación para gestión de productos, ventas y stock con autenticación de usuarios.",
    github: "https://github.com/GomezBrianJoelAgustin/SaleSystem",
    demo: "https://salesystem-816l.onrender.com/",
    tech: "Laravel · MySQL · Blade",
  },
  {
    title: "Registro de asistencias",
    desc: "Sistema para control de asistencias con visualización de datos y métricas.",
    github: "https://github.com/tuusuario/proyecto2",
    demo: "https://proyecto2.vercel.app",
    tech: "React · Laravel · Inertia",
  },
];

function App() {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-red-700 min-h-screen flex items-center justify-center p-6">
      <div className="bg-black text-white w-full max-w-6xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Sidebar */}
        <div className="bg-zinc-900 rounded-2xl p-6 flex flex-col items-center text-center">
          <img
            src={profile}
            alt="Agustin Gomez"
            className="w-36 h-36 object-cover rounded-2xl mb-4 border-2 border-orange-500 shadow-lg"
          />

          <h2 className="text-xl font-bold">Agustin Gomez</h2>

          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="bg-zinc-800 px-2 py-1 rounded text-xs">Laravel</span>
            <span className="bg-zinc-800 px-2 py-1 rounded text-xs">React</span>
            <span className="bg-zinc-800 px-2 py-1 rounded text-xs">MySQL</span>
          </div>

          <p className="text-gray-400 text-sm mt-2">
            Argentina <br />
            Buscando mi primera oportunidad como desarrollador fullstack.
          </p>

          {/* CTA (esto faltaba) */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=agustingomez02000@gmail.com"
            target="_blank"
            className="mt-4 inline-block bg-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Contactame
          </a>

          <a
            href="/CV-Agustin-Gomez.pdf"
            target="_blank"
            className="mt-4 inline-block bg-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Ver CV
          </a>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/GomezBrianJoelAgustin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/agustin-gomez-74310b3a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              LinkedIn
            </a>

            <a href="https://wa.me/541178310316" 
              target="_blank"
              className="text-gray-400 hover:text-white text-sm"
            >
              WhatsApp
            </a>

          </div>
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
              Desarrollador Fullstack especializado en Laravel y React.
              Construyo aplicaciones web completas y escalables.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-6">
              <Stat number="+3" label="Años aprendiendo" />
              <Stat number="+1" label="Proyectos desarrollados" />
              <Stat number="100%" label="Compromiso" />
            </div>
          </div>

          {/* About me */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-orange-500 transition-all duration-300">
            <h2 className="text-xl font-bold mb-2 text-orange-500">
              Sobre mí
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Soy desarrollador fullstack enfocado en Laravel y React. 
              Me especializo en crear aplicaciones web completas, desde backend hasta frontend.
              Actualmente busco mi primera oportunidad en esta area.
            </p>
          </div>

          {/* Proyectos */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PROYECTOS</h2>

            <div className="space-y-4">
              {projects.map((project, i) => (
                <Project key={i} {...project} />
              ))}
            </div>
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

function Project({ title, desc, github, demo, tech }: ProjectType) {
  return (
    <div className="p-4 rounded-xl border border-zinc-800 hover:border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{desc}</p>

      {/* Stack (esto faltaba) */}
      <p className="text-xs text-gray-500 mt-2">{tech}</p>

      <div className="flex gap-4 mt-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 text-sm hover:underline"
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 text-sm hover:underline"
        >
          Demo
        </a>
      </div>
    </div>
  );
}

export default App;