window.onload = function(){

    // 1. onclick
    // Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір
    
    function randomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    let textColor = document.querySelector ('p');
    let modelBtn = document.querySelector ('.model');
    modelBtn.onclick = function(){
        textColor.style.color = randomColor();
    };


    // 2. ondblclick
    // Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

    let newBtn = document.querySelector ('.big');  
    
    newBtn.ondblclick = function(){
        let widhtMY = newBtn.offsetWidth;
        let heightMY = newBtn.offsetHeight;
        widhtMY=widhtMY*2;
        heightMY=heightMY*2

        newBtn.style.width = `${widhtMY}px`;
        newBtn.style.height = `${heightMY}px`;

    };

   

    // 3. addEventListener і removeEventListener
    
    // Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.
    

    let counterBtn = document.querySelector('.counter');
    let specialDiv = document.querySelector('.specialDiv');
    let count = 0;
    
    counterBtn.addEventListener ('click', function(){
        count+=1;
        specialDiv.innerHTML = `Counter <strong>${count}</strong>`;
        if (count === 10) {
            counterBtn.disabled = true;
        }
    });


    // 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

    let page = document.querySelector('.page');
    let divs = document.querySelector('.page div');
    let button = document.querySelector('.hi');

    button.addEventListener('click', function(){
        page.firstElementChild.remove();
    });

}