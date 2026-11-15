let card = document.querySelector('#card');
let welcome = document.querySelector('#welcome');
let userName = document.querySelector('#userName');
let themeSelect = document.querySelector('#themeSelect');
let confirmBtn = document.querySelector('#confirmBtn');
let statusText = document.querySelector('#statusText');
let infoBtn = document.querySelector('#infoBtn');
let info = document.querySelector('#info');


userName.addEventListener('input', function () {
    let name = userName.value.trim();
    if (name === "") {
        welcome.textContent = "Вітаємо, гостю!";
    } else {
        welcome.textContent = "Вітаємо, " + name + "!";
    }
})


themeSelect.addEventListener('change', function () {
    if (themeSelect.value === "dark") {
        card.classList.add('dark');
    } else {
        card.classList.remove('dark');
    }
})


confirmBtn.addEventListener('click', function () {
    if (userName.value.trim() === "") {
        statusText.textContent = "Введіть ім'я!";
        statusText.classList.remove('success');
        statusText.classList.add('error');
    } else {
        statusText.textContent = "Налаштування збережено!";
        statusText.classList.remove('error');
        statusText.classList.add('success');
    }
})


infoBtn.addEventListener('click', function () {
    info.classList.toggle('hidden');
    if (info.classList.contains('hidden')) {
        infoBtn.textContent = "Показати додаткову інформацію";
    } else {
        infoBtn.textContent = "Приховати додаткову інформацію";
    }
})