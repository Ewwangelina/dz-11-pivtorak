 
//Створити масив, довжину та елементи якого задає користувач
//Відсортувати масив за зростанням
//Видалити елементи з масиву з 2 по 4 (включно!)
//У міру змін виводити вміст масиву на сторінку


const myArray = prompt('Введите значения через запятую'); 
const newArray = []

if ((myArray !== null && myArray.trim() !== '')) { 
    
    const result = myArray.split(',') 

    for (let i = 0; i < result.length; i++ ) { 
       
        if (!isNaN(Number(result[i]))) {
            newArray.push(result[i])    
        }

    } newArray.sort(( (a, b) =>  a - b));
      alert(newArray)
      newArray.splice(2, 4)
      alert(newArray)
} else {
    alert('Вы не ввели числа')
}
