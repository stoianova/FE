// - Створіть просту форму з input color налаштуваннями  фону сторінки, і збережіть вибір користувача у localStorage при кліку на кнопку save. При наступному відкритті сторінки, або оновлені, застосуйте до сторінки колір з localStorage.


let bodyColor = document.querySelector ('body');
let submitBtn = document.querySelector ('#submit')
submitBtn.addEventListener('click', function(){
    let colorInput = document.querySelector ('#color');
    let colorValue = colorInput.value;
    bodyColor.style.backgroundColor = colorValue;
})

saveBtn = document.querySelector ('#save');

saveBtn.addEventListener ('click', function(){
    let colorInput = document.querySelector ('#color');
    let colorValue = colorInput.value;
    window.localStorage.userColor = colorValue;
})

window.onload = function(){
    bodyColor.style.backgroundColor = window.localStorage.userColor;
}

// - Зробити сторінку з кнопкою, при натиску на кнопку робиться запит (fetch) до 
// http swapi.dev/api/planets/1/ та виводиться картка (html розмітка довільна) з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href



let planetBtn = document.querySelector('#planetBtn');
let infoBlock = document.querySelector('#planetInfo');

planetBtn.addEventListener('click', function fetchInfo(){
    fetch('https://swapi.dev/api/planets/1/')
    .then(response => response.json())
    .then(json => {
        let planetName = json.name;
        let planetClimate = json.climate;
        let planetGravity = json.gravity;
        let planetPopulation = json.population;
        let planetRotation = json.rotation_period;

        infoBlock.style.display = 'inherit';

        infoBlock.innerHTML = `
        <p> Name: ${planetName} </p>
        <p> Climate: ${planetClimate} </p>
        <p> Gravity: ${planetGravity} </p>
        <p> Population: ${planetPopulation} </p>
        <p> Planet rotation: ${planetRotation} </p>`
        
    }) 
})

