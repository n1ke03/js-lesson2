// function createRandom() {
//     return Math.round(Math.random() * 2) + 1;
// }
// x = createRandom();
// alert(x)

// for (i = i; i < 5; i++) {
//     console.log(createRandom())
// }


// function sum(a, b) {
//     console.log(a + b)
//     return a + b;
// }
// alert(sum(3, 5))


counter = 0
function hi(name, text="Привет"){
    counter++
    alert(name + ", " + text)
}
function showHiCount(){
    alert("Я поприветствовал " +counter + " человек")
}
hi("Андрей")
hi("Петя")
hi("Анастасия", "Здравствуйте")
showHiCount()
