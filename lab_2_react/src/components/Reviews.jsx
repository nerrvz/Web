import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/11/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-8 border-emerald-400 transition-colors duration-300">
      <h2 className="text-3xl font-serif text-slate-800 dark:text-slate-100 mb-6 border-b-2 border-slate-100 dark:border-slate-700 pb-2">
        Відгуки попередніх роботодавців
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comments.map(c => (
          <article
            key={c.id}
            className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-slate-100 dark:border-slate-600 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-500 transition-all"
          >
            <h3 className="font-bold text-slate-900 dark:text-white capitalize mb-1">{c.name}</h3>
            <p className="text-emerald-600 dark:text-emerald-400 text-sm italic mb-2">{c.email}</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;