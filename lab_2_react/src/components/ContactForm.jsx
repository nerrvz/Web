import { useEffect, useState } from 'react';

const inputCls =
  "w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('modalClosed')) return;
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('modalClosed', '1');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer"
            >
              Закрити
            </button>

            <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-slate-100 mb-6">
              Зворотний зв'язок
            </h2>

            <form
              action="https://formspree.io/f/myeedwlv"
              method="POST"
              className="space-y-4 text-slate-700 dark:text-slate-300"
            >
              <label className="block">Ім'я
                <input type="text" name="name" required className={inputCls} />
              </label>
              <label className="block">Email
                <input type="email" name="email" required className={inputCls} />
              </label>
              <label className="block">Телефон
                <input type="tel" name="phone" required className={inputCls} />
              </label>
              <label className="block">Повідомлення
                <textarea name="message" rows="4" required className={inputCls} />
              </label>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-500 transition-all cursor-pointer"
              >
                Надіслати
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;