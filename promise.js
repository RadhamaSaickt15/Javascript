/* 🟢 Official Simple Definition:“A Promise is a JavaScript object that represents the eventual completion (success) or failure (error) of an asynchronous operation and its resulting value.”  


 🟢 Explained Simply:

JavaScript object → it’s something we can store in a variable

Eventual completion → it will finish later (not immediately)

Success / failure → it either resolves with data or rejects with an error */


   
   // 1️⃣ Create a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // try changing this to false and see what happens

    if(success){
        resolve("Yay! Everything worked!"); // ✅ success
    } else {
        reject("Oops! Something went wrong!"); // ❌ error
    }
});

// 2️⃣ Use the Promise
myPromise
    .then((message) => {
        console.log("Success:", message); // runs if success
    })
    .catch((error) => {
        console.log("Error:", error); // runs if error
    });
