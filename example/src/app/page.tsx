export default function TodoList() {
  return (
    <main className="bg-slate-200 min-h-screen flex items-center justify-center">
      <section className="bg-white rounded-2xl shadow-md p-6 w-100">
        {/* Encabezado */}
        <header className="flex justify-between text-sm text-slate-500 mb-4">
          <span>Tue Feb 18 2025</span>
          <span>9:31:25 p.m.</span>
        </header>

        <h2 className="text-lg font-semibold text-indigo-900 mb-4">List Tailwind</h2>

        {/* Días */}
        <ul className="flex justify-between text-xs text-slate-700 mb-4">
          <li className="text-center">s<br />24</li>
          <li className="text-center">m<br />25</li>
          <li className="text-center">t<br />26</li>
          <li className="text-center">w<br />27</li>
          <li className="text-center">t<br />28</li>
          <li className="text-center">f<br />29</li>
          <li className="text-center">s<br />30</li>
        </ul>

        {/* Lista de tareas */}
        <ul className="space-y-3 text-sm">
          {/* Tarea completada */}
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">✔</span>
              <s className="text-slate-600">take out the trash</s>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-700 ">
              9:00 AM
            </time>
          </li>

          {/* Tarea completada */}
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">✔</span>
              <s className="text-slate-600">do homework</s>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-700 ">
              12:00 PM
            </time>
          </li>

          {/* Tarea pendiente */}
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-700">go to grocery store</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-700 ">
              1:00 PM
            </time>
          </li>

          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-700">run 5 kilometers</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-700 ">
              4:20 PM
            </time>
          </li>

          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-700">load the dishwasher</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-700 ">
              9:00 PM
            </time>
          </li>

          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-700">Take out the trash</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-700 ">
              9:00 AM
            </time>
          </li>
        </ul>
      </section>
    </main>
  );
}
  