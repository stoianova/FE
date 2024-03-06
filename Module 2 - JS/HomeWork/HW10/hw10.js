window.onload = function(){

    // Завдання 'onContextMenu': 

    // Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".
    
    let div = document.querySelector('.first');
    let ulFirst = document.querySelector('.second');
    let bigDiv=  document.querySelector('.magic');
    let liFirst = document.querySelector('.second :nth-child(1)');
    let liSecond = document.querySelector('.second :nth-child(2)');
    let liThird = document.querySelector('.second :nth-child(3)');
    let liForth = document.querySelector('.second :nth-child(4)');
    let mybody = document.querySelector('body');
    
  
    div.addEventListener ('contextmenu', function(e){
        e.preventDefault();
        ulFirst.style.display = 'inherit';
    });

    liFirst.addEventListener ('click', function(){
        bigDiv.style.display  ='flex';
        bigDiv.style.justifyContent  ='center';
    });

    liSecond.addEventListener ('click', function(){
        bigDiv.style.display  ='flex';
        bigDiv.style.justifyContent  ='flex-end ';
    });

    liThird.addEventListener ('click', function(){
       
        bigDiv.style.display  ='flex';
        bigDiv.style.justifyContent  ='flex-start';
    });

    liForth.addEventListener ('click', function(){
        div.style.display = 'none';
    });

    mybody.addEventListener ('dblclick', function(e){
        e.preventDefault();
        div.style.display = 'inherit';
    });
    


    // Завдання 'onMouseOver' і 'onMouseOut': 
    // Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується. Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

    let mouse = document.querySelector('.image');
    let widht = mouse.offsetWidth;
    let height = mouse.offsetHeight;
    
    let newWidht = widht*1.5;
    let newHeight = height*1.5;

    mouse.addEventListener ('mouseover', function(){
        mouse.style.width = `${newWidht}px`;
        mouse.style.height = `${newHeight}px`;
    })

    mouse.addEventListener ('mouseout', function(){
        mouse.style.width = `${widht}px`;
        mouse.style.height = `${height}px`;
    });


    // Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена

    let x = 0;
    let y = 0;
    let move = 10;
    let shape = document.querySelector('.shape');

    function moveShape(element){
        element.style.top = `${y}px`
        element.style.right = `${x}px`

    }

    document.addEventListener ('keydown', function(event){
        switch(event.key){
            case 'ArrowUp':
                y-=move;
                break;
            case 'ArrowRight':
                x-=move;
                break;
            case 'ArrowDown':
                y+=move;
                break;
            case 'ArrowLeft':
                x+=move;
                break;
        }
    moveShape(shape);
    });


    // v1
    // Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М and ctrl, з'являється  меню ul елемент в якому 3 li, При натиску клавіші ctrl K меню зникає.
    
    let ul = document.querySelector('.list');

    document.addEventListener ('keydown', function(event){
        switch(event.key){
            case 'Control', 'm':
                event.preventDefault();
                ul.style.display = 'inherit';
                break;
            case 'Control', 'k':
                event.preventDefault();
                ul.style.display = 'none';
            break;
        }
    });


    /*  v2
    Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М, з'являється  меню ul елемент в якому 3 li, і зробити можливість  переміщатися по пунктах меню, використовуючи клавіші вгору/вниз змінюючи бекграунд. При натиску клавіші С меню зникає. */
};