function App() {
  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center">
      <div className="bg-black text-white w-[1100px] rounded-3xl p-8 grid grid-cols-3 gap-6">

        {/* Sidebar */}
        <div className="bg-zinc-900 rounded-2xl p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-orange-500 rounded-xl mb-4"></div>
          <h2 className="text-xl font-bold">Agustín Gómez</h2>
          <p className="text-sm text-gray-400 text-center mt-2">
            Fullstack Developer (Laravel + React)
          </p>
        </div>

        {/* Contenido */}
        <div className="col-span-2">
          <h1 className="text-5xl font-extrabold">
            FULLSTACK <br />
            <span className="text-gray-500">DEVELOPER</span>
          </h1>

          <div className="flex gap-6 mt-6">
            <div>
              <h3 className="text-2xl font-bold">+3</h3>
              <p className="text-gray-400 text-sm">Años aprendiendo</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">+10</h3>
              <p className="text-gray-400 text-sm">Proyectos</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">+2</h3>
              <p className="text-gray-400 text-sm">Clientes</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;