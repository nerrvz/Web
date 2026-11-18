import { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    setInfo({
      userAgent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform'),
    });
  }, []);

  return (
    <footer className="mt-12 py-8 text-center text-slate-500 dark:text-slate-400 font-serif tracking-wide border-t-2 border-slate-200 dark:border-slate-700">
        <p className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 cursor-default">
            © {new Date().getFullYear()} Олена.
        </p>
        <div className="mt-4 text-xs font-sans break-words">
            <p><strong>Платформа:</strong> {info.platform}</p>
            <p><strong>User Agent:</strong> {info.userAgent}</p>
        </div>
    </footer>
  );
}

export default Footer;