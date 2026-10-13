// ЗАВДАННЯ 1

let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let userName = prompt("Введіть ім'я:");
while (userName === null || userName.trim() === "") {
    userName = prompt("Ім'я не може бути порожнім");
}

let day = Number(prompt("Введіть день народження:"));
while (isNaN(day) || day < 1 || day > 31) {
    day = Number(prompt("Невірно"));
}

let month = Number(prompt("Введіть місяць народження:"));
while (isNaN(month) || month < 1 || month > 12) {
    month = Number(prompt("Невірно"));
}
//
// let personalNumber = (userName.length + day + month) % topics.length;
// alert("Вам рекомендовано вебінар: " + topics[personalNumber]);
//
//
// function catalog(min) {
//     let text = "";
//     for (let i = 0; i < topics.length; i++) {
//         if (seats[i] >= min) {
//             let status = "Місць немає";
//             if (seats[i] > 0) {
//                 status = "Набір відкрито";
//             }
//             text = text + (i + 1) + ". " + topics[i] + " - місць: " + seats[i] + " - " + status + "\n";
//         }
//     }
//     return text;
// }
//
// alert(catalog(0));
//
// let minSeats = Number(prompt("Мінімальна кількість місць:"));
// let filtered = catalog(minSeats);
// if (filtered === "") {
//     alert("Збігів немає");
// } else {
//     alert(filtered);
// }


//ЗАВДАННЯ 2
//
// let search = prompt("Введіть назву вебінару:");
// if (search === null) {
//     alert("Пошук скасовано");
// } else {
//     let found = -1;
//     for (let i = 0; i < topics.length; i++) {
//         if (topics[i] === search) {
//             found = i;
//         }
//     }
//
//     if (found === -1) {
//         alert("Такого вебінару немає");
//     } else if (seats[found] === 0) {
//         alert("Місць немає");
//     } else if (confirm("Записати вас на " + topics[found] + "?")) {
//         seats[found] = seats[found] - 1;
//         alert("Ви записані! Залишилось місць: " + seats[found]);
//     } else {
//         alert("Запис скасовано");
//     }
// }


//ЗАВДАННЯ 3

// function showList(array) {
//     let text = "";
//     for (let i = 0; i < array.length; i++) {
//         text = text + (i + 1) + ". " + array[i] + "\n";
//     }
//     alert(text);
// }
//
// let participants = [userName];
//
// for (let i = 0; i < 4; i++) {
//     let person = prompt("Введіть ім'я учасника " + (i + 2) + ":");
//     while (person !== null && person.trim() === "") {
//         person = prompt("Ім'я порожнє. Введіть ще раз:");
//     }
//     if (person === null) {
//         alert("Введення завершено");
//         break;
//     }
//     participants.push(person);
// }
//
// showList(participants);
//
// let longer = 0;
// for (let i = 0; i < participants.length; i++) {
//     if (participants[i].length > userName.length) {
//         longer++;
//     }
// }
// alert("Поріг: " + userName.length +
//     "\nДовших імен: " + longer);
//
// if (confirm("Змінити ім'я?")) {
//     let number = Number(prompt("Номер учасника (1-" + participants.length + "):"));
//     if (isNaN(number) || number < 1 || number > participants.length) {
//         alert("Невірний номер");
//     } else {
//         let newName = prompt("Нове ім'я:");
//         if (newName === null || newName.trim() === "") {
//             alert("Ім'я не може бути порожнім");
//         } else {
//             participants[number - 1] = newName;
//             showList(participants);
//         }
//     }
// }


//ЗАВДАННЯ 4

// let visits = [24, 18, 32, 0, 15, 27, 9, 21];
// let bonus = (day + month) % 7;
//
// let personalVisits = [];
// for (let i = 0; i < visits.length; i++) {
//     personalVisits.push(visits[i] + bonus);
// }
//
// function getVisitStats(values) {
//     let sum = 0;
//     let max = values[0];
//     let min = values[0];
//     for (let i = 0; i < values.length; i++) {
//         sum += values[i];
//         if (values[i] > max) {
//             max = values[i];
//         }
//         if (values[i] < min) {
//             min = values[i];
//         }
//     }
//     return [sum, sum / values.length, max, min];
// }
//
// let stats = getVisitStats(personalVisits);
//
// let limit = Number(prompt("Введіть поріг відвідуваності:"));
// while (isNaN(limit) || limit < 0) {
//     limit = Number(prompt("Невірно! Введіть число не менше 0:"));
// }
//
// let reached = 0;
// for (let i = 0; i < personalVisits.length; i++) {
//     if (personalVisits[i] >= limit) {
//         reached++;
//     }
// }
//
// alert("Bonus: " + bonus +
//     "\nСума: " + stats[0] +
//     "\nСереднє: " + stats[1] +
//     "\nМаксимум: " + stats[2] +
//     "\nМінімум: " + stats[3] +
//     "\nЗначень не менше порогу: " + reached);
//
// if (confirm("Показати номери вебінарів, які досягли порогу?")) {
//     let numbers = "";
//     for (let i = 0; i < personalVisits.length; i++) {
//         if (personalVisits[i] >= limit) {
//             numbers += (i + 1) + " ";
//         }
//     }
//     alert("Номери: " + numbers);
// }


//ЗАВДАННЯ 5

// function showTopics() {
//     let text = catalog(0);
//     if (text === "") {
//         alert("Список порожній");
//     } else {
//         alert(text);
//     }
// }
//
// function findTopic() {
//     let name = prompt("Введіть назву для пошуку:");
//     for (let i = 0; i < topics.length; i++) {
//         if (topics[i] === name) {
//             alert("Знайдено: №" + (i + 1) + ", місць: " + seats[i]);
//             return;
//         }
//     }
//     alert("Не знайдено");
// }
//
// let choice;
// do {
//     choice = prompt("1 - показати вебінари\n2 - додати вебінар\n3 - перейменувати\n4 - знайти вебінар\n5 - видалити останній\n0 - вихід");
//
//     switch (choice) {
//         case "1":
//             showTopics();
//             break;
//         case "2":
//             let newTopic = prompt("Назва нового вебінару:");
//             if (newTopic === null || newTopic.trim() === "") {
//                 alert("Назва не може бути порожньою");
//             } else {
//                 let newSeats = Number(prompt("Кількість місць:"));
//                 topics.push(newTopic);
//                 seats.push(newSeats);
//                 alert("Додано");
//             }
//             break;
//         case "3":
//             let num = Number(prompt("Номер вебінару (1-" + topics.length + "):"));
//             if (isNaN(num) || num < 1 || num > topics.length) {
//                 alert("Невірний номер");
//             } else {
//                 let newName = prompt("Нова назва:");
//                 if (newName === null || newName.trim() === "") {
//                     alert("Назва не може бути порожньою");
//                 } else {
//                     topics[num - 1] = newName;
//                     alert("Перейменовано");
//                 }
//             }
//             break;
//         case "4":
//             findTopic();
//             break;
//         case "5":
//             if (confirm("Видалити останній вебінар?")) {
//                 topics.pop();
//                 seats.pop();
//                 alert("Видалено");
//             }
//             break;
//         case "0":
//             if (!confirm("Вийти з меню?")) {
//                 choice = "";
//             }
//             break;
//         default:
//             alert("Невірний пункт меню");
//     }
// } while (choice !== "0");


//ЗАВДАННЯ 6

let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];

let personalScore = (day * month + userName.length) % 101;
requestScores.push(personalScore);

// додавання нових балів
let more = true;
while (more) {
    let input = prompt("Введіть бал (0-100):");
    if (input === null) {
        break;
    }
    let score = Number(input);
    if (input.trim() === "" || isNaN(score) || score < 0 || score > 100) {
        alert("Некоректний бал, не додано");
    } else {
        requestScores.push(score);
        more = confirm("Продовжити?");
    }
}

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            high.push(scores[i]);
        } else if (scores[i] >= 50) {
            medium.push(scores[i]);
        } else {
            low.push(scores[i]);
        }
    }
    return [high, medium, low];
}

function average(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}

let groups = distributeRequests(requestScores);
let names = ["Високі", "Середні", "Низькі"];

let result = "";
for (let i = 0; i < groups.length; i++) {
    result = result + names[i] + ": " + groups[i].join(", ") + "\n";
    result = result + "Кількість: " + groups[i].length + ", середній бал: " + average(groups[i]) + "\n\n";
}

// найбільша група (при рівності - всі)
let maxLength = Math.max(groups[0].length, groups[1].length, groups[2].length);
result = result + "Найбільша група: ";
for (let i = 0; i < groups.length; i++) {
    if (groups[i].length === maxLength) {
        result = result + names[i] + " ";
    }
}

// група персонального балу
let personalGroup = names[2];
if (personalScore >= 85) {
    personalGroup = names[0];
} else if (personalScore >= 50) {
    personalGroup = names[1];
}
result = result + "\nВаш бал " + personalScore + " - група: " + personalGroup;

alert(result);