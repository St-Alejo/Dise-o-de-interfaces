export default function TodoList() {
  return (
    <main className="bg-slate-200 min-h-screen flex items-center justify-center">
      <section className="bg-white rounded-2xl shadow-md p-6 w-100">
        
        <header className="flex justify-between text-sm text-slate-500 mb-4">
          <span>Tue Feb 18 2025</span>
          <span>9:31:25 p.m.</span>
        </header>

        <h2 className="text-lg font-semibold text-indigo-900 mb-4">List Tailwind</h2>

        
        <ul className="flex justify-between text-xs text-slate-700 mb-4">
          <li className="text-center">s<br />24</li>
          <li className="text-center">m<br />25</li>
          <li className="text-center">t<br />26</li>
          <li className="text-center">w<br />27</li>
          <li className="text-center">t<br />28</li>
          <li className="text-center">f<br />29</li>
          <li className="text-center">s<br />30</li>
        </ul>

        
        <ul className="space-y-3 text-sm">
          
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">✔</span>
              <s className="text-slate-500 font-semibold text-sm">take out the trash</s>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-500 font-semibold">
              9:00 AM
            </time>
          </li>

          
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">✔</span>
              <s className="text-slate-500 font-semibold text-sm">do homework</s>
            </span>
            <time className="bg-indigo-50 rounded-lg px-2 h-12 flex items-center  text-slate-500 font-semibold">
              12:00 PM
            </time>
          </li>

          
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-500 font-semibold text-sm">go to grocery store</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-500 font-semibold ">
              1:00 PM
            </time>
          </li>

          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-500 font-semibold text-sm">run 5 kilometers</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-500 font-semibold">
              4:20 PM
            </time>
          </li>

          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-500 font-semibold text-sm">load the dishwasher</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-500 font-semibold ">
              9:00 PM
            </time>
          </li>

          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4 bg-indigo-50 rounded-lg px-3 h-12 flex-1 mr-2 ">
              <span className="h-6 w-6 border-2 border-slate-400 rounded-full flex items-center justify-center"></span>
              <span className="text-slate-500 font-semibold text-sm">Take out the trash</span>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 h-12 flex items-center  text-slate-500 font-semibold ">
              9:00 AM
            </time>
          </li>
        </ul>
      </section>
    </main>
  );
}
  
