// 1. Обычная функция
function isAdult(age) {
  return age >= 18;
}

// Стрелочная 
const isAdult = age => age >= 18;


// 2. Обычная функция
function square(n) {
  return n * n;
}

// Стрелочная
const square = n => n * n;


// 3. Обычная функция 
function sayHello(name) {
  console.log("Привет, " + name + "!");
}
// Стрелочная
const sayHello = name => console.log("Привет, " + name + "!");
