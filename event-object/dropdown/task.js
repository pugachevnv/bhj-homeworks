const dropdownList = document.querySelector('.dropdown__list'),
    dropdownValue = document.querySelector('.dropdown__value'),
    dropdownItems = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});


dropdownItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = item.textContent.trim();
        dropdownList.classList.remove('dropdown__list_active');
    });
});