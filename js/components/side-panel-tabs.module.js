const sidePanelContainer = document.querySelector('.side-panel__tabs');
const sidePanelTabs = document.querySelectorAll('.side-panel__tabs a');
const selectedIndicator = document.querySelector('.selected__indicator');
const selectedTab = document.querySelector('.selected--tab');
const selectedTabLeftPosition = selectedTab.offsetLeft;
const selectedTabWidth = selectedTab.offsetWidth;

function loadIndicator() {
    if (typeof (sidePanelContainer) != 'undefined' && sidePanelContainer != null) {
        selectedIndicator.style.left = selectedTabLeftPosition + 'px';
        selectedIndicator.style.width = selectedTabWidth + 'px';
    }
}
window.addEventListener('load', loadIndicator);

window.addEventListener('resize', () => {
    if (typeof (sidePanelContainer) != 'undefined' && sidePanelContainer != null) {
        selectedIndicator.style.width = selectedTabWidth + 'px';
        selectedIndicator.style.transition = 'none';
    }
});

sidePanelTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const tabViewTarget = tab.getAttribute('data-tab');
        document.querySelector('[data-content].content--shown').classList.remove('content--shown');
        document.querySelector('[data-content="' + tabViewTarget + '"]').classList.add('content--shown');

        const tabLeftPosition = tab.offsetLeft;
        const tabWidth = tab.offsetWidth;
        selectedIndicator.style.left = tabLeftPosition + 'px';
        selectedIndicator.style.width = tabWidth + 'px';
        selectedIndicator.style.transition = 'left 0.3s ease-in-out';

        tab.closest('.side-panel__tabs').querySelector('.selected--tab').classList.remove('selected--tab');
        tab.classList.add('selected--tab');
    });
});