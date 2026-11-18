function Header({ theme, onToggleTheme }) {
  return (
    <header className="bg-slate-800 text-white p-10 rounded-3xl shadow-2xl mb-8 transform transition-transform duration-300 hover:scale-[1.02]">
        <h1 className="text-5xl font-serif font-bold mb-3 tracking-wide text-emerald-400">
            Олена Іванишин
        </h1>
        <p className="text-slate-300 text-xl font-light mb-6 uppercase tracking-widest">
            Студентка 2 курсу | Початківець у сфері ІТ
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="mailto:olena.ivanyshyn.kb.2025@lpnu.ua" className="bg-emerald-600 px-6 py-2 rounded-full hover:bg-emerald-500 hover:shadow-lg transition-all">
                ✉ Написати Email
            </a>
            <a href="https://github.com/nerrvz" target="_blank" rel="noreferrer" className="bg-slate-700 px-6 py-2 rounded-full border border-slate-600 hover:bg-slate-600 hover:text-emerald-300 transition-all">
                Мій GitHub
            </a>
            <button
                type="button"
                onClick={onToggleTheme}
                className="ml-auto bg-slate-700 px-6 py-2 rounded-full border border-slate-600 hover:bg-slate-600 hover:text-emerald-300 transition-all cursor-pointer"
            >
                {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
            </button>
        </div>
    </header>
  );
}

export default Header;
