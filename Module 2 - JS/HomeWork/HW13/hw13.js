window.onload = function(){

    // Знайдіть всі великі літери в тексті і збереження їх в масив
    let textStr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!';

    let textStrBig = /[A-Z]/gm;
    let newStr = textStr.match(textStrBig);
    console.log(newStr);

    // Знаходження слів із певною кількістю символів:
    // Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

    let findFive = /\w\w\w\w\w/gm;
    let newFindFive = textStr.match(findFive);
    console.log(newFindFive);


    // Створити регулярний вираз, який видаляє всі HTML теги з рядка. Наприклад, після обробки рядка <p>Це - простий <b>текст</b>.</p> має залишитися Це - простий текст.

    let htmlReg = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    let newString = '<p>Це - простий <b>текст</b>.</p> '.replace(htmlReg, ''); 
    console.log(newString);

    // Розробити регулярний вираз для перевірки сили пароля. Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру, один спеціальний символ (!@#$%^&*) і мати довжину від 8 до 20 символів.

    let password = /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
    console.log(password.test('Ck10454019*'));

    // Створіть групу радіокнопок для оцінки від 1 до 5.
    // Додайте обробник події onchange для виявлення вибору користувача, а потім виведіть відповідне повідомлення (наприклад, "Дякуємо за вашу оцінку!").

    let score = document.querySelector('form');
    score.addEventListener("change", function(){
        alert("Дякуємо за вашу оцінку!");
    })
};