const games = [
    { id: 1, title: "Witcher 3", genre: "RPG", price: 500, rating: 10, available: true },
    { id: 2, title: "Cyberpunk", genre: "RPG", price: 900, rating: 8, available: true },
    { id: 3, title: "FIFA", genre: "Sport", price: 1300, rating: 6, available: false },
    { id: 4, title: "Minecraft", genre: "Sandbox", price: 650, rating: 9, available: true },
    { id: 5, title: "Dota 2", genre: "MOBA", price: 0, rating: 8, available: true },
    { id: 6, title: "Resident Evil", genre: "Horror", price: 1100, rating: 9, available: false },
];

// 2.1
for (const game of games) {
    console.log(game.id, game.title, game.genre, game.price, game.rating, game.available);
}

// 2.2
console.log("Кількість ігор:", games.length);

// 2.3
const title = prompt("Назва гри:");
const genre = prompt("Жанр:");
const price = Number(prompt("Ціна:"));
const rating = Number(prompt("Рейтинг:"));

games.push({
    id: games.length + 1,
    title: title,
    genre: genre,
    price: price,
    rating: rating,
    available: true,
});
console.log("Після додавання:", games.length);

// 2.4
if (confirm("Видалити останню гру?")) {
    games.pop();
    console.log("Гру видалено. Залишилось:", games.length);
}

// 2.5
const searchTitle = prompt("Яку гру шукати?");
const found = games.find((game) => game.title === searchTitle);
if (found) {
    console.log("Знайдено:", found);
} else {
    alert("Гру не знайдено");
}

// 2.6
const maxPrice = Number(prompt("Максимальна ціна:"));
const cheapGames = games.filter((game) => game.price <= maxPrice);
console.log("Ігри до " + maxPrice + " грн:", cheapGames);

// 2.7
const topGames = games.filter((game) => game.rating >= 8);
console.log("Рейтинг від 8:", topGames);

// 2.8
const titles = games.map((game) => game.title);
console.log("Назви:", titles);

// 2.9
const saleGames = games.map((game) => {
    return {
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: game.price * 0.85,
        rating: game.rating,
        available: game.available,
    };
});
console.log("Зі знижкою:", saleGames);

// 2.10
games.sort((a, b) => a.price - b.price);
console.log("За ціною:", games);

// 3
const name = "Ігор";
const budget = name.length * 100;
console.log("Мій бюджет:", budget);

const availableGames = games.filter((game) => game.available);
let total = 0;
for (const game of availableGames) {
    console.log(game.title, game.price);
    total = total + game.price;
}
console.log("Загальна вартість:", total);

if (total > budget) {
    alert("Грошей не вистачає");
} else {
    alert("Залишок: " + (budget - total));
}