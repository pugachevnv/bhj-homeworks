const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const url = "https://students.netoservices.ru/nestjs-backend/poll";
const xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const loadedData = JSON.parse(xhr.responseText);
        pollTitle.innerText = loadedData.data.title;
        
        for (const value of loadedData.data.answers) {
            pollAnswers.innerHTML += `
            <button class="poll__answer">${value}</button>
            `;
        }

        const pollAnswerBtn = [...document.querySelectorAll('.poll__answer')];
        pollAnswerBtn.forEach((item) => {
            item.addEventListener('click', () => {
                alert("Спасибо, ваш голос засчитан!");
                location.reload();
            });
        });
        
        
    }   
});

xhr.send();