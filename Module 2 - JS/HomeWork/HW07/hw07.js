// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

let myWords = 'Sasha Vika Vlad Max';
let newMyWords = myWords.split (' ');
let upArr = newMyWords.map (element => {
    return element.toUpperCase ();
});
console.log (upArr);

// Перевірка Високосного Року
// Реалізуйте функцію, яка перевіряє, чи є рік, заданий датою, високосним.

/* let nowYear = new Date();
console.log(nowYear);
/* /* 
let strangeYear = new Date (2024, 1, 29);
let proveYear = [];

if(nowYear.includes(strangeYear)) {
    console.log ('yes');
};

 */ 

// Отримання Назви Місяця
// Напишіть функцію, яка приймає об'єкт Date і повертає назву місяця англійською мовою.

let months = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December"
}

function newMonth (date) {
	let monthNumber = date.getMonth () +1;
	for (let key in months) {
		if (key == monthNumber) {
			return months [key];
		}
	}
};

console.log (newMonth (new Date (2024,1) ));

// Додавання Днів до Дати
// Створіть функцію, яка додає певну кількість днів до заданої дати і повертає нову дату.

function addDay (day) {
    let newDate = new Date (2024, 0, 1 + day)
    console.log (newDate)
};
addDay (5);

// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
let ulEl = document.querySelector('li');
console.log(ulEl);

// - останній елемент списку
let lastUlEl = document.querySelector('ul');
console.log(lastUlEl.lastElementChild);

// - 3 елемент списку
let thirdUlEl = document.querySelector('ul :nth-child(3)');
console.log(thirdUlEl);

// За допомогою querySelectorAll
// - всі елементи li в списку

let allEl = document.querySelectorAll('li');
console.log(allEl);

// - конвертуйте вибрані елменти в массив
let [...ulArr] = allEl;
console.log(ulArr);



// Створіть на сторінці елемент який вибирається ціми селекторами
let listItems = document.querySelectorAll('ul.nav > li');
console.log(listItems);

let childItem = document.querySelectorAll('li :nth-child(2)');
console.log(childItem);
