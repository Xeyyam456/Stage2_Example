// class Car {
//     constructor(brand, model, year, oilLevel) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.oilLevel = oilLevel;
//         this.isStarted = false;
//     }

//     startEngine() {
//         if (this.isStarted) {

//             console.log(` ${this.brand} ${this.model} artiq islek veziyyetdedir`);

//         } else if(this.oilLevel>0) {
//              this.isStarted = true;
//             console.log(` ${this.brand} ${this.model} islek veziyyete getirildi`);

//         }else{
//              console.log(`${this.brand} ${this.model} Start edile bilmedi. Zehmet olmasa yanacaq seviyyesini yoxlayin.`);
//         }
//     }
//     stopEngine() {
//         if (this.isStarted) {
//             this.isStarted = false;
//             console.log(` ${this.brand} ${this.model} sonduruldu.`);
//         } else {
//             console.log(` ${this.brand} ${this.model} artiq sonulu veziyyetdedir`)
//         }
//     }
//     // yanacaq elave etmek
//     reFuel(value) {
//         this.oilLevel += value
//         console.log(`${value} qeder oil elave edildi. hazirda ise ${this.oilLevel} qeder oil var`)
//     }

//     checkFuel() {
//         console.log(`${this.oilLevel} L qeder yanacaq var`)
//     }

//     drive(distance) {
//         if (!this.isStarted) {
//             console.log(`Hal hazirda muherrik sonuludur.`)

//         } else if (this.oilLevel <= 0) {
//             console.log(`Yanacaq olmadigi ucun surule bilmez.`)

//         } else {
//             console.log(` ${this.brand} ${this.model} avtomobili ${distance} km  surulub`)

//             this.oilLevel -= distance * 0.1
//             if (this.oilLevel < 0) {
//                 this.oilLevel = 0
//             }

//         }
//     }


// }

// const myCar = new Car("Toyota", "Corolla", 2020, 40);
// myCar.startEngine()
// myCar.drive(50)
// myCar.checkFuel()
// myCar.reFuel(50)
// myCar.checkFuel()
// myCar.drive(10)
// myCar.checkFuel()
// myCar.drive(10)
// myCar.stopEngine()
// myCar.startEngine()
// myCar.stopEngine()
// // myCar.drive(10)





// // myCar.checkFuel()
// myCar.startEngine();
// myCar.startEngine();
// myCar.stopEngine();
// myCar.stopEngine();
// myCar.reFuel(2)
// myCar.reFuel(5)
// myCar.checkFuel()



// const myCar2 = new Car("Honda", "Civic", 2019, 0 );
// myCar2.startEngine();




// class BankAccount {
//     constructor(fullName, gmail, cardNumber, balance) {
//         this.fullName = fullName;
//         this.gmail = gmail;
//         this.cardNumber = cardNumber;
//         this.balance = balance;
//     }
//     showInfo() {
//         console.log(`Full Name: ${this.fullName}`);
//         console.log(`Gmail: ${this.gmail}`);
//         console.log(`Card Number: ${this.cardNumber}`);
//         console.log(`Balance: ${this.balance}`);
//     }
// }
// class personalAccount extends BankAccount {
//     constructor(fullName, gmail, cardNumber, balance, personalID) {
//         super(fullName, gmail, cardNumber, balance);
//         this.personalID = personalID;

//     }

//     showInfo() {
//         super.showInfo();
//         console.log(`Personal ID: ${this.personalID}`);
//     }   

//     deposit(amount) {
//         this.balance += amount;
//         console.log(`${amount} manat elave edildi. yeni balans ${this.balance} manatdir`);
//     }
//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log(`Yetersiz balans. Emeliyyat ugursuz oldu.`);
//         } else {
//             this.balance -= amount;
//             console.log(`${amount} manat cekildi. yeni balans ${this.balance} manatdir`);
//         }
// }
// }

// const account1 = new personalAccount("John Doe", "john.doe@example.com", "1234567890", 2000 , "987654321");
// // console.log(account1);
// account1.showInfo();
// account1.deposit(500); 
// account1.withdraw(200);






// class PasswordLength     {
//     constructor(password) {
//         this.password = password;
//     }
//     #checkLength() {
//         if (this.password.length < 6) {
//             console.log("Password is strong.");
//         } else {
//             console.log("Password is weak.");
//         }
//     }

//      set Password(value) {


//         this.password = value;
//         this.#checkLength();
//     }

//     get Password() {
//         return this.password;
//     }   

// }

// const myPassword = new PasswordLength("abc1233");
// myPassword.Password = "newpa";  
// myPassword.Password;




// Conditions
// A student name must not be empty.
// The same student must not be added more than once.
// If a student is not found when trying to remove, show a message in the console.
// The students list must be modified only through class methods (not directly).
// The course must start with an empty students array.






// class Course {
//     constructor(courseName) {
//         this.courseName = courseName;
//         this.students = [];
//     }       
//     addStudent(student) {
//         if (!student.name) {
//             console.log("Student name must not be empty.");
//             return;
//         }
//         const exists = this.students.some(s => s.name === student.name);
//         if (exists) {
//             console.log(`Student ${student.name} is already enrolled.`);
//             return;
//         }
//         this.students.push(student);
//         console.log(`Student ${student.name} added to the course.`);
//     }
//     removeStudent(studentName) {
//         const index = this.students.findIndex(s => s.name === studentName);
//         if (index === -1) {
//             console.log(`Student ${studentName} not found.`);
//             return;
//         }
//         this.students.splice(index, 1);

//         console.log(`Student ${studentName} removed from the course.`);
//     }
//     listStudents() {
//         console.log(`Students in ${this.courseName}:`);
//         this.students.forEach(student => {
//             console.log(student.name);
//         }
//         );
//     }

// }
// const course = new Course("Mathematics");
// const student1 = { name: "Alice" };
// const student2 = { name: "Bob" };
// const student3 = { name: "Charlie" };
// course.addStudent(student1);
// course.addStudent(student2);
// course.addStudent(student3);
// course.listStudents();
// course.removeStudent("Charlie");
// course.removeStudent("Alice");
// course.listStudents();





class Praduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getTotalPrice() {
        return this.price;
    }
}

class Order  {
    constructor() {
        this.products = [];
    }   
    addProduct(product) {
        this.products.push(product);
    }
    getOrderTotal() {
        let total = 0;
        this.products.forEach(product => {
            total += product.getTotalPrice();
        });
        return total;
    }   
}
const cofe = new Praduct("latte", 3);
const Phone = new Praduct("Xioami", 1400);
const myOrder = new Order();

myOrder.addProduct(cofe);
myOrder.addProduct(Phone);
console.log(`Toplam deyer: $${myOrder.getOrderTotal()}`);








