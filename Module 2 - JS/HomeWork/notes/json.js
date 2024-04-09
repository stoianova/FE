let product = {
    productName:'Laptop',
    productPrice:'1000$'
}

// basket это создание нового ключа -> стрингифай сохраняет в локал сторадж объект. -> parse переводит их стринга в объект

window.localStorage.basket = JSON.stringify(product);
let valueStorage = JSON.parse(window.localStorage.basket);

// создали переменную valueStorage для вывода инфы в консоль

console.log(valueStorage);
console.log(valueStorage.productName);
console.log(valueStorage.productPrice);

//////////////////////////////////////////////

// 3 варианта создать ключи и значения в локал сторадж

window.localStorage.setItem('localKey', 'True value');
window.localStorage.myLocal = 'qwerty123';
window.localStorage['newLocal'] = 'New local storage value';

console.log(`Get item ${window.localStorage.getItem('newLocal')}`)
console.log(`Get item by key ${window.localStorage.myLocal}`)
console.log(`Get item by dynamic key ${window.localStorage['localKey']}`)