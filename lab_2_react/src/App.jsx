import { useEffect, useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  // автоматичний вибір теми за часом при завантаженні
  useEffect(() => {
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
  }, []);

  // застосування класу dark до <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 font-sans p-4 sm:p-8 md:p-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex flex-col gap-8">
          <Education />
          <Experience />
          <Reviews />
        </main>
        <Footer />
      </div>
      <ContactForm />
    </div>
  );
}

export default App;