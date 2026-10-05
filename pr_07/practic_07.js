let savedLogin = "";
let savedPassword = "";
let isRegistered = false;

function registerUser() {
    savedLogin = prompt("Введіть логін");
    savedPassword = prompt("Введіть пароль");
    isRegistered = true;
    console.log("Реєстрація успішна!");
}

function loginUser() {
    if (isRegistered === false) {
        console.log("Спочатку зареєструйся!");
        return;
    }

    for (let attempts = 3; attempts > 0; attempts--) {
        let login = prompt("Введіть логін");
        let password = prompt("Введіть пароль");

        if (login === savedLogin && password === savedPassword) {
            console.log("Вхід дозволено!");
            return;
        }

        console.log(`Помилка! Залишилось спроб: ${attempts - 1}`);
    }

    console.log("Вхід заблоковано!");
}

function menu(choice) {
    if (choice === "1") {
        registerUser();
    } else if (choice === "2") {
        loginUser();
    } else if (choice === "0") {
        console.log("Вихід з програми");
    } else {
        console.log("Такого пункту немає!");
    }
}

let choice;

do {
    choice = prompt("1 — Зареєструватися\n" +
        "2 — Увійти\n" +
        "0 — Вийти");
    menu(choice);
} while (choice !== "0");