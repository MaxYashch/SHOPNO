const modal = document.querySelector('.js-works__modal');
const previews = document.querySelectorAll('.works__images-row-item img');
const original = document.querySelector('.js-works__modal-full-img');
const caption = document.querySelector('.js-works__modal-caption');

previews.forEach(element => {
    element.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        // DYnamic change text and image
        const originalSrc = element.getAttribute('data-original');
        original.src = `img/${originalSrc}`;
        const altText = element.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if (!e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})

document.addEventListener('keyup', (el) => {
    if (el.keyCode == 27) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})