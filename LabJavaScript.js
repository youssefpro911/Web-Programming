// function welcome() {
//     return "Welcome"; 
// }
// console.log(welcome());

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(1, 3));

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply(5, 5));

// var w = () =>{
//     console.log("This a function");
// }

// w()

// function callAnotherFn(anotherFn){
//     console.log("This ia Another Function");
//     anotherFn()
// }

// callAnotherFn(() =>{
//     console.log("This is a Another function of Anotherfunction");
// })


// var arr = [100,200,300,400,500]
// console.log(arr[0])

// for(var i =0; i <= arr.length; i++){
//     console.log(arr[i]);
// }

// arr.splice(1,2, "name")
// console.log(arr)

// arr.shift()
// console.log(arr)
// arr.unshift(40)
// console.log(arr)


// ------------------------------------------------------------------------------------


// var arr1 = [1,3,5]
// var arr2 = [2,4,6]
// var newarr = arr1.concat(arr2)

// var starArr = ["welcome", "sara", "and", "Youssef"]
// var str = starArr.join()
// console.log(str)

// for(var i = 0; i<starArr.length; i++){
//     console.log9=(starArr[i] + 1)
// }

// starArr.forEach(function(element){
//     console.log(element)
// })

// for(var element of starArr){
//     console.log(element)
// }

// var obj1 = document.getElementById("first")
// console.log(obj1)

// var obj2 = document.getElementsByClassName("second")[1]
// console.log(obj2)

// var obj3 = document.getElementsByTagName("h2")[3]
// console.log(obj3)

// var obj4 = document.querySelector("#flex-container")

// obj1.innerHTML = "hello, <img src='background.jpg width= 70'>"

// obj4.style.background = "white"

// var obj5 = document.getElementsByTagName("input")[0]
// obj5.setAttribute("placeholder", "name")
// obj5.setAttribute("value", "Youssef")

// var btn = document.getElementsByTagName("button")[0]
// btn.addEventListener("click", function(){
//     alert('hiii')
// })

// var object1 = {
//     firstName: "Ranna", age: 20,
// }

// console.log(object1)

// ------------------------------------------------------------------------------------

// const PI = 3.14159
// let radius;
// let circumferance;

// document.getElementById("mysubmit").onclick = function(){
//     radius = document.getElementById("mytext").value;
//     radius = Number(radius);
//     circumferance = 2 * PI * radius;
//     document.getElementById("myh3").textContent = circumferance + "cm"

// }

// ------------------------------------------------------------------------------------

// const decreaseBttn = document.getElementById("dec");
// const resetBttn = document.getElementById("res");
// const increaseBttn = document.getElementById("inc");
// const countLabel = document.getElementById("countLable");
// let count = 0;

// increaseBttn.onclick = function(){
//     count++
//     countLabel.textContent = count;
// }

// decreaseBttn.onclick = function(){
//     count--
//     countLabel.textContent = count;
// }

// resetBttn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }

// ------------------------------------------------------------------------------------

// const genrateBttn = document.getElementById("gen");
// const resetBttn = document.getElementById("res");
// const countLabel = document.getElementById("countLable");
// let randomNum;
// const min = 1;
// const max = 100;

// genrateBttn.onclick = function(){
//     let randomNum = Math.floor(Math.random() * (max - min )) + min;
//     countLabel.textContent = randomNum;
// }

// resetBttn.onclick = function(){
//     let randomNum = 0;
//     countLabel.textContent = randomNum;
// }

// ------------------------------------------------------------------------------------

// const Mycheckbox = document.getElementById("mycheckbox");
// const VisaBtn = document.getElementById("VisaBtn");
// const MasterBtn = document.getElementById("MasterCardBtn");
// const PaypalBtn = document.getElementById("PaypalBtn");
// const mysubmit = document.getElementById("mysubmit");
// const subResult = document.getElementById("sybResult");
// const pyamentResult = document.getElementById("pyamentResult");

// mysubmit.onclick = function(){

//     if(Mycheckbox.checked){
//         subResult.textContent = " You are subscribed";
//     }else{
//         subResult.textContent = " You are not subscribed";
//     }

//     if(VisaBtn.checked){
//         pyamentResult.textContent = "You are paying with Visa";
//     }else if(MasterBtn.checked){
//         pyamentResult.textContent = "You are paying with MasterCard";
//     }else if(PaypalBtn.checked){
//         pyamentResult.textContent = "You are paying with Paypal";
//     }else{
//         pyamentResult.textContent = "You are not selecting payment type";
//     }
// }

// ------------------------------------------------------------------------------------

