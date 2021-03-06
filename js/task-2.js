// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ul >
//     В JS есть массив строк.

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

// let listRef = document.querySelector("#ingredients")

// const newItems = ingredients.forEach((item) => {

//     let liItem = document.createElement('li');
//     liItem.textContent = item;
//     listRef.append(liItem);
//     return liItem
// });
// console.log(listRef);

// =================================================================
let listRef = document.getElementById("ingredients");

const newMarkup = ingredients.reduce((acc, ingredient) => {
    let liItem = document.createElement('li');
    liItem.textContent = ingredient;
    acc.push(liItem);
    return acc;
}, [])

listRef.append(...newMarkup);



