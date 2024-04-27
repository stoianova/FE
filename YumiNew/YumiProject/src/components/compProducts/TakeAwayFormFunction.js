// import TakeAwayForm from './TakeAwayForm';

// document.querySelector ('form').addEventListener('change', function uniqFun(){
//     let nameRegEx = /^[a-z]{2,20}$/i;
//     let numberRegEx = /^[+]\d{12}$/;


//     let name = document.querySelector ('#name')
//     let number = document.querySelector ('#number')
//     let time = document.querySelector ('#time')
//     let submitButton = document.querySelector ('#submitButton')

//     let newObj = {
//         nameNew: '',
//         numberNew: '',
//         timeNew: '',
//         submitButtonNew: '',
//     }

//     if (name.value.length > 2 && number.value.length > 10 && time.value.length > 2){
//         submitButton.removeAttribute('disabled')
//     }
//     else{
//         sub.setAttribute('disabled', true)
//     }
// document.querySelector('form').addEventListener('submit', function(e){
//     e.preventDefault()
//     newObj.nameNew = name.value
//     newObj.numberNew = number.value
//     newObj.timeNew = time.value
    
//         localStorage.setItem('order', JSON.stringify(newObj));

//         setTimeout(function another(){
//             let inputs = document.querySelectorAll('.input')
//             for( let some of inputs){
//                 some.value = ''
//             }
//         }, 0)

// })
// })

// export default uniqFun();