const cases = [...document.querySelectorAll('.rotator__case')];
const activeCaseClass = 'rotator__case_active';

let currentIndex = cases.findIndex(item => item.classList.contains(activeCaseClass));

const getNextIndex = () => currentIndex === cases.length - 1 ? 0 : currentIndex + 1;

const toggleNextCase = () => {
    const currentCase = cases[currentIndex];
    
    const nextIndex = getNextIndex();
    const nextCase = cases[nextIndex];
    
    currentCase.classList.remove(activeCaseClass);
    nextCase.classList.add(activeCaseClass);
    nextCase.style.color = nextCase.dataset.color;
    
    currentIndex = nextIndex;
    
    scheduleCase(nextIndex);
}
  
const scheduleCase = index => {
    const item = cases[index];

    const speed = +item.dataset.speed;
    setTimeout(toggleNextCase, speed);
}
  
scheduleCase(getNextIndex());

// class RotatorAds {
//     constructor(container) {
//         this.container = container;
//         this.rotatorElement = Array.from(container.querySelectorAll('.rotator__case'));
        
//         this.rotate();
        
//     }

//     rotate() {
//         let index = 0;

//         setInterval(() => {
//             this.rotatorElement.forEach(element => {element.classList.remove('rotator__case_active')});
//             this.rotatorElement[index].style.color = this.rotatorElement[index].dataset.color;
//             this.rotatorElement[index].classList.add('rotator__case_active');
//             // setTimeout(() => {

//             // }, this.rotatorElement[index].dataset.speed);
//             index === this.rotatorElement.length - 1 ? index = 0 : index++;
//         }, 1000);
//     }

//     schedule

// } 

// new RotatorAds(document.querySelector('.rotator'))