// let languages = ["Python", "JavaScript", "C++"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length)
//
// for (let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }

// function getSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// let numbers = [10, 20, 30, 40, 50];
// console.log(getSum(numbers));


// let name = [];
// name.push("Ivan");
// name.push("Ivan2");
// name.pop()
// name.unshift("Ivan3", "Ivan4");
// name.shift();
// console.log (name.slice(0,1))
//
//
// console.log(name);


// let color = ["red", "green", "blue", "yellow", "brown"];
// // color.splice(0,1, "pink");
// let deleted = color.splice (4,2)
// color.splice(2, 0, "pink")
// console.log(color);


// function registerNames(name){
//     if (name.trim() === ""){
//         alert("Please enter a name");
//         return;
//     }
//     let dublicationName = false;
//     for (i = 0; i < eventNames.length; i++){
//         if (eventNames[i] === name){
//             dublicationName = true;
//         }
//
//     }
//     if (dublicationName){
//         alert("Учасник зареєстрований");
//     }else {
//     eventNames.push(name);
//     alert(`Учасник ${name} зареєстрований`)}
// }
//
// function removeNames(name){
//     let index = -1;
//     for (i = 0; i < eventNames.length; i++){
//         if (eventNames[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("Такого учасника немає")
//     }else {
//         eventNames.splice(index, 1);
//         alert(`Учасник ${name} видалений`)
//     }
// }
//
// function printCount(){
//     alert(`Всього учасників ${eventNames.length}`)
// }
//
// let eventNames  = ["Ivan", "Olha", "Maria", "Stepan", "Oleh"]
//
//
// registerNames("Olha")
// removeNames("Olha")
// printCount()


let eventNames  = ["Ivan", "Olha", "Maria", "Stepan", "Oleh"]
// for(let i = 0; i < eventNames.length; i++){
//     console.log(eventNames[i]);
// }

// for(let name of eventNames){
//     console.log(`${name}`);
// }

eventNames.forEach(function(name, index){
    console.log(index);
    console.log(name);
})
