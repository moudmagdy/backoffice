const mainMenuToggles = document.querySelectorAll('.main-menu__toggle');
const subMenuToggles = document.querySelectorAll('.has__submenu > a');

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
        this.classList.remove('active');
        this.nextElementSibling.style.maxHeight = 0;
    }
}

subMenuToggles.forEach(subMenuToggle => subMenuToggle.addEventListener('click', openSubMenu));

// subMenuToggles.forEach(subMenuToggle => {
//     subMenuToggle.addEventListener('click', (e) => {
//         e.preventDefault();
//         subMenuToggle.closest('.has__submenu').classList.toggle('submenu--opened');

//         if (subMenuToggle.closest('.has__submenu').classList.contains('submenu--opened')) {
//             subMenuToggle.classList.add('active');
//             subMenuToggle.nextElementSibling.style.maxHeight = subMenuToggle.nextElementSibling.scrollHeight + 'px';
//         } else {
//             subMenuToggle.classList.remove('active');
//             subMenuToggle.nextElementSibling.style.maxHeight = 0;
//         }
//     });
// });