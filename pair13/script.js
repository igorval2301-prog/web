let nameInput = document.querySelector("#nameInput");
let eventInput = document.querySelector("#eventInput");
let addButton = document.querySelector("#addButton");
let errorMessage = document.querySelector("#errorMessage");
let requestList = document.querySelector("#requestList");
let emptyMessage = document.querySelector("#emptyMessage");
let totalCount = document.querySelector("#totalCount");
let confirmedCount = document.querySelector("#confirmedCount");
let clearButton = document.querySelector("#clearButton");


function updateStats() {
    let total = requestList.querySelectorAll("li").length;
    let confirmed = requestList.querySelectorAll("li.confirmed").length;

    totalCount.textContent = total;
    confirmedCount.textContent = confirmed;

    if (total === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
}

function addRequest() {
    let name = nameInput.value.trim();
    let eventName = eventInput.value.trim();

    if (name === "" || eventName === "") {
        errorMessage.textContent = "Заповніть обидва поля";
        errorMessage.classList.remove("hidden");
        return;
    }
    errorMessage.classList.add("hidden");

    let li = document.createElement("li");
    li.classList.add("request");

    let info = document.createElement("div");

    let nameEl = document.createElement("span");
    nameEl.classList.add("name");
    nameEl.textContent = name;

    let eventEl = document.createElement("span");
    eventEl.classList.add("event");
    eventEl.textContent = eventName;

    let status = document.createElement("span");
    status.classList.add("status");
    status.textContent = "Очікує";

    info.append(nameEl, eventEl, status);

    let actions = document.createElement("div");

    let confirmButton = document.createElement("button");
    confirmButton.classList.add("confirm-btn");
    confirmButton.textContent = "Підтвердити";

    confirmButton.addEventListener("click", function() {
        li.classList.toggle("confirmed");

        if (li.classList.contains("confirmed")) {
            status.textContent = "Підтверджено";
            confirmButton.textContent = "Скасувати";
        } else {
            status.textContent = "Очікує";
            confirmButton.textContent = "Підтвердити";
        }
        updateStats();
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Видалити";

    deleteButton.addEventListener("click", function() {
        li.remove();
        updateStats();
    });

    actions.append(confirmButton, deleteButton);
    li.append(info, actions);
    requestList.append(li);

    nameInput.value = "";
    eventInput.value = "";
    updateStats();
}

clearButton.addEventListener("click", function() {
    let answer = confirm("Видалити всі?");
    if (answer) {
        requestList.innerHTML = "";
        updateStats();
    }
});

addButton.addEventListener("click", addRequest);
updateStats();