const progress = document.getElementById( 'progress' );
const fileDesc = document.querySelector(".input__wrapper-desc");
const sendFile = document.getElementById( 'form' );

form.addEventListener( 'submit', (event) => {
    event.preventDefault()
    
    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    };

    xhr.upload.onload = function() {
        alert( 'Файл успешно загружен!' );
        fileDesc.textContent = "Имя файла...";
        progress.value = 0;
    }

    xhr.upload.onerror = function() {
        alert( 'Произошла ошибка при загрузке данных на сервер!' );
    }

    xhr.open('POST', form.action);

    const file = new FormData(form);

    xhr.send(file);
});
