class RotatorAds {
    constructor(container) {
        this.container = container;
        this.rotatorElement = Array.from(container.querySelectorAll('.rotator__case'));
        
        this.rotate();
    }

    rotate() {
        let index = 0;

        setInterval(() => {
            this.rotatorElement.forEach(element => {element.classList.remove('rotator__case_active')});
            this.rotatorElement[index].style.color = this.rotatorElement[index].dataset.color;
            this.rotatorElement[index].classList.add('rotator__case_active');
            // setTimeout(() => {

            // }, this.rotatorElement[index].dataset.speed);
            index === this.rotatorElement.length - 1 ? index = 0 : index++;
        }, 1000);
    }


} 

new RotatorAds(document.querySelector('.rotator'))