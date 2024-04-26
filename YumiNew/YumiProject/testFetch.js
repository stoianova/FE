// const myurl = 'https://api.github.com/users/hadley/orgs'
// const myObj = await (await fetch(myurl)).json();

// console.log(myObj);

document.querySelector ('form').addEventListener('change', function(){
    let first = document.querySelector('#first')
    let second = document.querySelector('#second')
    let sub = document.querySelector('button')

    let newObj = {
        fir: '',
        sec: ''}
    

    if (first.value.length > 5 && second.value.length > 5){
        sub.removeAttribute('disabled')
    }
    else{
        sub.setAttribute('disabled', true)
    }
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    newObj.fir = first.value
    newObj.sec = second.value

        localStorage.setItem('order', JSON.stringify(newObj));

        setTimeout(function another(){
            let inputs = document.querySelectorAll('.input')
            for(let some of inputs){
                some.value = ''
            }
        }, 0)

})

})



