// 1) пройдіть по масиву і зробіть заповнення таблиці даними з масива
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

let table = document.querySelector('table');
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');

let x = booksArray[0]
let y = Object.keys(x)

 y.forEach(myHead => {
    let tH = document.createElement('th');
    tH.textContent=myHead.toUpperCase();
    thead.appendChild(tH);
})

booksArray.forEach(book => {
    let row = document.createElement('tr');


    let titleBook = document.createElement('td');
    titleBook.textContent = book.title;
    row.appendChild(titleBook);

    let yearBook = document.createElement('td');
    yearBook.textContent = book.year;
    row.appendChild(yearBook);

    let ratingBook = document.createElement('td');
    ratingBook.textContent = book.rating;
    row.appendChild(ratingBook);

    tbody.appendChild(row);

    titleBook.style.textAlign="center"
    yearBook.style.textAlign="center"
    ratingBook.style.textAlign="center"
});



// 2)За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

let containerHeader = document.createElement('header');
let myBody = document.querySelector('body');
myBody.appendChild(containerHeader);

containerHeader.style.backgroundColor = 'yellow';
containerHeader.style.padding = '50px';
containerHeader.style.textAlign = 'center';

// 3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.

const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
];

menuData

// let newLinkFirst = document.createElement('a');
// newLinkFirst.setAttribute('href', menuData[0].url);
// newLinkFirst.innerText = menuData[0].name;

// let newLinkSecond = document.createElement('a');
// newLinkSecond.setAttribute('href', menuData[1].url);
// newLinkSecond.innerText = menuData[1].name;

// let newLinkThird = document.createElement('a');
// newLinkThird.setAttribute('href', menuData[2].url);
// newLinkThird.innerText = menuData[2].name;

containerHeader.appendChild(newLinkFirst);
containerHeader.appendChild(newLinkSecond);
containerHeader.appendChild(newLinkThird);

newLinkFirst.style.padding = '50px';
newLinkSecond.style.padding = '50px';
newLinkThird.style.padding = '50px';


// 4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

let newContainer = document.createElement('div');
let myBlock = document.querySelector('body');
myBlock.appendChild(newContainer);

newContainer.style.backgroundColor = 'violet';
newContainer.style.padding = '50px';
newContainer.style.textAlign = 'center';
newContainer.style.display = 'flex';
newContainer.style.width = '100%';
newContainer.style.height = '100%';


for (let i = 0; i < 50; i++) {
    let mynewContainer = document.createElement("div"); 
    newContainer.appendChild(mynewContainer);

    mynewContainer.style.backgroundColor = 'blue';
    mynewContainer.style.width = '50px';
    mynewContainer.style.height = '50px';
    mynewContainer.style.borderRadius = '50%';
};
