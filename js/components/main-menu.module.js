const mainMenuToggles = document.querySelectorAll('.main-menu__toggle');
const subMenuToggles = document.querySelectorAll('.has__submenu > a');
const subMenuOpened = document.querySelector('.submenu--opened');

function loadOpenSubMenu() {
    if (subMenuOpened) {
        subMenuOpened.querySelector('ul').style.maxHeight = subMenuOpened.querySelector('ul').scrollHeight + 'px';
    }
}


mainMenuToggles.forEach(mainMenuToggle => {
    mainMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.toggle('main-menu--opened');
    });
});

function openSubMenu(e) {
    e.preventDefault();

    this.closest('.has__submenu').classList.toggle('submenu--opened');

    if (this.closest('.has__submenu').classList.contains('submenu--opened')) {
        this.classList.add('active');
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
    } else {
        if (!this.nextElementSibling.querySelector('.active').classList.contains('active')) {
            this.classList.remove('active');
        }
        this.nextElementSibling.style.maxHeight = 0;
    }
}

subMenuToggles.forEach(subMenuToggle => subMenuToggle.addEventListener('click', openSubMenu));



window.addEventListener('load', loadOpenSubMenu);