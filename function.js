function greet(){
    console.log("Hello World")
}
greet();


//1. Parameter
function greetings(day,name)
{
    console.log("Hey Hi!",day,"My Name is :",name)
}
greetings("Good Morning","Sai")

//2. Fuction Expression
const greet1=function(){
    console.log("Hello!")
}

greet1();
     //3.    Function Expression With Parameter
 const greet2=function(username){
    console.log("Hello!",username)
}        
greet2("Sai");



//4. Arrow Function

const add=(a,b)=>{console.log("Sum of Two Numbers:",a+b)}
add(3,6);

//5. Default Parameter == 👉 If a parameter has a default value, it’s safer to place it at the end.
 const add1=(b,a=10)=>{
    console.log("Sum of Two Numbers :",a+b)
 }
 add1(3);

 //6.Default Parameter in function
 const greet3= function(username="Krishna"){console.log("Hello!",username)};
 greet3()

 //7.Default Parameter in Arrow function
 const greet4=(username="Radhamaa")=>{
    console.log("Bholo", username)
 };
 greet4();