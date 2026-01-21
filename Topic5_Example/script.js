//   function setLinkAttributes() {
//         const link = document.getElementById("myLink");
//         link.setAttribute("href", "https://www.facebook.com");  
//         link.setAttribute("target", "_blank"); 
//         link.textContent = "Get Facebook";
//         link.style.margin="20px";
//     }



// function setImageAttributes() {
//     const img = document.getElementById("myImage");
//     img.setAttribute("src", "images/images.jpg");         
//     img.setAttribute("alt", "A beautiful scene"); 
// }


// function styleBox() {
//     const box = document.getElementById("myBox");
//     box.style.width = "200px";
//     box.style.height = "200px";
//     box.style.backgroundColor = "lightcoral";
//     box.style.borderRadius = "10px";
//     box.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.3)";
//     box.style.border = "2px solid black";
//     box.style.lineHeight = "200px";
//     box.style.transition = "all 0.3s ease";
//     box.innerText = "Styled Box!";
//     box.style.textAlign = "center";
//     box.style.fontWeight="bold";
//     box.style.fontSize="20px";
//     box.style.marginBottom="20px";
// }



// const changeStyles = () => {
//     const myParagraph = document.querySelector("#myParagraph");
//     myParagraph.style.color = "green";
//     myParagraph.style.fontSize = "20px";
//     myParagraph.style.backgroundColor = "yellow";
//     myParagraph.style.padding = "10px";
//     myParagraph.style.borderRadius = "5px";
//     myParagraph.style.border = "2px solid black";
// }

// const changeImage = () => {
//     const myImage = document.querySelector("#myImage");
//     myImage.src = "./images/download.jpg";
// }



// const itemListDiv = document.querySelector("#itemList");

// itemListDiv.innerHTML = `<ul>
//                             <li>Item A</li>
//                             <li>Item B</li>
//                             <li>Item C</li>
//                         </ul>` ;

// const listItems = document.querySelectorAll("ul li");

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].innerText = `List Item ${i + 1} updated`;
// }

// const boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].innerText = `This is ${i + 1} box`;
// }


// const paragraph = document.getElementById("intro");
// paragraph.innerHTML = "Updated content via innerHTML";
// paragraph.textContent = "Updated content via textContent";
// paragraph.innerText = "Updated content via innerText";



// const button = document.querySelector('#btn');
// button.addEventListener('click', function () {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = "Hello, World!";
//     document.body.appendChild(paragraph);
// });




// const div = document.querySelector(".box")


// const mouseOver = () => {
//     div.style.width = "400px";
//     div.style.height = "400px";
//     div.style.background = "blue";
// }


// const mouseOut = () => {
//     div.style.width = "200px";
//     div.style.height = "200px";
//     div.style.background = "red";
// }

// div.addEventListener("mouseout", mouseOut);
// div.addEventListener("mouseover", mouseOver);



// const input = document.querySelector(".input")
// const paragraph = document.querySelector(".parag")



// const inputValueCheck = (e) => {
//     paragraph.textContent = ` ${e.target.value}`;


// }

// // input.addEventListener("keypress", inputValueCheck)
// input.addEventListener("input", inputValueCheck)


// const input = document.querySelector(".input")
// input.style.outline="none";

// const focus = () => {
//     input.style.borderColor = "green";
//     input.style.border="3px solid green";
//     input.style.padding="8px";
// }


// const blur = () => {
//     input.style.borderColor = "red";
//     input.style.border="3px solid red";
//     input.style.padding="4px";

// }

// input.addEventListener("focus", focus);
// input.addEventListener("blur", blur);

















// 10.01.2026







// const quoteBtn = document.querySelector("#quoteBtn");
// const quoteText = document.querySelector("#quoteText");
// const quotePerson = document.querySelector("#quotePerson");


// quoteBtn.addEventListener("click", ShowQuote);



// function ShowQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     let selectqoute = quotes[randomIndex];
//     // alert(`${selectqoute.quote} - ${selectqoute.person}`);


//     quotePerson.textContent = ` ${quotes[randomIndex].person}`;
//     quoteText.textContent = quotes[randomIndex].quote;
// }


// const quotes = [
//     {
//         quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
//         person: `Aristotle`,
//     },
//     {
//         quote: `"The best way to find yourself is to lose yourself in the service of others."`, 
//         person: ` Mahatma Gandhi`,
//     },
//     {
//         quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
//         person: ` Albert Einstein`,
//     },
//     {
//         quote: `"Your time is limited, so dont waste it living someone else's life."`,
//         person: ` Steve Jobs`,  
//     },
//     {
//         quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
//         person: ` Benjamin Franklin`,
//     },
//     {
//         quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
//         person: `Oprah Winfrey`,
//     },
//     {
//         quote: `"It does not matter how slowly you go as long as you do not stop."`,
//         person: `Confucius`,    
//     },
//     {   
//         quote: `"The journey of a thousand miles begins with one step."`,
//         person: `Lao Tzu`,
//     },
//     {
//         quote: `"Our lives begin to end the day we become silent about things that matter."`,
//         person: `Martin Luther King, Jr.`,  
//     },  
//     {
//         quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
//         person: `Dalai Lama`,
//     },
// ];




// const paragraph = document.querySelector(".text");
// const button = document.querySelector("#btn");


// button.addEventListener("click", repleaseParagraph);

// function repleaseParagraph() {

//     const newText = paragraph.textContent = "New Text"
//     paragraph.replaceWith(newText);

// }   





// const myList = document.querySelector("#myList")
// const btn = document.querySelector("#btn")

// // Başlangıçta mevcut <li> elemanlarının numaralarını bul ve iki basamaklı göster
// let maxItemNum = 0;
// for (let i = 0; i < myList.children.length; i++) {
//     const text = myList.children[i].textContent;
//     const match = text.match(/Item\s0?(\d+)/);
//     if (match) {
//         const num = parseInt(match[1], 10);
//         if (num > maxItemNum) maxItemNum = num;
//         myList.children[i].textContent = num < 10 ? `Item 0${num}` : `Item ${num}`;
//     }
// }

// btn.addEventListener("click", addListItem)

// let item = maxItemNum + 1;

// function addListItem() {
//     if (item < 10) {
//         myList.innerHTML += `<li>Item 0${item}</li>`

//     }else if(item >  100){
//         myList.innerHTML += `<li>Item ${item}</li>`

//     } else {
//         myList.innerHTML += `<li>Item ${item}</li>`
//     }
//     item++;
// }








// const locationDisplay = document.getElementById("locationDisplay"); 
// const getLocationBtn = document.getElementById("getLocationBtn");




// function getLocation() {

//     navigator.geolocation.getCurrentPosition(showPosition=>{
//         const latitude = showPosition.coords.latitude;
//         const longitude = showPosition.coords.longitude;
//         locationDisplay.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

//     });   
// }

// getLocationBtn.addEventListener("click", getLocation);


// const getGoogleBtn = document.querySelector("#getGoogleBtn")


// getGoogleBtn.addEventListener("click", getGoogle)

//   function getGoogle() {
//         // window.location.href = "https://www.google.com";
//         window.open("https://www.google.com","_blank")
//     }



// const playerScore1 = document.querySelector("#playerScore1")
// const playerScore2 = document.querySelector("#playerScore2")

// let point1 = 0
// let point2 = 0


// const rules = ["w","e","f"]


// function randomElement(arr){
//     const randomIndex = Math.floor(Math.random() * arr.length)
//     return arr[randomIndex]
// }


// window.addEventListener("keydown", function(e){

//     const userChoose = e.key
//     const compChoose = randomElement(rules)



//     console.log("userChoose",userChoose);
//     console.log("compChoose",compChoose);

//       if(rules.includes(userChoose) == false){
//         return
//     }


//         if(userChoose == "e" && compChoose == "f"){
//         point1++
//             playerScore1.innerHTML= `POINT: ${point1}`

//         }else if(userChoose == "w" && compChoose == "e"){
//         point1++
//             playerScore1.innerHTML = `POINT: ${point1}`


//         }else if(userChoose == "f" && compChoose == "w"){
//         point1++
//             playerScore1.innerHTML = `POINT: ${point1}`


//         }else if(userChoose == compChoose){
// console.log("DRAF_DRAF");


//          }else{
//             point2++
//             playerScore2.innerHTML = `POINT: ${point2}`


//         }

// })



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




class BankAccount {
    constructor(fullName, gmail, cardNumber, balance) {
        this.fullName = fullName;
        this.gmail = gmail;
        this.cardNumber = cardNumber;
        this.balance = balance;
    }
    showInfo() {
        console.log(`Full Name: ${this.fullName}`);
        console.log(`Gmail: ${this.gmail}`);
        console.log(`Card Number: ${this.cardNumber}`);
        console.log(`Balance: ${this.balance}`);
    }
}
class personalAccount extends BankAccount {
    constructor(fullName, gmail, cardNumber, balance, personalID) {
        super(fullName, gmail, cardNumber, balance);
        this.personalID = personalID;

    }

    showInfo() {
        super.showInfo();
        console.log(`Personal ID: ${this.personalID}`);
    }   

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} manat elave edildi. yeni balans ${this.balance} manatdir`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Yetersiz balans. Emeliyyat ugursuz oldu.`);
        } else {
            this.balance -= amount;
            console.log(`${amount} manat cekildi. yeni balans ${this.balance} manatdir`);
        }
}
}

const account1 = new personalAccount("John Doe", "john.doe@example.com", "1234567890", 1000 , "987654321");
// console.log(account1);
account1.showInfo();
account1.deposit(500); 
account1.withdraw(200);












