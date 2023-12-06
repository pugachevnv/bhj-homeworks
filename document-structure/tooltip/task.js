const tooltips = [...document.querySelectorAll('.has-tooltip')];
const tooltipContent = document.createElement('div');
tooltipContent.className = 'tooltip';

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (event) => {
        event.preventDefault();
        tooltipContent.textContent = tooltip.title;
        tooltipContent.classList.toggle('tooltip_active');
        tooltip.insertAdjacentElement('afterEnd', tooltipContent);
        // tooltip.insertAdjacentHTML("beforeBegin", )
        console.log(tooltipContent);

    });
});

