const currencyList = document.getElementById('items');
const loaderImg = document.getElementById('loader');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loaderImg.classList.remove('loader_active');
        const loadedData = JSON.parse(xhr.responseText).response.Valute;
        
        const outputData = [];
        for (const key in loadedData) {
            outputData.push({name: loadedData[key].CharCode, value: loadedData[key].Value});
        }
        outputData.forEach((item) => {
            const currencyItem = document.createElement('div');
            currencyItem.className = 'item';
            currencyItem.innerHTML = `
                <div class="item__code">${item.name}</div>
                <div class="item__value">${item.value}</div>
                <div class="item__currency">руб.</div>
            `;
            currencyList.appendChild(currencyItem);
            console.log(item.name, item.value);
        });
    }
});

xhr.send();

