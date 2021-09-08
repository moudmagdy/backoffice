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
        weekStart: '6',
        orientation: 'left'
    });
});

const fileInputs = document.querySelectorAll('.form-file');
function getFileName() {
    let fullPath = this.value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        this.nextElementSibling.querySelector('.form-file__label').textContent = filename;
    } else {
        let bodyElement = document.querySelector('body');
        let direction;

        if (window.getComputedStyle) {
            // all browsers
            direction = window.getComputedStyle(bodyElement, null).getPropertyValue('direction');
        } else {
            // IE5-8
            direction = bodyElement.currentStyle.direction;
        }

        if (direction == 'rtl') {
            this.nextElementSibling.querySelector('.form-file__label').textContent = 'اختر صورة للمنتج';
        } else {
            this.nextElementSibling.querySelector('.form-file__label').textContent = 'Choose an image for the product';
        }
    }
}
if (fileInputs) {
    fileInputs.forEach(fileInput => fileInput.addEventListener('change', getFileName));
}


// check the page direction
let bodyElement = document.querySelector('body');
let direction;
let noMatchesText;
if (window.getComputedStyle) {
    // all browsers
    direction = window.getComputedStyle(bodyElement, null).getPropertyValue('direction');
} else {
    // IE5-8
    direction = bodyElement.currentStyle.direction;
}
if (direction == 'rtl') {
    noMatchesText = 'لا يوجد نتائج مطابقة...';
} else {
    noMatchesText = 'No matching results...';
}

let tokenAutocomplete = new TokenAutocomplete({
    name: 'tags-inputs',
    selector: '.tags-inputs',
    minCharactersForSuggestion: 2,
    noMatchesText: noMatchesText,
    initialTokens: ['css', 'script', 'com'],
    initialSuggestions: ['html', 'css', 'javascript', 'python', 'ruby', 'php']
});

// document.querySelector('.token-autocomplete-input').addEventListener('keydown', function (event) {
//     if (event.which == 13 || event.keyCode == 13) {
//         if (this.textContent == '') {

//             event.preventDefault();
//         }
//     }
// });