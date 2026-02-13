/* Object= A Collection of Related Data Stored as KEY-VALUE Pairs */

//---------------------------1.Object---------------------

// const person={     // Here,  👉 Person is the Object
//     name:"Radhamaa",
//     Place:"Attapur",
//     Timings:"8:00 AM - 10:00 PM",
// }

// console.log(person.name)

//--------------------------2.Object Methods------------------

// 1.Object = 



// 2. This Keyword = " This is  a Special Keyword that Refers to the Object i.e Calling the Method"
const person1={
    firstName:"Radha",
    lastName:"Krishn", 
    fullName(){         // 👉 Here, the fullName() is the Object Method
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person1.fullName());