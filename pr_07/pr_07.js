// function showMessage() {
//     console.log("hello world");
// }
// showMessage();

// function showProduct(name, price){
//     console.log("Товар ${name}: ${price}");
// }
//
// showProduct("Notebook", price = 1500);


// function calculate(price,count){
//
//     return price * count;
// }
//
// let total = calculate(1000, 4);
// console.log(total);


// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }
//     else{
//         return 0;
//     }
// }
// let discount1 = +prompt("please enter a valid number")
//
// console.log(discount(discount1))

//
// function getProductTotal(price, count){
//     return price * count;
// }
//
// function getDiscount(total){
//     if (total >= 10000){
//         return 0.15;
//     }
//     else if (total >= 5000){
//         return 0.1;
//     }
//     else if (total >= 2000){
//         return 0.05
//     }
//     else {
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total * percent;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
//
// let productName = prompt("Enter your product name");
// let productPrice = +prompt("Enter your product price");
// let productCount = +prompt("Enter your product count");
//
// let productTotal = getProductTotal(productPrice, productCount );
// let discount = getDiscount(productTotal)
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(productName)// tovar
// console.log(productPrice)// zina
// console.log(productCount)// kilkist
// console.log(productTotal) // suma
// console.log(discount) // znizhka
// console.log(productDiscountValue) // suma znizhki v grn
// console.log(productFinalPrice) // do splati


//-------------------------------------------------------

function getFuelAmount(distance, consumptionPer100) {
    return distance / 100 * consumptionPer100;
}
function getFuelCost(fuelAmount, fuelPrice) {
    return fuelAmount * fuelPrice;
}
function getKmCost(distance, pricePerKm) {
    return distance * pricePerKm;
}
function getTotalCost(fuelCost, kmCost) {
    return fuelCost + kmCost;
}
let startCity = prompt("Введіть місто старту");
let finishCity = prompt("Введіть місто фінішу");
let distance = +prompt("Введіть відстань");
let consumption = +prompt("Введіть розхід пального");
let fuelPrice = +prompt("Введіть вартість 1 л пального");
let kmPrice = +prompt("Введіть вартість за 1 км");

let fuelAmount = getFuelAmount(distance, consumption);
let fuelCost = getFuelCost(fuelAmount, fuelPrice);
let kmCost = getKmCost(distance, kmPrice);
let totalCost = getTotalCost(fuelCost, kmCost);

console.log(`Маршрут: ${startCity} - ${finishCity}`);
console.log(`Відстань: ${distance} км`);
console.log(`Потрібно пального: ${fuelAmount} л`);
console.log(`Вартість пального: ${fuelCost} грн`);
console.log(`Вартість за кілометраж: ${kmCost} грн`);
console.log(`Всього потрібно грошей: ${totalCost} грн`);