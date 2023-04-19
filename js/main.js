let themeToggle = document.getElementById('theme-toggle');
let hamburgerMenu = document.querySelector('.hamburger');

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

function openMenu() {
    let menu = document.createElement('nav');
    let body = document.querySelector('body');
    let options = ['home', 'my work', 'contact', 'about'];

    menu.classList.add('hamburger-nav');

    options.forEach(option => {
        let menuOpt = document.createElement('p');

        menuOpt.innerHTML = option;
        menu.appendChild(menuOpt);

        menuOpt.addEventListener('click', () => {
            if (option === 'home') {
                location.href = 'index.html';
            } else if (option === 'my work') {
                location.href = 'html/my-work.html';
            } else if (option === 'contact') {
                location.href = 'html/contact.html'
            } else {
                location.href = 'html/about.html';
            }

        });
    });

    body.appendChild(menu);
}

hamburgerMenu.addEventListener('click', () => openMenu());

themeToggle.addEventListener('click', () => updateTheme());
