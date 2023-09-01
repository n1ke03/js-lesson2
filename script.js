let number = 11;
let result = number % 2 == 0 ? "чётное" : "не чётное";
let resString = number + " является " + result;
console.log(number + " является " + result);
console.log(resString);


 x = +prompt("Введите число от 1 до 6");
 switch(x){
 case 2:
 case 4:
 case 6: alert("четное");
 break;
 case 1:
 case 3:
 case 5: alert("не чётное");
 break;
 default: alert("Вне диапазона");
 }