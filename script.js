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
        price: 2
    }, 
    {
        id: 2,
        name: "Claire",
        age: "dewasa",
        gender: "female",
        star: "5.00",
        imgPath: "./img/people/cewe 2.jpg",
        description: "haii guys",
        price: 3
    }, 
    {
        id: 3,
        name: "Rias",
        age: "remaja",
        gender: "female",
        star: "5.00",
        imgPath: "./img/people/cewe 3.jpg",
        description: "haii guys",
        price: 2
    }, 
    {
        id: 4,
        name: "Malice",
        age: "remaja",
        gender: "female",
        star: "5.00",
        imgPath: "./img/people/cewe 4.jpg",
        description: "haii guys",
        price: 1
    }, 
    {
        id: 5,
        name: "Ume",
        age: "remaja",
        gender: "female",
        imgPath: "./img/people/cewe 5.jpg",
        description: "haii guys",
        price: 5
    }, 
    {
        id: 6,
        name: "Magenta",
        age: "remaja",
        gender: "female",
        imgPath: "./img/people/cewe 6.jpg",
        description: "haii guys",
        price: 2.5
    }, 
    {
        id: 7,
        name: "Tarno",
        age: "remaja",
        gender: "male",
        imgPath: "./img/people/cowo 1.jpg",
        description: "haii guys",
        price: 1
    }, 
    {
        id: 8,
        name: "Dika",
        age: "dewasa",
        gender: "male",
        imgPath: "./img/people/cowo 2.jpg",
        description: "haii guys",
        price: 1
    }, 
    {
        id: 9,
        name: "Gaga",
        age: "remaja",
        gender: "male",
        imgPath: "./img/people/cowo 3.jpg",
        description: "haii guys",
        price: 1
    }
]
let section = document.querySelector("#product1");
let container = document.querySelector(".pro-container");
for (let i = 0; i < database.length; i++) {

    let card = document.createElement("div");
    card.classList.add("pro");
    let dbImage = document.createElement("img");
    dbImage.setAttribute("src", database[i].imgPath);
    dbImage.setAttribute("alt", "")
    let dbDescription = document.createElement("div");
    dbDescription.classList.add("description");
    let dbName = document.createElement("h6");
    dbName.innerText = `Name: ${database[i].name}`;
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
    descriptionPrice.innerText = `$ ${database[i].price}`;
    
    // heart
    let heartContainer = document.createElement("div");
    let heartButton = document.createElement("a");
    heartButton.setAttribute("href", "#")
    let heartIcon = document.createElement("i");
    
    heartIcon.classList.add("fa-solid", "fa-heart", "fa-beat");
    heartButton.append(heartIcon);
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
}








