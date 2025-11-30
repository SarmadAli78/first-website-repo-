// let arr = [10, 20, 30, 40];
 
// arr.forEach((num) => {
//     console.log(num);
    
// });


// let arr1 = [1, 2, 3, 4];


// arr1.map((num)=>{
//     console.log(num * 2);
    
// });


// let arr2 = [1, 2, 3, 4, 5, 6];

// arr2.filter((num) => {
//        if(num % 2 === 0){
//          console.log(num);
         
//        }      

// });


// let arr3 = [5, 5, 10];

// let total = arr3.reduce((accu, curr)=> {
//     return accu + curr;
    
// });
// console.log(total);


// let arr4 = ["apple", "banana", "cat"];
 

// let toup = arr4.map((str)=> {
//    return str.toUpperCase()
    
// });

// console.log(toup);

// let arr5 = [2, 10, 8, 3, 12];


// let maxm = arr5.filter((num) => {
//        return num > 5 ;


// })

// console.log(maxm);


// let arr66 = [15, 3, 29, 8, 12];

// let maxar = arr66.reduce((num)=> {
//     return Math.max(num);

// });
 
// console.log(maxar);








// print only odd * 3 numbers with map() and condition..

// let arr = [2, 5, 8, 10, 3];

// let result = arr.map((num) =>{
//     return num % 2 !== 0 ? num * 3 : num;
    
// })

// console.log(result);






// Pehle filter() se sirf wo numbers nikaalo jo 10 se bade hain

// Phir map() se un sab ko 2 se multiply karo

// Phir reduce() se saare numbers ka total nikaalo



// let arr = [3, 10, 15, 20, 7, 2];
// let max = arr.filter( num => { return num > 10 });
// let mult = max.map(num => num * 2 )
// let total = mult.reduce((accur,curr) => {
//     return accur + curr ;
// })
// console.log(max);
// console.log(mult);
// console.log(total);



// let arr = ["apple","banana","Pakistannnn", "cat", "dog", "ant"];

// let longest = arr.reduce((accu, curr)=> {

//     if(curr.length > accu.length){
//         return curr;
//     } else {
//         return accu;
//     }
// },"");

// console.log(longest);


let arr = ["a", "b", "a", "c", "b", "a"];
let countA = arr.reduce((acc, curr) => {
    if(curr === "a"){
        return acc + 1;
    } else {
        return acc;
    }
}, 0);


console.log(countA);






















