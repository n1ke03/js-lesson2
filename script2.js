// let x = +prompt("сколько нужно почистить?")
// let i = 0 // Кол-во почищенных картошин

// while(i < x){
//     i++;
//     console.log("я почистил " + i + " картошку ")
// }

// let sum = +prompt("сколько хочешь отложить?");
// let mounth = +prompt(" Сколько месяцев? ");


// for(i = 0, resultSum = 0; i<mounth; i++){
//     resultSum = resultSum + sum

//    if(i % 2 == 0){
//     resultSum -= 100 // откладываем каждые 2 месяца по 100р
//    }

// }
// console.log(resultSum)


// resultSum = 0;
// let mounth = 0;
// let sum = 0
// do {
//     sum = +prompt("сколько хочешь отложить?");
//     resultSum += sum
//     mounth++
//     alert(" Ты копишь уже " + mounth + " месяцев ")
//     y = confirm("Будешь ещё откладывать Да/Нет")
// }
// while (y == true)
// alert(" Ты накопил " + resultSum + " и держался " + mounth + " месяцев ")

// for (initialization; condition; expression) - Цикл-счетчик
// (начальной инициализации цикловой переменной; 
//     условие; 
//     задает выражение для изменения цикловой переменной)

// for (i = 0, s = "*"; i < 5; i++, s = s + "*") {
//     console.log(s)
// }


// нужно сгенерировать не больше десяти случайных чисел из диапазона 1–7. В случае если выпадает четверка, генерация прекращается.
// for (i = 0; i < 10; i++) {
//     rnd = Math.round(Math.random() * 6) + 1;
//     if (rnd == 4) {
//         alert(" Выпало 4 ");
//         break;
        
//     }
//     if (rnd == 5) {
//         alert(" Выпало 5 ");
//         continue;
//     }

//     console.log(rnd);
// } 