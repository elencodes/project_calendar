//1.Ищем поле ввода даты рождения
const birthDate = document.querySelector(`#date`).value;
const resultMessage = document.querySelector(`#result`);
const button = document.querySelector(`#button`);

const messageForUser = () => {
	//2.Переводим значение даты в милисекунды (преобразуем дату рождения в таймстамп)
	const dateTimestamp = Date.parse(birthDate);
	//3.Ищем текущую дату (в милисекундах)
	const currentDate = Date.now();
	//4.Ищем разницу между введенной датой в поле вода и текущей датой в мс (милисекундах)
	const timeDiff = dateTimestamp - currentDate;
	//5.Перевод полученное значение в дни
	const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	//6.Вывозим сообщение на экран
	resultMessage.textContent = `До вашего дня рождения осталось ${daysLeft} дней`
}

button.addEventListener(`click`, messageForUser);