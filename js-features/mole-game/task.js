// напишем функцию которая возвращает нужный элемент по индексу, сохраним ее в контсанту getHole
const getHole = index => document.getElementById(`hole${index}`),
// создаем счетчики количества попаданий и промахов
    statusDead = document.getElementById('dead'),
    statusLost = document.getElementById('lost'),
// создаем функцию обнуляющую счетчики игры
    startGame = () => {
        statusDead.textContent = 0;
        statusLost.textContent = 0;
    }

// циклом создаем в каждой ячейке обработчих событий
for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )) {
            statusDead.textContent++;
        } else {
            statusLost.textContent++;
        }
        if (Number(statusDead.textContent) === 10) {
            alert("Вы выиграли!");
            startGame();
        }
        if (Number(statusLost.textContent) === 5) {
            alert("Вы выиграли!");
            startGame();
        }
    }   
}