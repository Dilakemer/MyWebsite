const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Tema geçişini yerel depolama (localStorage) ile hatırlayın
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggleButton.textContent = savedTheme === 'dark-theme' ? '☀️ Açık Tema' : '🌙 Koyu Tema';
}

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    themeToggleButton.textContent = isDarkTheme ? '☀️ Açık Tema' : '🌙 Koyu Tema';
    localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : '');
});
