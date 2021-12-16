//1. Ways to print in Javascript
        
//console.log('Hello World',4+6,"Another log");
alert("Are you Gitanjali?");

//document.write('This is  a document write.')
//2. Javascript console API
 
//console.warn("this is a warning.");
//console.error("This is an error.");
//3.Variables: Containers that stores data.
var number1=25
var number2=50
//console.log(number1+number2)
// 4. TYPES OF VARIABLES
//Numbers
var num1=12
var num2=24
//console.log(num1,num2)
//String
var str1="Gitanjali"
var str2="Mukeria"
//console.log(str1,str2)
//Objects

/*var marks={
    English:78,
    Hindi:99,
    Maths:98,
    Phy:79,
    chem:89
}

console.log(marks)

var a=true;
var b=false;
console.log(a, b)
*/
//Operators

var a=100;
var b=20;
/*console.log("a+b = ",a+b)
console.log("a-b = ",a-b)
console.log("a*b = ",a*b)
console.log("a/b = ",a/b)*/

//Assignment Operator
var c=b;
//c=+2;
c=-2;
//console.log(c)

//Comparison Operators

var x=12;
var y=32;
/*console.log(x==y)
console.log(x>=y)
console.log(x<y)
console.log(x>y)*/

//Logical Operators
//OR operator
/*console.log(true||true)
console.log(false||false)
console.log(true||false)
console.log(false||true)
console.log(true||false)
*/
//And operator
/*console.log(true&&true)
console.log(false&&alse)
console.log(true&&false)
console.log(false&&true)
console.log(true&&false)
*/
//NOT Operator
/*console.log(!true);
console.log(!false);*/

//Function
 //DRY: Do not repeat yourself.
function avg(a,b){
    c=(a+b)/2
    return c
}

c1=avg(96,78)
c2=avg(89,56)

//console.log(c1 ,c2)


//Arrays

Array =[1,2,3,4,5,"Geet",6,7]
//console.log(Array)

//Blue:Number
//Black:String


// Conditionals

/*age=100
if(age<18){
    console.log("You are a kid")
}
else if(age>18)
{
    console.log("You are not a kid")
}
else if(age>50){
    console.log("You are a senior citizen")
}
else{
    console.log("You are a baby.")
}*/

//For loop

var arr=[1,2,3,4,5,6,7]
/* console.log(arr)
*/
/*for (var i=0;i<arr.length;i++){
    console.log(arr[i]);

}


arr.forEach(function(element){
    console.log(element);
})*/

/*const m=21
m+=2;
console.log(m)*/
/*j=0;
while(j<arr.length)
{
    console.log(arr[j])
    j++;

}*/
//j=0;
/*j=8;
do{
    console.log("Heya World!")
   console.log(arr[j])
   j++;
}while(j<arr.length)
*/

/*var arr1=[1,2,3,4,5,6,7]
for(var i=0;i<arr1.length;i++){
    if(arr1[i]==2)
    {
        continue;
        //break;
    }
    console.log(arr1[i])

}*/

//Array methods

/*var array=[1,"Gappo","sappo","ram","kukku",2]
array.pop(1);
console.log(array)
array.push(2)
console.log(array)

array.shift();
const newLen=array.unshift("Akku")
console.log(array);(
console.log(newLen);
console.log(array);*/


//String

/*var  myLovelyString = "Ram is a good boy,Ram is 12 year old.";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("Ram"));
console.log(myLovelyString.lastIndexOf("Ram"))
console.log(myLovelyString.slice(0,4))
console.log(myLovelyString.slice(12,36))
d=myLovelyString.replace("Ram","Shyam")
console.log(d,myLovelyString)*/

//Date
/*
 myDate=new Date();

 console.log(myDate.getDay());
 console.log(myDate.getTime());
 console.log(myDate.getFullYear());
 console.log(myDate.getMonth());
 console.log(myDate.getMinutes());
 console.log(myDate.getDate());
 console.log(myDate.getHours());

 */

 // Data manipulation

/*let elem= document.getElementById('click').click;
console.log(elem);
let elemClass = document.getElementsByClassName("Container")

console.log(elemClass);
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")


tn=document.getElementsByTagName('div');
console.log(tn)
createdElement=document.createElement('p');
createdElement.innerText="This is a created para";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold para";
tn[0].replaceChild(createdElement2,createdElement);*/

//removeChild(element);   --->removes an element

//Selecting using query


sel=document.querySelector('.container')
console.log(sel)
sel=document.querySelectorAll('.container')
console.log(sel)

function clicked(){
    console.log("The button is clicked.")
}
window.onload=function onload(){
    console.log("The window is loaded")
}


//Events in javascript

/*FirstContainer.addEventListener('click',function(){
    console.log("Click hua")

})

FirstContainer.addEventListener('mouseover',function(){
    console.log("Mouse on Container")

})
FirstContainer.addEventListener('mouseout',function(){
    console.log("Mouse out of Container");

})
*/
let prevHtml=document.querySelectorAll('.Container')[1].innerHTML;
FirstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.Container')[1].innerHTML=prevHtml;
     console.log("Mouse up when clicked on Container")
})

FirstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.Container')[1].innerHTML="<b>We have clicked</b>";
     console.log("Mouse down when clicked on Container");
})


// Arrow Functions
/*
function add(a,b){
    return a+b;
}
*/
add=(a,b)=>{
    return a+b;
}

//SetTimeout and Setinterval

/*logKaro=()=>{
    console.log("I am your log")
}
clr=setInterval(logKaro,2000);
//use clearInterval/clearTimeout to cancel setInterval/setTimeout
setTimeout(logKaro,2000);*/


//localstorage


//JSON

obj={name:"harry",length:1, a:{this:'tha"t'}}
jso=JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)

parsed=JSON.parse('{"name":"harry","length":1,"a":{"this":"that"}}')
console.log(parsed);
//Json only supports double qoutes

