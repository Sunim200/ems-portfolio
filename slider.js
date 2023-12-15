const sliderBtn = document.getElementById("slideThree");
const afterLight = document.querySelector(".afterLight");
const section = document.getElementById("section");

var lightState = window.getComputedStyle(sliderBtn, ':after');

console.log(lightState);

sliderBtn.addEventListener('click', () => {
    
    
    
    if (afterLight.style.display === 'none') {
        afterLight.style.display = 'block';
    }   else {
        afterLight.style.display = 'none';
    }

    console.log('geht');
    console.log(afterLight);
})
