// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет 
// в консоль текст заголовка элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// ============================================================================




const ulRef = document.getElementById("categories");
const itemsRef = ulRef.querySelectorAll(".item");
// console.log(itemsRef);
console.log(`В списке ${itemsRef.length} категории`);


itemsRef.forEach((listItem) => {

    const h2 = listItem.querySelector("h2");
    const li = listItem.querySelectorAll("li")
    console.log(li.length);
    console.log(`Категория: ${h2.textContent}, Количество элементов: ${li.length}`);
    // console.log(`Категория: ${h2.innerText}`);
})



