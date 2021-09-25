const addClientBtn = document.querySelector('.add-client--btn');
const editClientBtn = document.querySelector('.edit-client--btn');
const addGroupBtn = document.querySelector('.add-group--btn');
const dismissBtn = document.querySelector('.side-panel__dismiss--btn');

if (addClientBtn) {
    addClientBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.add('side-panel--shown');
    });
}

if (editClientBtn) {
    editClientBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.add('side-panel--shown');
    });
}

if (addGroupBtn) {
    addGroupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.add('side-panel--shown');
    });
}

dismissBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.remove('side-panel--shown');
});