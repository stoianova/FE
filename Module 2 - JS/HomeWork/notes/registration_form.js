// - зробіть форму  реєстрації з такими елементами
    // поле ввода імені

    let myForm = document.querySelector ('form');

    let userName = document.querySelector ('#name');
    let userNameRegex = /^[a-z]{2,20}$/i;

    // myForm.addEventListener('submit', function(){
    //     let userNameValue = userName.value;
    //     alert('Name check: ' + userNameRegex.test(userNameValue));
    // })


    // поле ввода емейла
    let emailText = document.querySelector ('#email');
    let emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z]{2,6}.[a-zA-Z]{2,3}$/;

    // myForm.addEventListener("submit", function(e){
    //     e.preventDefault();
    //     let valueEmail = emailText.value;
    //     alert('Email check: ' + emailRegex.test(valueEmail));
       
    // })



    // поле ввода телефону

    let numberInput = document.querySelector ('#number');
    let numberRegex = /^[+]\d{12}$/;

    // myForm.addEventListener('submit', function(e){
    //     e.preventDefault();
    //     let valueNumber = numberInput.value;
    //     alert('Number check: ' + numberRegex.test(valueNumber));
    // })

    // поле вводу пароля

    let passwordRegex = /^(?=.*[a-z])(?=.*[0-9]).{6,20}$/;
    let passwordUser = document.querySelector ('#password');


    // myForm.addEventListener('submit', function(){
    //     let passwordValue = passwordUser.value;
    //     alert('Password check: ' + passwordRegex.test(passwordValue));
    // })

    // повторне поле пароля яке перевіяє чи співпадають паролі
    

    let passwordSecond = document.querySelector ('#password2');

    // myForm.addEventListener('submit', function(){
    //     let passwordValue = passwordUser.value;
    //     let passwordSecondValue = passwordSecond.value;

    //     if(passwordValue === passwordSecondValue){
    //         alert('Second Password check: true');

    //     }
    //     else{
    //         alert('Re-enter your password');
    //     }
    // })


    // так кнопкою відправити, кнопка повина бути disabled поки користувач не введе всі валідні значення ( до кожного поля напишіть регулярку для первірки данних ) 
    // Якщо всі поля заповнено вірно то в кнопки зникає disabled і форму можна відправити
        let mybut = document.querySelector("#submitButton")
        let myAlert = document.querySelector("#alert")

        myForm.addEventListener("input", function(){
        let valueEmail = emailText.value;
        let userNameValue = userName.value;
        let valueNumber = numberInput.value;
        let passwordValue = passwordUser.value;
        let passwordSecondValue = passwordSecond.value;

        if (passwordRegex.test(passwordValue) ===true && numberRegex.test(valueNumber) === true && userNameRegex.test(userNameValue) === true && emailRegex.test(valueEmail) === true && passwordValue===passwordSecondValue){
            mybut.disabled=false
            myAlert.innerHTML = '<p></p>'
        }
        else if(passwordSecondValue.length <1 || passwordValue.length<1 || valueNumber.length<1 || emailText.length<1 || userNameValue.length<1 ){
            myAlert.innerHTML = '<p>Fill up all fields</p> '
            mybut.disabled=true
        }
        else if(passwordValue!==passwordSecondValue){
            myAlert.innerHTML = '<p> Check your password </p> '
            mybut.disabled=true
        }
        else if(passwordRegex.test(passwordValue) ===false ){
            myAlert.innerHTML = '<p>Password should include 1 small letter and 1 number</p> '
            mybut.disabled=true
        }
        else if(numberRegex.test(valueNumber) ===false ){
            myAlert.innerHTML = '<p>Number should starts from +380*********</p> '
            mybut.disabled=true
        }
        else if(emailRegex.test(emailText) ===false ){
            myAlert.innerHTML = '<p>Check your email</p> '
            mybut.disabled=true
        }
        
        else {
            mybut.disabled=true
        }
       })

    


//     myForm.addEventListener("input", () =>{
//         let valueEmail = emailText.value;
//         if (valueEmail.length>0){
//             emailCheckBtn.disabled=false
//         }
//         else{
//             emailCheckBtn.disabled=true
//         }
//        })
