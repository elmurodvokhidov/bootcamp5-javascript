// const x = 4, y = 1;

// function chess() {
//     if (x == 1 && y == 1) {
//         console.log("Berilgan maydon QORA!")
//     }
//     else if (x % 2 !== 0 && y % 2 !== 0) {
//         console.log('Berilgan maydon OQ!')
//     }
//     else if (x % 2 == 0 && y % 2 == 0) {
//         console.log('Berilgan maydon QORA!')
//     }
//     else if (x == 1 && y % 2 == 0 || y == 1 && x % 2 == 0) {
//         console.log('Berilgan maydon QORA!')
//     }
//     else {
//         console.log('Berilgan maydon 2 xil rangda!')
//     }
// }

// chess();


// function cheese() {
//     console.log(this)
// }

// cheese()


// Object.prototype.nom = function () {
//     console.log('Bu shaxsiy prototype');
// }


// const obj = {
//     name: 'John',
//     age: 20,
//     job: 'driver',
//     meet: function () {
//         console.log(this.age)
//     }
// };

// const obj2 = {
//     name: 'Tim',
//     age: 22,
//     job: 'coder',
// }

// obj.meet.bind(obj2)()

// console.log(Object.values(obj));

// console.log(obj)

// let yangiObj = Object.create(obj);

// console.log(yangiObj)

// yangiObj.nom();



// const box = document.querySelectorAll('.box');

// box.style.width = '200px'
// box.style.height = '200px'
// box.style.backgroundColor = 'red'

// box[0].style.cssText = `
//     width: 200px;
//     height: 200px;
//     background-color: red;
// `
// box[1].style.cssText = `
//     width: 200px;
//     height: 200px;
//     background-color: blue;
// `
// box[2].style.cssText = `
//     width: 200px;
//     height: 200px;
//     background-color: yellow;
// `