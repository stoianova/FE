// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

function hiUser(name){
    console.log(`Hello ${name}`); 
}
function wellcomUser(name, callback){
    name.forEach(names => {
        return callback(names)
    });
}

let arrName = ['Sasha', 'Vlad', 'Maks']
wellcomUser(arrName, hiUser)


// перепишіть попередню функцію в стрілкову
let hiUser = (name) => console.log (`Hello ${name}`);

// Перепишіть стрілкову функцію в звичайну const multiplyValues = (a, b, c) => a * b * c;

const multiplyValues = function (a, b, c){
    return a*b*c;
}
console.log(multiplyValues(4,5,8));

// push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let firstArray = [];
firstArray.push('new item 1', 'new item 2', 'new item 3', 'new item 4');
console.log (firstArray);


// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let transport = ['car', 'bus'];
function park (parking){
    transport.push(parking);
}
park('train');
park('bike');
park('scooter');

console.log(transport);


// pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let itemsArray = [1, 2, 3, 4, 5, 6];
itemsArray.pop();
console.log(itemsArray);


// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let ourNumber = [1, 2, 3, 4, 5, 6];
function userNumber (number){
    number.pop();
}
userNumber(ourNumber);
console.log(ourNumber);

// unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

let fruits = ['apple', 'banana', 'orange'];
fruits.unshift('strawberry');
console.log(fruits);

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let secondfruits = ['apple', 'banana', 'orange'];
function basket (range){
    secondfruits.unshift(range);
}
basket('cherry');
basket('melon');

console.log(secondfruits);

// shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let cafe = ['tea', 'coffee', 'juice'];
cafe.shift();
console.log(cafe);


// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let myNumber = [1, 2, 3, 4, 5, 6];
function userNumber (number){
    number.shift();
}
userNumber(myNumber);
console.log(myNumber);
