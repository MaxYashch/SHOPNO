ymaps.ready(init);
function init() {
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [ 55.76, 37.64 ],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}

// const modal = document.querySelector('.works__modal');
// const previews = document.querySelector('.works__images-row-item img');
// const original = document.querySelector('.js-works__modal-full-img');
// const imgText = document.querySelector('.js-works__modal-caption');

// previews.forEach(element => {
//     element.addEventListener('click', () => {
//         modal.classList.add('open');
//     });
// });

// modal.addEventListener('click', (e) => {
//     if (e.target.classList.contains('modal')) {
//         modal.classList.remove('open');
//     }
// })