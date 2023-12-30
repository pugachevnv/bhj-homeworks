const signIn = document.getElementById( 'signin' );
const signOut = document.getElementById( 'signout' );

const form = document.getElementById( 'signin__form' );

const userGeating = document.getElementById( 'welcome' );
const userId = document.getElementById( 'user_id' );

const saveId = localStorage.getItem('user_id');

if (saveId) {
    signIn.classList.remove('signin_active');
    userGeating.classList.add('welcome_active');
    signOut.classList.add('signout_active')
    userId.textContent = saveId;
} else {  
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        const formData = new FormData(form);
        console.log(form);
        
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        
        xhr.addEventListener('load', () => {
            console.log(xhr.response);
            if (xhr.response.success) {
                
                signIn.classList.remove('signin_active');
                userGeating.classList.add('welcome_active');
                signOut.classList.add('signout_active')
                userId.textContent = xhr.response.user_id;
                const loadUserId = userId.textContent;
                localStorage.setItem('user_id', loadUserId)
            } else {
                alert('Неверный логин/пароль');
                location.reload();
            }
        });
        
        xhr.open('POST', form.action);
        
        xhr.send(formData);
    });
}

signOut.addEventListener('click', () => {
    localStorage.removeItem('user_id');
    signIn.classList.add('signin_active');
    userGeating.classList.remove('welcome_active');
    signOut.classList.remove('signout_active')
});

