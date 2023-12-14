const tooltips = [...document.querySelectorAll('.has-tooltip')];
const tooltipContent = document.createElement('div');
tooltipContent.className = 'tooltip';

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (event) => {
        
        event.preventDefault();
        
        tooltipContent.textContent = tooltip.title;
        
        let tooltipRect = tooltip.getBoundingClientRect();
        tooltipContent.style.left = `${tooltipRect.left}px`;
        tooltipContent.style.top = `${tooltipRect.bottom}px`;

        tooltipContent.classList.toggle('tooltip_active');
        
        tooltip.insertAdjacentElement('afterEnd', tooltipContent);

    });
});

