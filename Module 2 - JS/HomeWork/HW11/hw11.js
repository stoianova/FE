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
    if(uahValue!=0 && usdValue.length ==0){
        pUAH.innerHTML= 'Ви отримаєте '+uahValue/40 +'USD';
    }
    else if (usdValue!=0 && uahValue.length ==0){
        pUSD.innerHTML= 'Ви отримаєте '+usdValue*40 +'UAH';
    }
    else{
        alert('Введіть тільки UAH або USD');
    }
    });









// 2) Створіть слайдер ( зображення що міняє картинку ) кожні 3 секунди,  коли курсор наведено на зображення слайдер зупиняється, коли покидає зображення розпочинає роботу



}