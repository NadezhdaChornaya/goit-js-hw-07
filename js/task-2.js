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

let listRef = document.querySelector("#ingredients")
console.dir(listRef);
let newItems = ingredients.forEach((item) => {
    let liItem = document.createElement('li');
    liItem.textContent = item;
    listRef.append(liItem);
    return listRef
})
console.log(listRef);



// =======================================================================
// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//     let items = document.createElement("li");
//     items.innerHTML = ingredient;
//     ulList.append(items);
//     parent.append(...items)
// });

// console.log(foodIngredients);