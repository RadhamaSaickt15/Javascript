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
