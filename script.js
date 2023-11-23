// Script for navigation bar

// ===============

let database = [
    {
        id: 1,
        name: "Jojo",
        age: "dewasa",
        gender: "female",
        star: 3,
        imgPath: "./img/people/cewe 1.jpg",
        description: "haii guys",
        price: 4
    }, 
    {
        id: 2,
        name: "Claire",
        age: "dewasa",
        gender: "female",
        star: 5,
        imgPath: "./img/people/cewe 2.jpg",
        description: "#nohashtag",
        price: 3
    }, 
    {
        id: 3,
        name: "Rias",
        age: "remaja",
        gender: 4,
        star: "5.00",
        imgPath: "./img/people/cewe 3.jpg",
        description: "muka-muka orang bener",
        price: 4
    }, 
    {
        id: 4,
        name: "Malice",
        age: "remaja",
        gender: "female",
        star: 5,
        imgPath: "./img/people/cewe 4.jpg",
        description: "gadis ketek",
        price: 3
    }, 
    {
        id: 5,
        name: "Ume",
        age: "remaja",
        star: 8,
        gender: "female",
        imgPath: "./img/people/cewe 5.jpg",
        description: "kyaaaa~! ovO",
        price: 322
    }, 
    {
        id: 6,
        name: "Magenta",
        age: "remaja",
        gender: "female",
        star: 4,
        imgPath: "./img/people/cewe 6.jpg",
        description: "kyunnn~! gOpay",
        price: 2.5
    }, 
    {
        id: 7,
        name: "Tarno",
        age: "remaja",
        gender: "male",
        star: 3,
        imgPath: "./img/people/cowo 1.jpg",
        description: "bukan sulap..",
        price: 2
    }, 
    {
        id: 8,
        name: "Dika",
        age: "dewasa",
        gender: "male",
        star: 3,
        imgPath: "./img/people/cowo 2.jpg",
        description: "bukan she/her",
        price: 1
    }, 
    {
        id: 9,
        name: "Gaga",
        age: "remaja",
        gender: "male",
        star: 4,
        imgPath: "./img/people/cowo 3.jpg",
        description: "ga kuat~",
        price: 2
    }
]
let section = document.querySelector("#product1");
let container = document.querySelector(".pro-container");
// aaaaaaaaaaaaa
let card = document.createElement("div");
let dbImage = document.createElement("img");
let dbDescription = document.createElement("div");

let descriptionPrice = document.createElement("h4");
let descriptionText = document.createElement("span");
let starContainer = document.createElement("h5");
let modulPayment = document.querySelector("#payment")
let imagePayment = document.createElement("img");
// aaaaaaaaaaaaa
for (let i = 0; i < database.length; i++) {
    let card = document.createElement("div");
    card.classList.add("pro");
    let dbImage = document.createElement("img");
    dbImage.setAttribute("src", database[i].imgPath);
    dbImage.setAttribute("alt", "")
    let dbDescription = document.createElement("div");
    dbDescription.classList.add("description");
    let dbName = document.createElement("h6");
    dbName.innerText = `${database[i].name}`;
    // star
    let starContainer = document.createElement("h5");
    for (let j = 0; j < database[i].star; j++) {
        let star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star");    
        starContainer.append(star);
    }
    // deskripsi text
    let descriptionText = document.createElement("span");
    descriptionText.innerText = database[i].description;
    
    // price
    let descriptionPrice = document.createElement("h4");
    descriptionPrice.innerText = `$ ${database[i].price} / hour`;
    
    // heart
    let heartContainer = document.createElement("div");
    let heartButton = document.createElement("a");
    // heartButton.setAttribute("href", "")
    let heartIcon = document.createElement("i");
    // -----
    heartIcon.classList.add("fa-solid", "fa-heart", "fa-beat");
    heartIcon.classList.add("buttonHeart")
    heartButton.append(heartIcon);
    // ------
    //  append
    dbDescription.append(dbName);
    dbDescription.append(starContainer);
    dbDescription.append(descriptionText);
    dbDescription.append(descriptionPrice);
    heartContainer.append(heartButton);
    card.append(dbImage);
    card.append(dbDescription);
    card.append(heartContainer);
    container.append(card);  
    
    let modulPayment = document.querySelector("#payment")
    let paymentContainer = document.querySelector(".payment-container")
    heartIcon.addEventListener("click", () =>{
        if (modulPayment.style.display === "flex") {
            // imagePayment.removeAttribute("img");
        } else {

            let namePayment = document.createElement("h1");
            namePayment.classList.add("payTitle");
            namePayment.innerText = database[i].name;
            paymentContainer.append(namePayment);
            let imagePayment = document.createElement("img");
            modulPayment.style.display="flex";
            // console.log(1);
            imagePayment.classList.add("imagePayment");
            imagePayment.setAttribute("src", database[i].imgPath);
    
            let buttonAdd = document.createElement("a");
            buttonAdd.setAttribute("type", "button");
            buttonAdd.setAttribute("value", "add");
            buttonAdd.classList.add("add-btn");
            buttonAdd.innerText = "+";
            
            let buttonRed = document.createElement("a");
            buttonRed.setAttribute("type", "button");
            buttonRed.setAttribute("value", "reduce");
            buttonRed.classList.add("red-btn");
            buttonRed.innerText = "-";
    
            let cost = document.createElement("h4");
            cost.classList.add("cost");
            cost.innerText = `$ ${database[i].price}`;
            
            let totalHours = 1;
    
            let hours = document.createElement("h4");
            hours.classList.add("hours");
            hours.innerText = `${totalHours} jam`;
            
            modulPayment.append(imagePayment);
            modulPayment.append(cost);
            modulPayment.append(hours);
            modulPayment.append(buttonAdd);
            modulPayment.append(buttonRed);
            
            let multiplier = database[i].price
            
            
            buttonAdd.addEventListener("click", () => {
                cost.innerText = `$ ${database[i].price += multiplier}`
                totalHours++
                hours.innerText = `${totalHours} jam`;
                
            })
            buttonRed.addEventListener("click", () => {
                cost.innerText = `$ ${database[i].price -= multiplier}`
                totalHours --
                hours.innerText = `${totalHours} jam`;
                if (totalHours == 0 || totalHours < 0) {
                    totalHours = 0;
                    hours.innerText = `${totalHours} jam`;
                }
                if (database[i].price == 0 || database[i].price < 0) {
                    database[i].price = 0
                    cost.innerText = 0;
                }
                // console.log(totalHours)
                // cost.innerText = Math.max(0, database[i].price);
            })
    
    
            let payButton = document.querySelector(".payButton");
            payButton.addEventListener(`click`, () => {
                // modulPayment.append(cost);
                let panggilan;
                if (database[i].gender === "female") {
                    panggilan = "Mbak"
                }
                if (database[i].gender === "male") {
                    panggilan = "Mas"
                }
                alert(`Terima kasih telah menggunakan jasa kami. \nKamu akan dicintai oleh ${panggilan} ${database[i].name} sesuai durasi selama ${totalHours} jam. \nTotal biaya yang telah kamu bayarkan ${cost.innerText}. \nSilahkan menunggu beberapa saat untuk mendapatkan DM dari ${panggilan} ${database[i].name}.`);
                location.reload()
            })
            
            // console.log(imagePayment)
            // let paymentContainer = document.querySelector(".payment-container");
            let xButton = document.querySelector(".xButton");
            xButton.addEventListener("click", () => {
                // console.log(imagePayment);
                modulPayment.style.display = "none";
                imagePayment.remove();
                cost.remove();
                namePayment.remove();
                hours.remove();
                location.reload()
            })
        }
    })
}
