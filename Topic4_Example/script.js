// var score = 100



// if (score >= 90 && score<=100) {
//     console.log("A");

// }
// else if (score >= 80 && score <= 89) { 
//     console.log("B");

// } else if (score >= 70 && score <= 79) {
//     console.log("C");

// } else if (score >= 60 && score <= 69) {
//     console.log("D");

// } else if (score >= 50 && score <= 59) {
//     console.log("E");

// } else if (score > 100) {
//     console.log("1-100 araliginda eded daxil edin");

// }
// else {
//     console.log("Kesildiz");

// }




// var fox=2
// var animal="fox"

// if(fox===1){
//     console.log(`${fox}  ${animal}`);

// }
// else if(fox>1){
//     console.log(`${fox} ${animal}s`);

// }


// var user = prompt("Who's there?");
// if (user === null) {
//     console.log("cancelled");
// }
// else if (user != "Admin" || "admin") {
//     var password = prompt("Password?");
//     if (password == null || password !="1234") {
//         console.log("cancelled");
//     }
//     else if (password == "1234" && user=="Admin" || user=="admin") {
//         console.log("welcome Admin.");
//     }

// }
// else {
//     console.log("I don't know you");
// }




// let arr1 = [1, 2, 3];
// let arr2 = [20,30,1];


// let arr3 = arr1.concat(arr2);
// console.log(arr3);



// var student_list = ["John", "Marry", "Ali", "Sophia"]

// var studentName = "John"

// let checkStudent = student_list.includes(studentName)

// if (checkStudent) {
//     console.log(`${studentName} is student`);
// } else {
//     console.log(`${studentName} is not student`);
// }




// let list=["John","Katy","Simpson"]


// let lastIndexValue=list.length-1
// let firstIndexValue=0

// console.log(`${list[firstIndexValue]}  is first student in the class`);

// console.log(`${list[lastIndexValue]}  is last student in the class`);




// var list1 = [7, 9, 0, -2]
// var list2 = [[1],3]
// var result1=list1.slice(0,1)
// console.log(result1[0]);
// var result2=list2.slice(0,1)
// console.log(result2[0]);





// var items = ["water", "tea", "milk", "juice"];



// var checkItems = items.indexOf("milk")

// if (checkItems != -1) {


//     console.log(`index nomresi: ${checkItems}`);

//     var newItems = items.splice(checkItems, 1, "almond-milk")

//     console.log(items);
// } else {
//     console.log(checkItems);

//     console.log("movcud deyil");

// }



// // result→ ["water", "tea", "almond-milk", "juice"]



// TASK 4.2

// var arr = [1, 2, 3, 4, 5];


// if(arr.length >3){
//     arr.pop()
//     console.log(arr);

// }else{
//     arr.push(6)
//     console.log(arr);

// }


// TASK 4.3

// let arr = [1, 2, 4, 5, 6, 0, 9, 7, 77]


// let findNumber = 0
// let check = arr.indexOf(findNumber)



// if (arr.includes(check)) {
//     console.log(arr);
//     console.log(`${findNumber} reqemi ${check}-ci indexde yerlesir`);
//     arr.splice(5, 1)
//     console.log(arr);
//     console.log(`${check}-ci indexdeki ${findNumber} reqemi arraydan silindi`);

// } else {
//     console.log("Array listi", arr);
//     console.log(`${findNumber} reqemi arrayda movcud deyil`);
// }



// let Array = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < Array.length; i++) {
//   sum += Array[i];
// }
// console.log(sum);


// let Array = [3, 7, 2, 8, 5]

// let maxElement = Array[0];

// for (let i = 1; i < Array.length; i++) {   
//     if (Array[i] > maxElement) {
//         maxElement = Array[i];
//     }
// }

// console.log("En boyuk element:", maxElement);




// let word = "hello"
// let reversedWord = ""
// // debugger;

// for (let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
// }   
// console.log(reversedWord);





// let number = 18;

// let isPrime = true;


// if (number == 2) {
//     console.log(`${number} ne sadedir nede murekkeb.`);
//     isPrime = false;

// } else if (number < 1) {
//     console.log("Eded 1 den kicikdir");
//     isPrime = false;

// } else {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             console.log(`${number} murekkeb ededdir.`);
//             isPrime = false;

//             break;
//         }
//     }
//     if (number % 2 !== 0) {
//         console.log(`${number} sade ededdir.`);
//     }
// }

// console.log(`isPrime: ${isPrime}`);





//1 Given an array of numbers, return a new array with the square of each number.
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(function(num) {
//     return num ** 2;
// });
// console.log(squares); 

// console.log("------------------------");  



// //2 Print each element of an array multiplied by 2
// numbers.forEach(function(num) {
//     console.log(num * 2);
// });
// console.log("----------------------");


// //3 Sort an array of numbers in ascending order.
// let unsortedNumbers = [5, 2, 9, 1, 5, 6];

// let sortedNumbers = unsortedNumbers.sort(function(a, b) {
//     return a - b;
// }); 
// console.log(sortedNumbers);

// console.log("----------------------");

// //4 Return only the even numbers from an array.
// let mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = mixedNumbers.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNumbers);

// console.log("----------------------");



// //5 Find the sum of all numbers in an array.
// let sumOfNumbers = mixedNumbers.reduce(function(sum, current) {
//     return sum + current;
// }, 0);
// console.log(sumOfNumbers);
// console.log("----------------------");

// //6 Find the first number greater than 5 in an array.
// let firstGreaterThanFive = mixedNumbers.find(function(num) {
//     return num > 5;
// }); 
// console.log(firstGreaterThanFive);
// console.log("----------------------");

// //7 Create an array of length 5 filled with 0.
// let filledArray = new Array(5).fill(0);
// console.log(filledArray);
// console.log("----------------------");


// //8 Check if there is at least one negative number in the array.
// let hasNegative = mixedNumbers.some(function(num) {
//     return num < 0;
// });
// console.log(hasNegative);


// console.log("----------------------");




// //9 Check if all elements in the array are positive.


// let arr = [1, 2, 3, 4, 5, 6];

// let allPositive = arr.every(function(num) {
//     return num > 0;
// });
// console.log(allPositive); 



// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,

//     getAge: function() {
//         const currentYear = new Date().getFullYear();

//         console.log(`Car age: ${currentYear - this.year} years`);
//     },
//     getInfo: function() {
//         console.log(this.make, this.model, this.year);
//     }
// }

// car.getAge();
// car.getInfo();






// 2. Advanced Cars Array Create an array of car objects. Tasks: - Filter cars newer than 2020 - Map only make and model - Calculate the average production year


// const Cars=[
//     {
//         make: "Toyota", 
//         model: "Camry",
//         year: 2020
// },      
//     {
//         make: "Hyundai",
//         model: "Elantra",
//         year: 2014
// },
//     {
//         make: "Opel",
//         model: "Astra",
//         year: 2010
// },
//     {
//         make: "Nissan",
//         model: "Sunny",
//         year: 2005
// }
// ]

// const filteredCars=Cars.filter((car)=>{
//     return car.year>2010
// })  

// console.log("Filtered Cars:",filteredCars); 

// const mappedCars=Cars.map((car)=>{
//     return {make:car.make,model:car.model}

// })

// console.log("Mapped Cars:",mappedCars);

// const totalYear=Cars.reduce((sum,car)=>{
//     return sum+car.year/Cars.length
// },0)

// console.log("Average Production Year:",Math.round(totalYear));




// console.log("-----------------------------------------------")
// console.log("Filtirlenmis list");
// console.log("-----------------------------------------------")


// const filterList=filteredCars.map((car)=>{
//     console.log(`${car.make} ${car.model} ${car.year} year`);
// })


// console.log("-----------------------------------------------")
// const listcars=Cars.map((car)=>{
//     console.log(`${car.make} ${car.model} ${car.year} year`);
// })
// console.log("-----------------------------------------------")




// const person = {
//     firstName: "Xeyal",
//     lastName: "Hesenzade",
//     age: 25,
//     address: {
//         street: "Eli Isazade 8",
//         city: "Baku",
//         country: "Azerbaycan"
//     },
//     getFullAddress: function() {
//         // return `${this.address.street}, ${this.address.city}, ${this.address.country}`;
//         console.log(`${this.address.street}, ${this.address.city}, ${this.address.country}`)
//     }

// };

// // console.log(person.getFullAddress());
// person.getFullAddress();


// const user = {
//     name: "Xeyyam",
//     city: "Baku",
//     info: function() {
//         console.log(`My name is ${this.name} I live in ${this.city}.`);
//     },

//     updateCity: function(newCity) {
//         this.city = newCity;
//     }   


// };
// user.info();
// user.updateCity("Aghdam");
// user.info();

// let a="John"
// let b=20
// let c=10

// console.log(a+b+c);



// function Car (brand,model){
//     this.brand=brand
//     this.model=model

//     this.describe=()=>{
//         console.log(`my car ${this.brand} ${this.model}`);
//     }
// }

// const car1=new Car("Tesla","Model 3")
// car1.describe()
// const car2=new Car("BMW","X5")
// car2.describe()



// function howManydays(month){
//   switch (month){
//     case 2:  return 28;
//     case 4:
//     case 6: 
//     case 9:
//     case 11: return 30;
//     default: return 31;
//   }
// }
// console.log(howManydays(9)); // 30
// console.log(howManydays(2)); // 28
// console.log(howManydays(4)); // 30
// console.log(howManydays(12)); // 31




// function padIt(str,n){
//     for(let i=0;i<n;i++){
//         if(i%2===0){
//             str="*"+str
//         }else{
//             str=str+"*"
//         }
//     }
//     return str
//     // console.log(str);
// }




// padIt("ohyww",14)   
// console.log(padIt("ohyww",14));   




// let person1 = {
//   name: "Alice",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// let person2 = {
//   name: "Bob"
// };


// person1.greet.call(person2)





// let car1 = {
//   brand: "Toyota",
//   describe: function(speed, color) {
//     console.log(`${this.brand} is going ${speed} km/h and it is ${color}`);
//   }
// };

// let car2 = {
//   brand: "Honda"
// };




// car1.describe.apply(car2, [200, "grey"]);


// let person = {
//   name: "John",
//   age: 24,
//   greet: function(age) {
//     console.log("Hello, " + this.name, this.age, age);
//   }
// };

// const person2={
//     age: 33,
//     name: "Xeyyam"
// }

// let greetJohn = person.greet.bind(person2,25);


// greetJohn();







// console.log(currentDate.getMonth() + 1)
// console.log(currentDate.getDate())
// console.log(currentDate.getFullYear())
// console.log(currentDate.getDay())




// const currentDate = new Date();

// const day=1

// currentDate.setMonth(currentDate.getMonth() + day);
// console.log(currentDate.toDateString());




// const setMonth = (month) => {
//     const currentDate = new Date();

//     currentDate.setMonth(currentDate.getMonth() + month);
//     return currentDate
// }

// console.log(setMonth(1).toISOString());


// const today = new Date();
// console.log(today.toISOString());



// const beetweenDates = (date1, date2) => {
//     const d1 = new Date(date1);
//     const d2 = new Date(date2); 
//     const differenceInTime = Math.abs(d2 - d1);
//     const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
//     return `Iki tarix arasinda ${differenceInDays} gun var`;
// }   

// console.log(beetweenDates("2024-08-01", "2024-08-15"));



// Create a Date object for today and format it to a local date string.



const today = new Date();
console.log(today.toLocaleDateString());