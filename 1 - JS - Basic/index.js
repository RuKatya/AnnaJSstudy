// VARIABLES
// number
// x=3
// string
// y='something'
// boolean
// true/false

// console.log(typeof 3) //number
// console.log(typeof 3.14) //number

// NaN - не номер Not a Number
// let x = +prompt('number')
// console.log(x)
// undefined - не найдено
// null - не существует

//FUNCTIONS
//regular function
// function name(parameters) {
//     return parameters + 1
// }

// console.log(name('2'))

//anonymous function
// () =>{

// }

// setTimeout(()=>{

// },1000)

//arrow function
// const nameFun = (parameters) => {
//     return parameters + parameters
// }

// console.log(nameFun(1))

// LOOPS FUNCTIONS
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// let arr = [1, 2, 3, 4, 5]
// for (let i of arr) {
//     console.log(i)
// }

// let i = 0;
// while (i > 5) {
//     console.log(i++)
// }

// do {
//     console.log(++i)
// } while (i > 5)

//SWITCH CASE

// const x = 5;

// switch (x) {
//     case 1:
//         console.log('first')
//         break;
//     case 2:
//         console.log('second')
//         break;
//     case 3:
//         console.log('third')
//         break;
//     default:
//         console.log(`it is not 1, 2 or 3`)
// }

// const
// let
// var

// let a = 7, b = 5
// console.log(--a)
// console.log(a--)
// console.log(++a)
// console.log(a++)

// console.log(-a)
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b) //1.4
// console.log(a % b) //2

// const nameHanna = "Hanna"
// const age = 12
// console.log(`Youre name is ${nameHanna}`) //new variant
// console.log(`${nameHanna} is ${age} years old`)
// console.log("Youre name is" + " " + nameHanna) //the old variant

// alert('hello') //only ok
// prompt('say me your name') //get some value
// confirm('something') //true or false

// if (typeof nameHanna != 'string') {
//     console.log(`not string`)
// } else {
//     console.log(`string`)
// }

// let x = 5, y = '5'
//=  //присвоить
//==  //сравнение между значение
//=== //сравнение значение + формат (type)
// console.log(x == y)

// != not equal
// a && b //and
// a || b //or


// let a = 5, b = 1
// console.log(a += b) //a=a+b
// console.log(a -= b) //a=a-b
// console.log(a *= b) //a=a*b
// console.log(a /= b) //a=a/b

// let str = "hi"
// let name = "Anna"

// console.log(str += name) // str = str + name

// Read a temperature in Celsius from the user, and print it converted to Fahrenheit.
// Read a number from the user for distance and a number for speed and print the time. time = distance/speed

function calSpeed(dist, time) {
    console.log(`Distance (km): ${dist}`);
    console.log(`Time (hr): ${time}`);
    return dist / time;
}

console.log(calSpeed(5, 2))

function cTOf(Celsius) {
    // let cTemp = Celsius;
    // let cToFarh = cTemp * 9 / 5 + 32;
    let cToFarh = Celsius * 9 / 5 + 32;
    // let result = cTemp + ' 35 is' + cToFarh + 'x';
    let result = `${Celsius}c is ${cToFarh}f`;
    console.log(result);
}

cTOf(0)

const name = 'I am the best';
console.log(name);
