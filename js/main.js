const pageLoader = document.querySelector('.page-preloader');
function closePageLoader() {
    pageLoader.classList.add('page-loaded');
}
window.addEventListener('load', closePageLoader);

const datepickerElements = document.querySelectorAll('.form-datepicker');
datepickerElements.forEach(element => {
    const datepicker = new Datepicker(element, {
        // ...options
        format: 'yyyy/mm/dd',
        language: 'ar',
        weekStart: '6'
    });
});