function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: (navigator.languages || []).join(', '),
    vendor: navigator.vendor,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory,            // може бути undefined
    screenSize: `${screen.width}x${screen.height}`,
    windowSize: `${window.innerWidth}x${window.innerHeight}`,
    colorDepth: screen.colorDepth,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
  if (navigator.userAgentData) {
    info.uaPlatform = navigator.userAgentData.platform;
    info.uaBrands = navigator.userAgentData.brands
      .map(b => `${b.brand} ${b.version}`).join(', ');
  }
  for (const [key, value] of Object.entries(info)) {
    if (value !== undefined) localStorage.setItem(key, String(value));
  }
}

function renderStorage() {
  const list = document.getElementById('storage-info');
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    li.textContent = `${key}: ${localStorage.getItem(key)}`;
    list.appendChild(li);
  }
}

async function loadReviews() {
  const container = document.getElementById('reviews-list');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/11/comments');
    const comments = await response.json();
    container.innerHTML = '';
    comments.forEach(c => {            // порядок отримання збережено
      const card = document.createElement('div');
      card.className = 'review';

      const name = document.createElement('h4');
      name.textContent = c.name;
      const email = document.createElement('p');
      email.className = 'email';
      email.textContent = c.email;
      const body = document.createElement('p');
      body.textContent = c.body;

      card.append(name, email, body);
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error:', error);
    container.textContent = 'Не вдалося завантажити відгуки.';
  }
}

const modal = document.getElementById('modal');
setTimeout(() => modal.classList.remove('hidden'), 60000);
document.getElementById('modal-close').addEventListener('click', () => {
  modal.classList.add('hidden');
});

function isDayTime() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21;     // день: 07:00–21:00
}
document.body.classList.toggle('dark', !isDayTime());
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

saveSystemInfo();
renderStorage();
loadReviews();