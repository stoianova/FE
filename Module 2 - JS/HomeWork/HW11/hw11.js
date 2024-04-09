window.onload = function(){

// Завдання 1: Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

// Інструкції:
// 1)Створіть два поля введення: одне для суми, друге для курсу обміну.
// Додайте кнопку, яка виконає конвертацію при її натисканні.
// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
// Виведіть результат конвертації на сторінку.


    let myForm = document.querySelector('form');
    let uah = document.querySelector('#uah');
    let usd = document.querySelector('#usd');
    let change = document.querySelector('#change');
    let pUAH = document.querySelector('#inuah');
    let pUSD = document.querySelector('#inusd');

    myForm.addEventListener('submit', function(event){  
    event.preventDefault();
    let uahValue = event.target['uah'].value;
    let usdValue = event.target['usd'].value;
    if(uahValue!=0 && usdValue.length ==0 && uahValue>0 ){
        pUAH.innerHTML= 'Ви отримаєте '+uahValue/40 +'USD';
        pUAH.style.display = 'inherit';
        pUSD.style.display = 'none';
    }
    else if (usdValue!=0 && uahValue.length ==0 && usdValue>0){
        pUSD.innerHTML= 'Ви отримаєте '+usdValue*40 +'UAH';
        pUSD.style.display = 'inherit';
        pUAH.style.display = 'none';
    }

    else{
        alert('Введіть тільки UAH або USD');
    }
    });









// 2) Створіть слайдер ( зображення що міняє картинку ) кожні 3 секунди,  коли курсор наведено на зображення слайдер зупиняється, коли покидає зображення розпочинає роботу


    let images = ['./imgSlider/Penguins.jpg','./imgSlider/pingviny_antarktidy.jpg','./imgSlider/Pygoscelis_papua.jpg','./imgSlider/wpapers_ru.jpg'];

    let sliderImg = document.querySelector('img');

    let curentIndex = 0;

    function newPic(){
        curentIndex += 1;
        if(curentIndex >= images.length){
            curentIndex = 0;
        }
                        
        document.querySelector('img').src = images[curentIndex];
    }

    let slideInterval = setInterval(newPic, 2000); 

    sliderImg.addEventListener('mouseleave', function(){
        slideInterval = setInterval(newPic, 2000);

    });

    sliderImg.addEventListener('mouseenter', function(){
        clearInterval(slideInterval);

    });
    





}