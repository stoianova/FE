// Порівняння чисел: За допомогою prompt отримайте два числа від користувача. Використовуючи if, else if, і else, виведіть у консоль, яке з них більше, менше, або вони рівні. Пам'ятайте про різницю між == і ===.

let userNumber = Number(prompt('Обери число більше 10'))
if(userNumber > 10){
    console.log(`User chose ${userNumber} Great job`)
}
else{
    console.log(`User chose ${userNumber} and its NOT correct`, prompt('Спробуй ще раз'))
}
let userSecondNumber = Number(prompt('Обери друге будь-яке число'));
console.log(`User chose ${userSecondNumber}`); 
console.log(`Compare ${userNumber}<${userSecondNumber}`); //як вивести рішення тру чи фолс в консолі? щось не виходить 


//Визначення року народження: Запитайте в користувача його вік за допомогою prompt. Використовуючи отримане значення та поточний рік (ви можете захардкодити поточний рік), виведіть у консоль рік народження користувача.

let currentYear = 2024
let userYear = Number(prompt(`Введи свій рік народження`))
console.log(`Рік народження користувача ${userYear}`)
let userAge = currentYear-userYear;
console.log(userAge);


//Вгадай число: Запитайте у користувача число. Якщо введене число більше заданого вами (наприклад, 10), виведіть "Занадто велике". Якщо менше - "Занадто мале". Якщо користувач вгадав число, виведіть "Вітаємо, ви вгадали!".

let myNumber = 22 || 23 || 24;
let userGuessNumber = Number(prompt('Обери число від 20 до 25'));
console.log(`User chose ${userGuessNumber}`)
if(`${userGuessNumber === 22 || 23 || 24}` (alert('Вітаю, ви вгадали')));
else{`${userGuessNumber === 20 || 21 || 25}` (alert('Нажаль, ви не вгадали'))}; 


// Класифікація за оцінками: Запитайте у користувача його оцінку за 10-бальною шкалою за допомогою prompt. За допомогою if-else виведіть в консоль "Відмінно" (8-10), "Добре" (5-7), "Задовільно" (3-4), "Незадовільно" (менше 3).

let userGrade = Number(prompt('Enter your grade'))
if(userGrade === 8 || 9 || 10){
    console.log(`User entered ${userGrade} 'Відмінно'`)
}
else if(userGrade === 7 || 6 || 5){
    console.log(`User entered ${userGrade}'Добре'`)
}
else if(userGrade === 4 || 3){
    console.log(`User entered ${userGrade}'Задовільно'`)
}
else{userGrade<3}{
    console.log(`User entered ${userGrade}'Незадовільно'`)
} 


// Перевірка діапазону: Запитайте у користувача число. Якщо число знаходиться в діапазоні від 1 до 100 включно, виведіть "Число знаходиться в діапазоні". Якщо ні - "Число поза діапазоном".
let askNumber = Number(prompt('Введи твоє улюблене число'))
console.log(`User chose ${askNumber > 0 && <= 100}`, 'Число знаходиться в діапазоні')
console.log(`User chose ${askNumber < 0 && >100}`, 'Число поза діапазоном')


// Перепишіть використовуючи тернарний оператор
// ---- Я зробила двома варіантами, не знаю який з них на більш вірному шляху
let firtsResult = '';
let score = 75;
if (score > 50) {
    result ="Пройшов";
    } else {
        result ="Не пройшов";
    }
firtsResult = result>score ? result : console.log("Не пройшов");


let temperResult = "";
let temperature = 30;
if (temperature > 25) {
    temperResult ="Гаряче";
} 
else {
    temperResult ="Прохолодно";
}
temperResult = temperature>25 ? temperResult : temperResult; 