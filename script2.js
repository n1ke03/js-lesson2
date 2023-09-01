// let x = +prompt("сколько нужно почистить?")
// let i = 0 // Кол-во почищенных картошин

// while(i < x){
//     i++;
//     console.log("я почистил " + i + " картошку ")
// }

let sum = +prompt("сколько хочешь отложить?");
let mounth = +prompt(" Сколько месяцев? ");
let i = 1;
let resultSum = 0;


while(i<=mounth){
    resultSum = resultSum + sum
    i++
  
   if(i % 2 == 0){
    resultSum -= 100
   }
   console.log(resultSum)
}