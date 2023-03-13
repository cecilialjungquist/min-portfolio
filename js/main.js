let themeToggle = document.getElementById('theme-toggle');

function checkTheme() {
    let theme = localStorage.getItem('theme');
    
    if (!theme) {
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
        let body = document.querySelector('body');
        body.classList.add('light-mode');
        themeToggle.src = '../mypics/dark-mode.svg';
        localStorage.setItem('theme', 'light');
    }
}

checkTheme();

function updateTheme() {
    let body = document.querySelector('body');
    let theme = localStorage.getItem('theme');
    
    if (theme === 'dark') {
        body.classList.add('light-mode');
        themeToggle.src = '../mypics/dark-mode.svg';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        themeToggle.src = '../mypics/light-mode.svg';
        localStorage.setItem('theme', 'dark');
    }
}


themeToggle.addEventListener('click', () => updateTheme());
