let arr = [3,5,6,8]

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i]%2 === 0){
//     console.log(arr[i])
//   }
// }














// let arr = [3,5,6,8]
// let total = 1
// for(let i = 0; i < arr.length; i++){
//    total = total * arr[i]
// }
// console.log(total)








// "use strict"

// let str = 'mushrraf@gmail.com'
// let str2 = 'Mushrraf'

// let spl = str.split('@')
// let dd = spl[0].length
// let len = spl[0]
// // console.log(len)
// let ss = 73788237.padStart(3, '*')

// console.log(ss)
// // padStart()










// if(str.includes('deshwali')){
//   console.log(str.replace('deshwali', 'bawla'))
// }else{
//   console.log('not found')
// }

// let i = 0;
// let newStr = "";
// for(let value of str){
//   // console.log(value)
//   //  newStr = ''
//   if(i % 2 == 0){
//     // console.log('true')
//     // console.log(newStr.concat(value.toUpperCase()))
//     newStr = newStr +" " +value.toUpperCase()
//     // newStr.concat(value.toUpperCase())
//     // console.log('-----',newStr)
//     // i++;
//   }else{
//     // console.log('false')
//     // console.log(newStr.concat(value.toLocaleLowerCase()))
//     // newStr.concat(value.toLocaleLowerCase())
//     newStr = newStr+" "+value.toLocaleLowerCase()

//   }
//   i++;
// }
// console.log(newStr)



// console.log(str.split(' ')
// )












// let wordIn = str.includes('khan')

// wordIn ? console.log('yes') : console.log('no')




// console.log(str.slice(3,7))






















// let number = "96492"

// console.log(number.padStart(10, '*'))
// console.log(number.padEnd(10, '*'))


// for(let i = 5; i >= 0; i--) {
//   var str = ''
//   str = '$'.repeat(i)
//   str = '#'.repeat(i)
//   // console.log('$'.repeat(i))
//   // console.log('#'.repeat(i))

//   console.log(str)
// }







// let name = 'mk'
// let last = 'khan'
// let age = '21'

// console.log(name.concat(last,age))














// let str = 'deshwali'
// let newStr = str.toUpperCase()
// console.log(str.toUpperCase() == newStr)













// let str = " My name is khan   "
// let allLength =str.length
// console.log(allLength)

// let trim = str.trim().length
// let trimStart = str.trimStart().length
// let trimEnd = str.trimEnd().length
// console.log('bothside:',trim)
// console.log('strt:',trimStart)
// console.log('trimEnd:',trimEnd)


















// let num = 1;

// while(num <= 10){
//  console.log(num * 2)
//   num++
// }









// let arr = [3, 4]

// arr.map((a)=>{

//     for(let i=0; i<arr.length; i++) {
//       console.log("*")
//     }
//     console.log('<br>')
// })































// let unValue = true
// console.log(/6 ** 2)































// let user = new function() {
//   this.name = "John";
//   this.isAdmin = false;
// }


// console.log(user.name)

// let user = {
//   names:'mk',
//   age:21
// }

// let emp = {}

// for(let key in user) {
//   emp[key] = user[key]
// }
// emp.age = 33
// console.log(user)
// console.log(emp)


















// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };


// multiplyNumeric(menu,2);

// function multiplyNumeric(obj, mult){
//   for (let key in obj){
//     if(typeof obj[key] == 'number'){
//       menu[key] = obj[key] * mult;
//     }
//   }
// }


// console.log(menu)










// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

















// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for(let salary in salaries){
//   sum += salaries[salary]
//   // console.log(salaries[salary])
// }
// console.log(sum)



















// function fun1(){
//   return {
//     Bar: 'hello'
//   };
// }
// function fun2(){
//   return {
//     Bar: 'hello'
//   }
// }
// console.log(fun1())
// console.log(fun2())
















// console.log(2*2*2*2*)




// for(let i = 0; i < 2; i++) {

// }



// [1, 2].forEach(()=>{
  
// })
















//  let ask = (question, yes, no)=> {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );s












// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Hello!");
//   };

// } else {

//   welcome = function() {
//     alert("Greetings!");
//   };

// }

// welcome(); // ok now
























// function sayHi() {   // (1) create
//   console.log("Hello" );
// }

// let func = sayHi;    // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello















// let subValue = 1;
// function pow(a, b){
//   for(let i = 0; i < b; i++){
//     subValue = subValue * a
//   }
// }
// pow(1, 100) 
// console.log(subValue)












// function bigNum(a, b) {
//   return a < b ? a : b
// }
// console.log(bigNum(5,3))














// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// function checkAge2(age) {
//   let ageChecking = age > 18 ? true: prompt('Did parents allow you','')
//   console.log(ageChecking)
// }

// checkAge2(14)









// let browser = 'Opera'
// if(browser == 'Edge') {
//   console.log( 'Edge')
// }else if(browser == 'Chrome' || browser == 'Firebox' || browser == 'Safari' || browser == 'Opera'){
//   console.log('Support')
// }else {
//   console.log('ok')
// }

















// let map = new Map();

// map.set('1', 'str1');   
// map.set(1, 'num1');     
// map.set(true, 'bool1'); 

// map[s] = 2
// console.log( map.get(1) ); 
// console.log( map.get(true) ); 
















// const user= {
//   firstName: "John"
// };
    
// let id1 = Symbol("id");
// let id2 = Symbol('id');

// user[id1] = 'mk';
// user[id2] = 1234;

// console.log(user[id1], user[id2])         ////// mk 1234






















// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// function groupById(array){
//    array.reduce( ( obj, value ) => { 
//     obj[value.id] = value;
//     return obj;
//   } , {} )
// }
// let usersById = groupById(users);



















// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); 
















// function sortByAge(arr) {
//   // console.log(arr)
//   return arr.sort((a, b) => a.age - b.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// console.log(sortByAge(arr));










// arr.map((data) => {
  
//   let obj = {}

//   obj.name = data.name;
//   obj.age = data.age.sort()
//   // console.log(data.age)

// })










// sortByAge(arr);


























// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];



// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log(usersMapped)



















// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item);
// console.log(names[0])















// function _(age){
//     return age >= 19;
// }

// console.log(_(2))











// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // for each item of arr
//     partialSum += item; // add it to partialSum
//     maxSum = Math.max(maxSum, partialSum); // remember the maximum
//     if (partialSum < 0) partialSum = 0; // zero if negative
//   }

//   return maxSum;
// }

// console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([-1, -2, -3]) ); // 0



















// function getMaxSubSum(arr) {
//   let maxSum = 0; // if we take no elements, zero will be returned

//   for (let i = 0; i < arr.length; i++) {        // length = 4, i = 
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {        // j = 3
//       sumFixedStart += arr[j];                    // sumFixedStart = sumFixedStart + 2
//       maxSum = Math.max(maxSum, sumFixedStart);   // maxSum = 2
//     }
//   }

//   return maxSum;
// }

// console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 5













// let a = {}
// let b = {}
// console.log(a == b)
















// let arr = [1, 2, 3, 4, 5];

// arr[99999] = 'sk'
// console.log(arr.length)
// console.log(arr)



// arr.length = 0; // truncate to 2 elements
// console.log( arr.length ); // [1, 2]
// console.log( arr ); // [1, 2]

// arr.length = 5; // return length back
// console.log( arr[3] ); // undefined: the values do not return











// let fruits = [];
// fruits[1233] = "Apple";

// console.log( fruits[1] ); // 124












// let arr = ["Apple", "Orange",2, "Pear"];

// for (let key in arr) {
//   console.log( arr[key] ); // Apple, Orange, Pear
// }


















// let myAr = ['Mk', {name:'mk'}, true, function(){return 'mk'}]
// console.log(myAr[myAr.length - 1])


// let fruits = ["Apple", "Orange", "Plum"];

// // same as fruits[fruits.length-1]
// console.log( fruits.at(-1) ); // Plum














// console.log((Math.random() * 11))









// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// console.log( random(1, 5) );
// console.log( random(1, 5) );
// console.log( random(1, 5) );















// console.log(6.35.toFixed(1))













// let num = 3.52;
// console.log( Math.round(num * 458.3) );









// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     console.log(typeof obj[key])
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// console.log(menu)

















// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


// function multiplyNumeric(obj) {

//   for(key in obj){
    
//     if(typeof obj[key] == 'Number'){
//       obj[key] *= 2;
//     }
//   }
  
  // let mul = Object.values(menu).forEach((a)=>{
    //   let check = Number.isInteger(a)
    
    //   console.log(Number.isInteger(a) ? a * 2:a)
    //   // return a * 2
    // })
  // }
  // multiplyNumeric(menu);
  // console.log(menu)

// console.log(menu)










// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let Objvalue = Object.values(salaries)
// let sum = Objvalue.reduce((a,b)=>{
//   return a + b
// })
// console.log(sum)




















// let a = 'ab';
// let b = 'b  k';

// if(a > b){
//   console.log('a bigr')
// }else{
//   console.log('b biger')
// }
// console.log( Boolean(a) ); // false
// console.log( Boolean(b) ); // false

// let b = "0";
// console.log( Boolean(b) ); // true

// consle.log(a == b); // true!










// const newArray = [2,3,5, 6, 7, 8,9]                                   //// filter

// const nn = newArray.filter((ele, inde,arr)=>{
//   return ele % 2 == 0;
//   // console.log(ele)
//   // console.log(inde)
//   // console.log(arr)

// })
// console.log(nn)













// function Login(myName){
//   return new Promise(function(resolve, reject){
//     if(myName == 'mk'){
//       resolve('Login Successful');
//     }else{
//       reject('Login Failed')
//     }
//   })
// }


// Login('mkd')
// .then((data) => {
//   console.log(data)
// })
// .catch((err) => {
//   console.log(err)
// })

// console.log('second')




















// const users = [
//   {
//     name: 'Chris',
//     age: 33,
//   },
//   {
//     name: 'Yaatree',
//     age: 2,
//   },
// ];

// for(let key in users){
//   console.log(users[key])
// }
// users.forEach((user) => {
//   // console.log(user)
// })

















// const user = {
//   name: 'Chris',
//   age: 33,
// };
// const { age :ok} = user;
// console.log(ok);
// // 33





















/*function PrototypicalGreeting(greeting = "Hello", name = "World") {
    this.greeting = greeting
    this.name = name
  }
  
  PrototypicalGreeting.prototype.greet = function() {
    return `${this.greeting}, ${this.name}!`
  }
  
  const greetProto = new PrototypicalGreeting("Hey", "folks")
  console.log(greetProto.greet())




  

  class ClassicalGreeting {
    constructor(greeting = "Hello", name = "World") {
      this.greeting = greeting
      this.name = name
    }
  
    greet() {
      return `${this.greeting}, ${this.name}!`
    }
  }
  
  const classyGreeting = new ClassicalGreeting("Hey", "folks")
  
  console.log(classyGreeting.greet())*/














// let myAr = [1,3,4,5,6,7,8,9,10]

// let okk = [...myAr]

// console.log(okk[1])


















// let myAr = [2, 4,5, 7, 9]

// let nw = myAr.filter(element=>element%2 == 0)
// console.log(nw)









// for(let i=1; i<=10; i++) {
//     console.log(i*2);
// }









// let str = 'Hi i am here. I am attending a workshop.'


// let res = str.replace(/am/g,'Hello')
// console.log(res)









// let str = 'Hi i am here. I am attending a workshop.'

// let regx = /w/

// console.log(str.match(regx))







// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/gi);
// console.log(result)	////// ain,AIN,ain,ain














/*let dt = new Date()
console.log(dt)

dt.setHours(1)
// dt.setMinutes(8)
// dt.setSeconds(51)

let hours = dt.getHours()
let minutes = dt.getMinutes()
let seconds = dt.getSeconds()

console.log(hours, minutes, seconds)

hours12 = 12 < hours ? hours - 12 : hours

let time
time = hours12 < 10 ? '0' + hours12 + ':' : hours12 + ':';
time += minutes < 10 ? '0' + minutes + ':': minutes + ':';
time += seconds < 10 ? '0' + seconds : seconds;


let h = hours < 12 ? 'PM' : 'AM';

console.log(time + ' ' + h)*/




















// let myObj = {
//     name:'mk',
//     age: 36,
// }

// for(key in myObj) {
//     console.log(myObj[key])
// }











// var myVar = 4

// switch (myVar){
//     case 1:
//         console.log('hello 1')
//         break;
//     case 2:
//         console.log('hello 2')
//         break;
//     case 4:
//         console.log('hello 4')
//         break;
//     default:
//         console.log('false')
//         break;
// }











// var a = '3'
// var b = 4;

// console.log(+a + b)















// var myFun = function(name){
//     alert(name)
// }

// myFun(8)











// var user = prompt('Enter your username')

// var htag = document.querySelector('h1')

// htag.textContent = user
// alert(user)










// var shirt = document.querySelector("html")
// alert(shirt)
// shirt.onclick = function() {
//     var att = shirt.getAttribute('src');
//     alert(att)
    // if(att == 'img/blue.png'){
    //     shirt.setAttribute('src','img/brown.png')
    // }else{
    //     shirt.setAttribute('src', 'img/green.png')
    // }

// }
















// var myTag = document.querySelector('html')
// var h1Tag = document.getElementsByTagName('h1')
// console.log(h1Tag)

// myTag.onclick = function(){
//     // h1Tag.textContent = "Js change content in h4 tag";
//     alert('This is html page')
// }