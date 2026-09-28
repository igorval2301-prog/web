// let i = 1;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// console.log(Number("7" > 7))
//
// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 0 || age >= 120) {
//     alert("Please enter a number");
//     age = +prompt("Enter your age");
//
// }

// const correctPin = 1111;

// let pin = +prompt('Enter a valid pin');
// let tries = 1;

// while (pin !== correctPin && tries <=3) {
//     pin = +prompt('Enter a valid pin');
//     tries ++;
// }
// if (pin === correctPin) {
//     alert("Доступ дозволено")
// }
// else{
//     console.log("kartka zablokovana")
// }

// while (tries <= 3) {
//     let pin = +prompt("Enter a valid PIN number");
//     if (pin === correctPin) {
//         console.log("PIN is correct");
//         break;
//
//     }
//     tries ++;
//     console.log("nepravilnii parol")
// }


// let menuChoice;
// do{
//     menuChoice = +prompt("What would you like to do?\n" +
//     "1 - vidkriti profile\n" +
//     "2 - nalashtuvannya\n" +
//    "0 - vihid" )
//
//     if(menuChoice === "1"){
//         console.log(prompt("vidkrivaemo"));
//     }
//     else if(menuChoice === "2"){
//         console.log(prompt("nalashtovuemo"));
//     }
//     else if(menuChoice === "0"){
//         console.log(prompt("vihid"));
//
//     }
//     else {
//         console.log(prompt("ne zrozumilo"));
//     }
// }while(menuChoice !== "0");

//------------------------------------------------------------


let age = +prompt("Введіть вік:");

while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Некоректно. Введіть вік:");
}


const correctPin = 4321;
let tries = 0;
let access = false;

while (tries < 3) {
    const pin = +prompt("Введіть PIN:");
    tries++;

    if (pin === correctPin) {
        access = true;
        break;
    }
    alert("Неправильний PIN");
}


if (access) {
    let choice;

    do {
        choice = +prompt(
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід");

        if (choice === 1) {
            alert("Особистий кабінет");
        } else if (choice === 2) {
            alert("Повідомлення");
        } else if (choice === 3) {
            alert("Налаштування");
        } else if (choice === 0) {
            alert("Вихід");
        } else {
            alert("Такого пункту немає.");
        }
    } while (choice !== 0);
}
else {
    alert("Доступ заборонено");
}