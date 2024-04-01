// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. 
// Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

let summary = 0;
function calculateTotalPrice(order) {
    for (let i = 0; i < order.length; i++) {

        const element = order[i];        
        summary = summary + element;        
        
    }
    return summary;
}

//console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

//?-------------------TASK--------------------------/

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).
// Використовуй цикл for.



function getEvenNumbers(start, end) {
    let newArray = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            newArray.push(i);
    }
        
    }
    return newArray;
}

// console.log(getEvenNumbers(2, 5)); //повертає [2, 4]
// getEvenNumbers(3, 11) //повертає [4, 6, 8, 10]
// getEvenNumbers(6, 12) //повертає [6, 8, 10, 12]
// getEvenNumbers(8, 8) //повертає [8]
// getEvenNumbers(7, 7) //повертає []

//?-------------------TASK--------------------------/

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру,
// тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві["apple", "plum", "pear"].

function checkStorage(storage, item) {
       
        if (storage.includes(item.toLowerCase())) {
            return `${item.toLowerCase()} is available to order!`
        }
        else {
            return "Sorry! We are out of stock!"
        }

}

// console.log(checkStorage(["apple", "plum", "pear"], "plum")); //повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); //повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear")); //повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); //повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")); //повертає "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")); //повертає "Sorry! We are out of stock!"

//?-------------------TASK--------------------------/

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вхідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив


//?-------------------TASK--------------------------/

const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  //console.log(planet);
}

//?-------------------TASK--------------------------/

// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.

function calculateTotalPrice(order) {
    let summary = 0;
    for (const number of order) {
        summary = summary + number;
    }      
    return summary;
}

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) //повертає 1116
// console.log(calculateTotalPrice([])) //повертає 0

//?-------------------TASK--------------------------/

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

//console.log(sum(2, 5));

//?-------------------TASK--------------------------/

// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
// Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].Використовуй цикл або метод масиву toReversed(),
// який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.


function createReversedArray() {
    const args = Array.from(arguments);
    //console.log("🚀 ~ createReversedArray ~ args:", args)
    return args.reverse();

}
    


 //console.log(createReversedArray(12, 85, 37, 4)) //повертає [4, 37, 85, 12]

