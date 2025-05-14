// primitive
//7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt



// const id = Symbol('123')   // Symbol
// const anotherId = Symbol('123')
// console.log(id === anotherId)


//const BigNumber = 23443253634354675869n    // bigInt


// Reference (Non Primitive)
// Array, Objects, Functions   // dataTypes function hoga


// const heros = ["shaktiman","naagraj" "doga"]

// let myObj = {
//     name: "shahrukh",        //object  //curly breses ke ander jo bhi values h vo obj h
//     age: 22,
// }


// const myFunction = function(){             // Function
//     console.log("Hello Shahrukh");
// }




// console.log(typeof myFunction);







// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//             memory uses

// Stack (Primitive)          //isme code ki copy milti h  usme changes kr skte h
// Heap (Non-Primitive)        // isme refrence(ref. mtlb jo bhi changes m krunga original value me hi hoga) milta h

// let myytname = "shahrukhkhanclass"

// let anothername = myytname
// anothername = "chaiaurcode"

// console.log(myytname);
// console.log(anothername);


let userOne = {
    email: "srk@gamil.com",
    upi: "user@ybl"
}

let userTwo = userOne


userTwo.email = "nk@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);




















