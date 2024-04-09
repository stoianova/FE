// - дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням. Повині бути команди (додавання, множення, ділення, віднімання) 

let firstNumber = Number(prompt("Це калькулятор! Введіть перше число"));
let secondNumber = Number(prompt("Введіть друге число"));
let math = Number(prompt("Введите знак -, +, * или / "));

function summ(firstNumber, secondNumber){
    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
}
function minus(firstNumber, secondNumber){
    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
}
function multiplication(firstNumber, secondNumber){
    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
}
function divide(firstNumber, secondNumber){
    console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
    if (firstNumber || secondNumber == 0) {
        alert("На 0 ділити не можна")
    }
}

//- реалізуйте функцію яка отримує число і виводить в консоль лог таблицю множення цього чила. перевірте роботу функцію викликавши функцію з різними значеннями.

let multiplicationNumber = Number(prompt("Выберите число для таблицы умножения"));

for (let i = 1; i < 10; i++){
    console.log(`${multiplicationNumber}*${i} = ${multiplicationNumber*i}`);
}


// - створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі 
let planet = prompt('Напишіть свою улюблені планету')
 switch (planet) {
    case 'Меркурій':
    case 'Венера':
    case 'Земля':
    case 'Юпітер':
    case 'Сатурн':
    case 'Уран':
    case 'Нептун':
        console.log(`${planet} Ви вгадали`);
        break;
    default:
        console.log(`${planet} В цьому списку її немає`);
        break;
} 



// - за допомогою циклу вивести в консоль всі парні значення числа 20
for(i=2; i<=2; i+=2){
    console.log(`${i}Ділиться на 2`)
}


// - зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...) //

for(let i=10; i<10; i--){
    console.log(`Loop value ${i}`);
}

// - реалізуйте таблицю множення за допомогою циклу для конкретного числа (наприклад, для числа 5) за допомогою циклу for:

let myNewNumber = 5;
for(let i=0; i<10; i++){
    console.log(`${myNewNumber}*${i} = ${myNewNumber*i}`);
}
