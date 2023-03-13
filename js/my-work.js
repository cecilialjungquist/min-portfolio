const lightboxLinks = document.querySelectorAll('.lightbox');

lightboxLinks.forEach(link => link.addEventListener('click', () => openLightbox(link)))

function openLightbox(link) {
    let body = document.querySelector('body');
    let src = link.dataset.img;
    src = `../img-projects/${src}`;
    
    let lightboxOverlay = document.createElement('section');
    let lightboxImg = document.createElement('img');

    lightboxOverlay.classList.add('lightbox-overlay');
    lightboxImg.classList.add('lightbox-img');
    lightboxImg.setAttribute('src', src);

    body.appendChild(lightboxOverlay).appendChild(lightboxImg);

    lightboxOverlay.addEventListener('click', () => lightboxOverlay.remove());
}
