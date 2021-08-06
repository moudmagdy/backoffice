const filtersOpen = document.querySelector('.filters-open');
const filtersClose = document.querySelector('.filters-close');

filtersOpen.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.closest('header').classList.add('filters-shown');
});
filtersClose.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.closest('header').classList.remove('filters-shown');
});