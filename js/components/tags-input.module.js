const tagsControl = document.querySelector('.form-tags-control');
const tagsControlInput = document.querySelector('.form-tags-control .form-tags-control__input');

let tags = [];

function createTag(label) {
    const tag = document.createElement('div');
    tag.setAttribute('class', 'form-tags-control__tag');
    const tagLabel = document.createElement('span');
    tagLabel.setAttribute('class', 'form-tags-control__tag__label');
    tagLabel.innerHTML = label;
    const removeBtn = document.createElement('a');
    removeBtn.innerHTML = '<svg viewBox="0 0 8.5 8.5"><path d="M5,4.2l3.5,3.5L7.8,8.5L4.2,5L0.7,8.5L0,7.8l3.5-3.5L0,0.7L0.7,0l3.5,3.5L7.8,0l0.7,0.7L5,4.2z"></path></svg>';
    removeBtn.setAttribute('class', 'form-tags-control__tag__delete');
    removeBtn.setAttribute('data-item', label);
    tag.appendChild(tagLabel);
    tag.appendChild(removeBtn);
    return tag;
}

function clearTags() {
    document.querySelectorAll('.form-tags-control__tag').forEach(tag => {
        tag.parentElement.removeChild(tag);
    });
}

function addTags() {
    clearTags();
    tags.slice().reverse().forEach(tag => {
        tagContainer.prepend(createTag(tag));
    });
}

tagsControlInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value.split(',').forEach(tag => {
            tags.push(tag);
        });

        addTags();
        input.value = '';
    }
});

document.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'A') {
        const tagLabel = e.target.getAttribute('data-item');
        const index = tags.indexOf(tagLabel);
        tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
        addTags();
    }
})

input.focus();