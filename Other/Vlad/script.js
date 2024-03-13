// Завдання 1: Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

let countryCode = { //валюта:країна
	"AUD": "AU",
	"EUR": "AT",
	"GBP": "GB",
	"USD": "US",
	"UAH": "UA"
};
let conversionRates = { //відносно usd
	"AUD": 0.66,
	"EUR": 1.09,
	"GBP": 1.29,
	"USD": 1,
	"UAH": 0.026
};

const dropList = document.querySelectorAll('.form-converter__select');
let fromCurrency = document.querySelector('.form-converter__select_from');
let toCurrency = document.querySelector('.form-converter__select_to');
let fromInput = document.querySelector('.form-converter__input_from');
let toInput = document.querySelector('.form-converter__input_to');
let inputs = document.querySelectorAll('.form-converter__input');

for (let i = 0; i < dropList.length; i++) {
	for (const currencyCode in countryCode) {

		let selected;
		if (i == 0) {
			selected = currencyCode == "AUD" ? "selected" : "";
		} else if (i == 1) {
			selected = currencyCode == "UAH" ? "selected" : "";
		}

		let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
		dropList[i].insertAdjacentHTML("beforeend", optionTag);
	}
	dropList[i].addEventListener("change", e => {
		loadFlag(e.target);
	})
};
// Ф-ія зміни прапора ========================================================================================================
function loadFlag(el) {
	for (const code in countryCode) {
		if (code == el.value) {
			let imgTag = el.parentElement.querySelector('.form-converter__icon');
			imgTag.src = `https://flagsapi.com/${countryCode[code]}/flat/64.png`;
		}
	}
};
// поміняти місцями ========================================================================================================
const exchangeIcon = document.querySelector('.form-converter__exchange-icon');

exchangeIcon.addEventListener("click", e => {
	let tempCode = fromCurrency.value;
	fromCurrency.value = toCurrency.value;
	toCurrency.value = tempCode;
	loadFlag(fromCurrency);
	loadFlag(toCurrency);


	let tempCodeInput = toInput.value;
	fromInput.value = tempCodeInput;
	convert();

});

// Зміна значень в інпуті ========================================================================================================
[...inputs].forEach(item => {
	let amountVal = item.value;

	if (isNaN(amountVal)) {
		return;
	}

	if (amountVal == "" || amountVal <= "0") {
		item.value = "1";
		amountVal = 1;
	}

	item.addEventListener('click', e => {
		e.stopPropagation();

		if (document.hasFocus()) {
			e.target.parentElement.style.boxShadow = "inset 0px 0px 8px 0px rgba(0, 0, 0, 0.35)";
			watchChanges();
		}
		item.onfocus = function () {
			// this.focused = true;
			this.parentElement.style.boxShadow = "inset 0px 0px 8px 0px rgba(0, 0, 0, 0.35)";
			watchChanges();
		};
		item.onblur = function () {
			// this.focused = false;
			this.parentElement.style.boxShadow = "none";
			watchChanges();
		};

		// setInterval(function () {
		// 	item.value = item.focused;
		// });
	});


	item.addEventListener('keydown', function (e) {
		console.log(e.key);
		switch (e.key) {
			case 'ArrowUp':
				item.value++;
				break;
			case 'ArrowDown':
				item.value--;

				if (item.value <= "0") {
					item.value = 1;
				}
				break;
		};
	});
});

function convert() {
	toInput.value = Number(fromInput.value * conversionRates[fromCurrency.value] / conversionRates[toCurrency.value]).toFixed(2);
};


let interval = null;
function watchChanges() {
	interval == null ? setInterval("convert()", 500) : clearInterval(interval);
};