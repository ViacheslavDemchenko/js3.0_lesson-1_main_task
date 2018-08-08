//Задаем начальные переменные и записываем в них данные пользователя
let budget = +prompt('Ваш бюджет на месяц?'),//Переводим данные в числовой формат (+)
	shopName = prompt('Название вашего магазина?'),
	shopGoods = [],
	employers = [],
	mainList = {};
//Создаем цикл для получения от пользователя трех типов товаров и вносим их в массив
	for (let i = 0; i < 3; i++) {
		let newGoods = prompt('Какой тип товаров будем продавать?');
			shopGoods[i] = newGoods;
	}
//Вносим пользовательские данные в объект
	mainList.budget = budget;
	mainList.shopName = shopName;
	mainList.shopGoods = shopGoods;
	mainList.employers;
	mainList.open;
//Выводим суточный бюджет
alert('Ваш бюджет на один день: ' + (budget / 30) );


