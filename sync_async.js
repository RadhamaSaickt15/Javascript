// ----------------------------1. Sync---------------------------------
/* */

console.log("sync Operation 1");
console.log("sync Operation 2");
console.log("sync Operation 3");


// --------------------------2.Async--------------------------------------


console.log("Async Operation 1");
setTimeout(()=>{console.log("Async Operation 2")},3000);
console.log("Async Operation 3");



//-----------------------------3.Call Back----------------------------------
 //Example : 1
 
function greet(name){
    console.log("Bholo "+ name)
}
function processUser(callback){
    callback("Radha Krishna ki Jay")
}
processUser(greet);


//Example :2
function fetchUserData(userId, callback){
    setTimeout(() => {
        if(userId){
            const user = {
                id: userId,
                name: "Radhamaa",
                email: "RadhaKrishn@gmail.com"
            };
            callback(null, user); // success case


        } else {
            callback(new Error('Invalid User ID')); // error case
        }
    }, 1000);
}


// Callback Usage
fetchUserData(1, (error, user) => {
    if (error){
        console.log("Error Fetching User:", error.message);
    }
    else {
        console.log("User:", user);
    }
});
