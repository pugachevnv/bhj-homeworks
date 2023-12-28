const popup = document.getElementById( 'subscribe-modal' );
const closePopup = document.querySelector('.modal__close');


function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
    const cookieName = document.cookie.split('; ');
    return cookieName.find(e => e.startsWith(name));
}

if (!getCookie('closePopup')) {
    popup.classList.add('modal_active');
}

console.log(document.cookie);

closePopup.onclick = () => {
    popup.classList.remove('modal_active');
    setCookie('closePopup', 'true');
}

console.log(document.cookie);