const addClientBtn = document.querySelector('.add-client--btn');
const dismissBtn = document.querySelector('.side-panel__dismiss--btn');

addClientBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('side-panel--shown');
});

dismissBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.remove('side-panel--shown');
});