let eventType = +prompt("Тип події:\n1 - Кіно\n2 - Театр\n3 - Концерт");

while (eventType !== 1 && eventType !== 2 && eventType !== 3) {
    alert("Такої події немає");
    eventType = +prompt("Тип події:\n1 - Кіно\n2 - Театр\n3 - Концерт");
}

let price;
switch (eventType) {
    case 1:
        price = 150;
        break;
    case 2:
        price = 220;
        break;
    case 3:
        price = 350;
        break;
}


let dayType = +prompt("Тип дня:\n1 - Будній\n2 - Вихідний");

while (dayType !== 1 && dayType !== 2) {
    alert("Введіть 1 або 2");
    dayType = +prompt("Тип дня:\n1 - Будній\n2 - Вихідний");
}

if (dayType === 2) {
    price = price * 1.15;
}


let count = +prompt("Кількість квитків (від 1 до 6):");

while (Number.isNaN(count) || !Number.isInteger(count) || count < 1 || count > 6) {
    alert("Некоректна кількість");
    count = +prompt("Кількість квитків (від 1 до 6):");
}


let processed = 0;
let free = 0;
let discounted = 0;
let full = 0;
let total = 0;


for (let i = 1; i <= count; i++) {


    let age = +prompt("Квиток №" + i + ". Введіть вік (-1 - завершити):");

    while (Number.isNaN(age) || !Number.isInteger(age) || age < -1 || age > 120) {
        alert("Некоректний вік");
        age = +prompt("Квиток №" + i + ". Введіть вік (-1 - завершити):");
    }


    if (age === -1) {
        break;
    }

    processed++;


    let ticketPrice;
    let hasDiscount = false;

    if (age <= 5) {

        free++;
        continue;
    } else if (age <= 12) {
        ticketPrice = price * 0.5;
        hasDiscount = true;
    } else if (age <= 17) {
        ticketPrice = price * 0.8;
        hasDiscount = true;
    } else if (age <= 59) {
        ticketPrice = price;
    } else {
        ticketPrice = price * 0.75;
        hasDiscount = true;
    }


    if (age >= 18 && age <= 25) {
        const student = confirm("Є студентський квиток?");
        if (student) {
            ticketPrice = ticketPrice * 0.9;
            hasDiscount = true;
        }
    }

    if (hasDiscount) {
        discounted++;
    } else {
        full++;
    }

    total += ticketPrice;
}

if (total > 1000) {
    total = total * 0.95;
}


const result =
    "Оброблено квитків: " + processed + "\n" +
    "Безкоштовних: " + free + "\n" +
    "Зі знижкою: " + discounted + "\n" +
    "За повною ціною: " + full + "\n" +
    "Загальна сума: " + total.toFixed(2) + " грн";

alert(result);