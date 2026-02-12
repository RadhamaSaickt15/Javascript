/*HOF=Higher Order Function
A Function that Accepts Another Function as an Argument (OR) Returns a function as a Result
*/
function greet(name){
    return `Hello! ${name}`
}
function processUser(fn){
    return fn("pci")
}

console.log(processUser(greet))


/*

✅ The HOF is:
👉 processUser 

Here:function processUser(fn)
fn is a function.
So processUser is a Higher Order Function.


🔹 What about greet?
function greet(name)
It only takes a normal value (name)

It returns a string

It does NOT take or return a function

So ❌ greet is NOT a HOF.
*/