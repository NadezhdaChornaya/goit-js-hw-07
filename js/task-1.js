// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет 
// в консоль текст заголовка элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// ============================================================================



// let items = document.querySelectorAll(".item")
let ul = document.getElementById("categories");
let items = ul.querySelectorAll(".item");
console.log(items);
console.log(`В списке ${items.length} категории`);
// const categories = document.querySelector('#categories');
// console.log(categories);

// console.log(categories.classList.contains("item"));

// const result = list.classList.contains('list');
// console.log(result);

// const object = info.find(item=> item.id === first.dataset.id);
// console.log(object);

items.forEach((listItem) => {
    // console.log(listItem);
    const h2 = listItem.querySelector("h2");
    const li = listItem.querySelectorAll("li")
    console.log(li.length);
    console.log(`Категория: ${h2.textContent}, Количество элементов: ${li.length}`);
    // console.log(`Категория: ${h2.innerText}`);
})



console.dir(window.document);  