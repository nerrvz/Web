function Experience() {
  const itemCls =
    "bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-slate-100 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-500 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm";

  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-8 border-slate-700 dark:border-slate-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-3xl font-serif text-slate-800 dark:text-slate-100 mb-6 border-b-2 border-slate-100 dark:border-slate-700 pb-2">
            Академічний досвід та проєкти
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
            <li className={itemCls}>
                Створення структури вебсторінок за допомогою <strong className="text-emerald-600 dark:text-emerald-400">HTML</strong> та семантичних тегів.
            </li>
            <li className={itemCls}>
                Написання базових консольних програм.
            </li>
            <li className={`${itemCls} md:col-span-2`}>
                Ознайомлення з системами контролю версій <strong className="text-emerald-600 dark:text-emerald-400">(Git)</strong> та розгортання проєктів.
            </li>
        </ul>
    </section>
  );
}

export default Experience;