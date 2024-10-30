// const el =document.getElementById('greet')

// const pa = document.getElementsByClassName('hi')
// const pa = document.getElementsByTagName('p')

// const greet = document.querySelector("#greet")
// let test  = document.querySelector('.hi')
// let testAll  = document.querySelectorAll('.hi')
// console.log(testAll);

// Massivlar bilan ishlash

// 2
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function son(arg){
//     let res = []
//     let kon = 4;
//     for (const element of arg) {
//        res.push(element * kon);
//     }

//     return res;
// }

// console.log(son(arr));

// 3
// let arr = [ 1, 2, -3, 4, -5, -6];

// function sonArr(arg){
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (typeof arg.length == 'number' && arg.length > 0) {
//             sum++;
//         }
//     }
//     return sum
// }
// console.log(sonArr(arr));

// 4
// let arr = [0, 2, 3, 4, 5, 0, 6];

// function son(arg) {
//     let result = [];
//     let count = 0;

//     for (const element of arg) {
//         if (element === 0) {
//             count++;
//         } else {
//             result.push(element);
//         }
//     }

//     for (let i = 0; i < count; i++) {
//         result.push(0);
//     }

//     return result;
// }

// console.log(son(arr));

// 5
// let arr = [1, 2, 3, 4, 5, 1, 6, 7, 1, 8, 9, 1]
// let count = 0;

// function son(arg){
//     for (let i = 0; i < arg.length; i++) {
//             if (arg[i]== 1) {
//                 count++;
//             }
//     }
//     return count
// }

// console.log(son(arr));

// 7
// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [6, 7, 8, 9, 0];

// function son(arg1, arg2) {
//     let res = arg1.concat(arg2);

//     let newArray = [...new Set(res)];
 
//     return newArray;
// }  

// console.log(son(son(arr, arr1)));


// 8
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function son(arg) {
//     let juft = 0;
//     let toq = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0) {
//             juft++;
//         } else {
//             toq++;
//         }
//     }
//     return { juft, toq };
// }

// console.log(son(arr));


// 9
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function TureorFalse(arg){
//    let el = 3
//    for (let i = 0; i < arg.length; i++) {
//       if (arg[i] == 3) {
//         return true
//       }
//    }
//    return false
// }
// console.log(TureorFalse(arr));


// 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function son(arg){
//     let max = arg[0];
//     let min = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//           if (max < arg[i]) {
//             max = arg[i]
//           };
          
//           if (min > arg[i]) {
//             min = arg[i]
//           };
//     };

//     return {max, min};
// }
// console.log(son(arr));



// Obyektlar bilan ishlash//


// 11
// const car = {
//     name: 'mercedes',
//     color: 'black',
//     age: '2024'
// }

// let sort = Object.keys(car).sort();

// let sortCar = {};

// sort.forEach(key => {
//     sortCar[key] = car[key];
// });

// console.log(sortCar);



// 12
// const car = {
//     name: 'mercedes',
//     color: 'black',
//     age: '2024'
// }

// let keys = Object.keys(car);        
// let values = Object.values(car);    

// console.log(keys);
// console.log(values);


// 13
// const car = {
//     name: 'mercedes',
//     color: 'black',
//     age: '2024'
// }

// const john = {
//    name: 'John',
//    age: 99
// }

// let newObject = {...car, ...john}

// console.log(newObject);

// 15
// const john = {
//    name: 'John',
//    age: 99
// }

// const oldkey = 'age'

// const newkey = 'yosh'


// john[newkey] = john[oldkey];

// delete john[oldkey]

// console.log(john);



// String bilan ishlash

// 22
// let str = 'salom bolalar'

// let res = str.split('').reverse().join('');


// console.log(res);


// 23
// function enguxunsoz(arg) {
//     let arr = arg.split(' '); 
//     let max = ''; 

//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i].length > max.length) {
//             max = arr[i]; 
//         }
//     }

//     return max; 
// }

// let sentence = 'salom bolalar';
// let res = enguxunsoz(sentence); 
// console.log(res);


// 24
// let str = 'salom';
// let harf = 'a'; 
// let res = soz(str, harf);

// function soz(str, harf) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i]; 
//         if (str[i] === harf) { 
//             result += harf; 
//         }
//     }

//     return result; 
// }

// console.log(res); 


// 25
// function soz(str) {
//     return str.replace(/[0-9]/g, ''); 
// }
// let res = 'sa2lom1';
// let result = soz(res);

// console.log(result); 
