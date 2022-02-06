"use strict";
// УРОК 3
// 3
const title = prompt("Как называется ваш проект?");
// 4
const screens = prompt("Какие типы экранов нужно разработать? Например: Простые, Сложные, Интерактивные");
// 5
const screenPrice = +prompt("Сколько будет стоить данная работа? Например: 12000");
const rollback = 10;
// 6
const adaptive = confirm("Нужен ли адаптив на сайте?");
// 7
const screen1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const screen2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
// 8
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
// 9
const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log(servicePercentPrice);
// 10
if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (15000 >= fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так");
}
