/* Переишіть цей код використовуючи let const~
Замість var
for (var i = 0; i < 5; i++) {
    console.log(i);
} */

for (let i = 0; i < 5; i++) {
    console.log(i);
}; //виводить всі значення від 0 до 4
// А з const виводить тільки 0


// Замість var

let message = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
};
example();

/* Використовуючи for in  виведіть значення з обєктку в console.log */
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for(const value in person){
    console.log(person[value])
};

// Використовуючи for of та for in  виведіть занчення з обєктів які знаходяться в масиві 

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for (const value of students) { for (let key in value) { 
    console.log (value [key] ) }};

/* Завдання на map
Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа. */

let myArr = [2, 4, 6];
let doubleValue = (number)=>number*2;
myNewArr = myArr.map(doubleValue);
console.log(myNewArr); 

/* Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value' */

let x = [10, 20, 30];
function oldMap () {
    let newMap = x.map ((value) => 'new value ' + value )
    console.log(newMap);
};
oldMap();

/* Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30] */


const numberArr = [10, 20, 30];
let total = 0;

numberArr.forEach ( (number) => total = total+number);

console.log (total);