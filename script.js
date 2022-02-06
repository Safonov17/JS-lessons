const title = "JavaScript";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 500;
const rollback = 10;
const fullPrice = 110000;
const adaptive = true;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

//Вывести в консоль длину строки screens
console.log(screens.length);

/*
Вывести в консоль: 
“Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани”
“Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
*/
console.log("Стоимость верстки экранов - " + screenPrice + " рублей");
console.log("Стоимость верстки сайта - " + fullPrice + " рублей");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split(", "));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(fullPrice * (rollback / 100));
