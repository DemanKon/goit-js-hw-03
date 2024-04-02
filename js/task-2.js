// Напиши функцію під назвою makeArray, яка приймає три параметри:
// firstArray(масив),
// secondArray(масив) і
// maxLength(число).
// Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function makeArray(firstArray, secondArray, maxLength) {
    //console.log("🚀 ~ makeArray ~ maxLength:", maxLength)
    
    const newArray = firstArray.concat(secondArray);
    
    //console.log("🚀 ~ makeArray ~ newArray:", newArray)
    
    if (newArray.length > maxLength) {
        const sliceArray = newArray.slice(0, maxLength);
        // console.log("🚀 ~ makeArray ~ sliceArray:", sliceArray)
        return sliceArray;
    } else {
        // console.log("🚀 ~ makeArray ~ newArray:", newArray)
        return newArray;
    }
    
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []