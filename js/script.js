//1.Ищем поле ввода даты рождения
const birthDate = document.querySelector(`#date`);
const resultMessage = document.querySelector(`#result`);
const errorMessage = document.querySelector(`#error`);
const button = document.querySelector(`#button`);

const messageForUser = () => {
	//1. Присваиваем переменной birthDateValue значение поля ввода birthDate
	const birthDateValue = new Date(birthDate.value);
	//2.Переводим значение даты в милисекунды (преобразуем дату рождения в таймстамп)
	const dateTimestamp = Date.parse(birthDateValue);
	//3.Ищем текущую дату (в милисекундах)
	const currentDate = Date.now();
	//4.Ищем разницу между введенной датой в поле вода и текущей датой в мс (милисекундах)
	const timeDiff = dateTimestamp - currentDate;
	//5.Перевод полученное значение в дни
	const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	//6.Присваиваем переменной lastNumber значение остатка от деления daysLeft(кол-ва дней) на 10 - получаем последнюю цифру числа
	const lastNumber = daysLeft % 10;
	//7.Вводим условие для верного склонения слова дня/дней в зависимости от количество дней
	if (daysLeft > 10 && [11, 12, 13, 14].includes(daysLeft % 100) || [5, 6, 7, 8, 9, 0].includes(lastNumber)) {
		resultMessage.textContent = `До вашего Дня Рождения осталось ${daysLeft} дней`
	} else if (lastNumber == 1 || daysLeft == 1) {
		resultMessage.textContent = `До вашего Дня Рождения остался ${daysLeft} день`;
	} else if ([2, 3, 4].includes(lastNumber)) {
		resultMessage.textContent = `До вашего Дня Рождения осталось ${daysLeft} дня`;
	} else if (birthDateValue < currentDate) {
		resultMessage.textContent = `Ваш День Рождения уже прошел`;
	}
	//8.Если поле ввода не заполнено - будет появляться сообщение с просьбой ввести дату
	errorMessage.innerHTML = "";
	if (birthDate.value == "") {
		errorMessage.textContent = `Введите Дату Рождения`;
	}
}

//9. При нажатии на кнопку - выводим значение количества дней до дня рождения
button.addEventListener(`click`, messageForUser);