const sidePanelBtns = document.querySelectorAll('.side-panel--btn');
const dismissBtns = document.querySelectorAll('.side-panel__dismiss--btn');



if (sidePanelBtns) {
    sidePanelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let btnDataAttr = btn.getAttribute('data-panel');
            document.querySelector('body').classList.add('side-panel--shown');
            document.querySelector('.side-panel[data-panel="' + btnDataAttr + '"]').classList.add('move-panel');
        });
    });
}

if (dismissBtns) {
    dismissBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('body').classList.remove('side-panel--shown');
            btn.closest('.side-panel').classList.remove('move-panel');
        });
    });
}