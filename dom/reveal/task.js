const reveal = document.querySelector('.reveal');

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

setInterval(() => {
    if (isVisible(reveal)) {
        reveal.classList.add('reveal_active')
    } else {
        reveal.classList.remove('reveal_active')
    }

    console.log(isVisible(reveal))
}, 500)