const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }    
    if (top > window.innerHeight) {
        return false;
    }
    return true;
}

reveal.forEach((item) => {
    setInterval(() => {
        if (isVisible(item)) {
            item.classList.add('reveal_active')
        } else {
            item.classList.remove('reveal_active')
        }
    }, 500)
});