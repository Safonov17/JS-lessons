"use strict";
// УРОК 4
let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать? Например: Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа? Например: 12000");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const screen1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const screen2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что то пошло не так";
  }
};

// 1) Сумма всех дополнительных услуг. Тип - function expression
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
// 2) Cумма стоимости верстки и стоимости дополнительных услуг. Тип - function declaration
function getFullPrice() {
  return screenPrice + allServicePrices;
}
// 3) Меняет title таким образом: первый символ с большой буквы, остальные с маленькой"
const getTitle = function () {
  title = title.trim().toLowerCase();
  return (title = title[0].toUpperCase() + title.slice(1));
};
// 4) Итоговая стоимость за вычетом процента отката посреднику
function getServicePercentPrices(rollback) {
  return fullPrice - fullPrice * (rollback / 100);
}

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(rollback);
getTitle();
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(", "));
console.log("Стоимость разработки сайта " + servicePercentPrice + " рублей");
