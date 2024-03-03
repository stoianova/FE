/* 1 Створення класу та об'єкта:
Створіть клас Person з властивостями name та age.
Створіть об'єкт з цього класу з ім'ям "John" та віком 30. */

// ЗАКОМЕНТУВАЛА, ТОМУ ЩО НЕ ДАЄ ПРАЦЮВАТИ ПОДАЛЬШОМУ КОДУ




/* class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
let info = new Person ('John', '30');
console.log(info); */




/* 2 Методи класу:
Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи в console.log */

class Person {
    constructor (name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Hello ${this._name}`);
    }
}
let info = new Person ('John', '30');
info.sayHello();

/* 3 Наслідування:
Створіть клас Student, який наслідує від класу Person.
Додайте властивість studentId до класу Student.
Додайте метод study, який виводить повідомлення про студента */

class Student extends Person {
    constructor (name, age, studentId) {
        super (name, age);
        this._studentId = studentId;
    }
    study(){
        console.log(`info about ${this._name}, she is ${this._age} years old, her ID is ${this._studentId}`);
    }
}
let newStudent = new Student ('Viki', 16, 2549);
newStudent.study();

/* 4 Задачі для практики forEach, reverse  Виведіть значення з масиву в зворотньому порядку
const numbers = [1, 2, 3, 4, 5]; */

const numbers = [1, 2, 3, 4, 5];
const reversed = numbers.reverse();

reversed.forEach ( (num) => {
    console.log(num);
});

/* 5  Задачі для практики map та Math.round
 Маєте масив чисел з плаваючою комою. Використовуйте map разом з Math.round, щоб створити новий масив, в якому кожне число буде округлене до найближчого цілого. */

let arr = [1.2, 2.6, 2.2, 4.8];

let roundArr = (num) => Math.round (num);
let newArr = arr.map (roundArr);
console.log (newArr);


