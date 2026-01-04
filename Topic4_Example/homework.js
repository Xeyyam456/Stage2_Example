


// console.log("==========================================================");

// // 1
// let pet = "golden retriever";
// console.log(pet.toUpperCase());   

// console.log("==========================================================");

// // 2
// let question = "Can you solve this problem?";
// console.log(question.length);

// console.log("==========================================================");

// // 3
// let activity = "This game is boring";
// let newActivity = activity.replace("boring", "exciting");
// console.log(newActivity);


// console.log("==========================================================");

// // 4
// let headline = "Choose Your Adventure!";
// let extractedWord = headline.indexOf("Adventure");
// let spliceWord = headline.substring(extractedWord, extractedWord + "Adventure".length); 
// console.log(spliceWord);

// console.log("==========================================================");


// // 5
// let desserts = ["Ice Cream", "Pie", "Pudding"];
// desserts.push("Cake");
// console.log(desserts);


// console.log("==========================================================");

// // 6
// let cities = ["London", "New York", "Tokyo"];
// let includesParis = cities.includes("Paris");
// console.log(includesParis);


// console.log("==========================================================");

// // 7
// let cars = ["Sedan", "Coupe"]
// let trucks = ["Pickup", "SUV"]
// let vehicles = cars.concat(trucks);
// console.log(vehicles);

// console.log("==========================================================");

// // 8
// let dessertsFruits = ["Ice Cream", "Pie", "Pudding", "Cake"]
// let indexOfPie = dessertsFruits.indexOf("Pie");
// console.log(indexOfPie);


// console.log("==========================================================");

// // 9
// let word = "Technology";
// let charArray = word.split("").reverse().join("");
// console.log(charArray);
// console.log("==========================================================");

































// 1: Basic Closure
// Create a function greet that takes a name as a parameter and returns a function. The returned function should greet the person by name when called.


// const greet = (name) => {
//    return () => {
//         console.log(`Hello, ${name}!`);
//     }
// };

// const sayHello = greet("John");

// sayHello();



// 2: Closure to Create a Counter
// Write a closure function createCounter that returns a function. Every time the returned function is called, it should increment a counter and return the updated value.



// const createCounter = () => {
//     let count = 0;
//     const increment = () => {
//         count++
//         console.log(count);
//     }
//     return increment;
// }



// const counter = createCounter();

// counter();
// counter();
// counter();



// 3: Private Variables Using Closures
// Create a closure to create a bank account. The closure should allow you to deposit and withdraw money from the account but not access the balance directly.

// const createBankAccount = (initialBalance) => {   
//     let balance = initialBalance;



//     const deposit = (amount) => {
//         balance += amount;
//         console.log(`Deposited: ${amount} $.`);
//     };
//     const withdraw = (amount) => {
//         if (amount > balance) {
//             console.log("Error: Cixarilan mebleg balansdan boyuk ola bilmez.");
//         } else {
//             balance -= amount;
//             console.log(`Withdrew: ${amount} $.`);
//         }
//     };

//     const getBalance = () => {
//         // console.log(`Current Balance: ${balance} $.`);
//         return `Current Balance: ${balance} $.`;

//     };


//     return {
//         deposit,
//         withdraw,
//         getBalance

//     };
// }
// const myAccount = createBankAccount(100);

// myAccount.deposit(100);
// myAccount.withdraw(30);
// console.log(myAccount.getBalance());

// console.log("==========================")

// const anotherAccount = createBankAccount(50);

// anotherAccount.deposit(500);
// anotherAccount.withdraw(200);
// console.log(anotherAccount.getBalance());



// 5: Closure with Parameters
// Create a closure that accepts an initial value and then allows for an arbitrary number of subsequent value multiplications.


// const createMultiplier = (x) => {
//     let value = x;

//     return y => value * y
//     };


// const timesThree = createMultiplier(10);
// console.log(timesThree(3)); 
// console.log(timesThree(6)); 
// console.log(timesThree(10))


// 4: Closure with Multiple Functions
// Write a closure that keeps track of a running total. The closure should return an object with two methods: add (to add to the total) and reset (to reset the total).


// const createRunningTotal = () => {
//     let total = 0;  
//     return {
//         add: (amount) => {
//             total += amount;
//             console.log(`Added: ${amount}.`);
//         },
//         reset: () => {
//             total = 0;
//             console.log("Total reset");
//         },
//         getTotal: () => {
//             return total;
//         }   

//     };
// };
// const Total = createRunningTotal();
// Total.add(50);
// Total.add(25);
// console.log(Total.getTotal());
// Total.reset();
// console.log(Total.getTotal());
// Total.add(10);
// console.log(Total.getTotal());