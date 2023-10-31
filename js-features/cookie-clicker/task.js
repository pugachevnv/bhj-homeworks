const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
cookie.onclick = () => {
  clickerCounter.textContent % 2 == 0 ? cookie.width = 230 : cookie.width = 200;
  clickerCounter.textContent++;
};