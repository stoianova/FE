window.onload = function(){

    // Форма з вибором улюбленого кольору:
    // Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
    // Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

    let body = document.querySelector('body');
    let form = document.querySelector('form');
    let first = document.querySelector('#color1');
    let second = document.querySelector('#color2');
    let third = document.querySelector('#color3');
    let forth = document.querySelector('#color4');
    let fifth = document.querySelector('#color5');
    
    form.addEventListener('change', function(){
        if(first.checked){
            body.style.backgroundColor = 'cornflowerblue';
        }
        else if(second.checked){
            body.style.backgroundColor = 'rgba(227, 216, 169, 0.773)';
        }
        else if(third.checked){
            body.style.backgroundColor = 'crimson';
        }
        else if(forth.checked){
            body.style.backgroundColor = 'rgba(100, 177, 177, 0.686)';
        }
        else if(fifth.checked){
            body.style.backgroundColor = 'rgb(188, 146, 188)';
        }
    
    });

    



    // Форма для вибору хобі з чекбоксами:
    // Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
    // Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.
    
    let [...allCheckboxEl] = document.querySelectorAll('input');
    let mybody = document.querySelector('body');
    let myForm = document.querySelector('form');
    
    
    
    myForm.addEventListener('change',function(e){
        for(let checkbox of allCheckboxEl){
            if(checkbox.checked){
                let newp = document.createElement('p')
                newp.innerText = checkbox.value;
                mybody.appendChild(newp)
                
            }
            
        }
    });



    // Форма з вибором країни із випадаючого списку:
    // Створіть випадаючий список з назвами країн.
    // Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.

    let againForm = document.querySelector('select');
    let picIc = document.querySelector('.pics');

    againForm.addEventListener('change', function(){
        
            if(againForm.value =="iceland" ){
                picIc.innerHTML='<img  src="img/godafoss-northern-lights-scaled.jpg" alt="iceland" > <p>Iceland is located between the Greenland Sea and the North Atlantic Ocean. It is northwest of the United Kingdom, and is slightly smaller than the state of Kentucky. The land is plateau with mountain peaks, and ice fields, with a coastline marked by fjords, which are deep inlets carved by glaciers.</p>'

            }
            else if(againForm.value =="sweden"){
                picIc.innerHTML='<img src="img/AdobeStock_65130167-1620x1080.jpeg" alt="sweden"> <p>Sweden is a highly developed country ranked seventh in the Human Development Index, it is a constitutional monarchy and a parliamentary democracy, with legislative power vested in the 349-member unicameral Riksdag. It is a unitary state, divided into 21 counties and 290 municipalities.</p>'
            }
            else if(againForm.value =="norway"){
                picIc.innerHTML='<img src="img/vikings-norway-norwegian-travel.jpg" alt="norway" > <p> Norway is a narrow country in northern Europe. It shares the Scandinavian Peninsula with Sweden and Finland. Norway\'s coastline is famous for its fjords (fyords), which are sea inlets between steep cliffs. The fjords were carved out by glaciers, as were the country\'s mountains.</p>' 
            }
            else if(againForm.value =="choose"){
                picIc.innerHTML='<h5> Choose country </h5>'
            }

    })


}