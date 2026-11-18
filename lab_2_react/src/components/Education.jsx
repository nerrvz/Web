function Education() {
  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-8 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-3xl font-serif text-slate-800 dark:text-slate-100 mb-6 border-b-2 border-slate-100 dark:border-slate-700 pb-2">
            Освіта
        </h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Національний університет "Львівська політехніка"</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide text-sm mb-2">2025 — дотепер</p>
                <p>Ступінь: Бакалавр (2 курс)</p>
            </div>
        </div>
    </section>
  );
}

export default Education;