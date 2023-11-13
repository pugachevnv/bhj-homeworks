const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {tab.classList.remove('tab_active')});
        tab.classList.add('tab_active');
        tabsContent.forEach((tabContent) => {tabContent.classList.remove('tab__content_active')});
        tabsContent[tabs.indexOf(tab)].classList.add('tab__content_active');
    });
})

