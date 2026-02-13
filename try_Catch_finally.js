let a = 10;

try {
    if (a > 5) {
        console.log("Hey 1");
    } else {
        throw new Error("a is too Small");
    }
    }catch(error){
        console.log("Hey i got the Error:", error.message)
    }
    finally{
        console.log("Finished")
    }