var container = document.getElementById("container");

const arr = [
    {
        img: "./assets/irshad.png",
        tittle: "Irshad",
        price: "1,3,6 aylıqda öz qiymetinə",
        discount: "2% cashback",
    },
    {
        img: "./assets/maxi.az.png",
        tittle: "Maxi.az",
        price: "6 aylıqda öz qiymetinə",
    },
    {
        img: "./assets/starbucks.png",
        tittle: "Starbucks",
        price: "3 aylıqda öz qiymetinə",
        discount: "14% cashback",
    },
    {
        img: "./assets/pull.bear.png",
        tittle: "Pull & Bear",
        price: "1,3,6 aylıqda öz qiymetinə",
        discount: "2% cashback",
    },
    {
        img: "./assets/rayban.png",
        tittle: "RayBan",
        price: "12 aylıqda öz qiymetinə",
        discount: "2% cashback",

    },
    {
        img: "./assets/koton.png",
        tittle: "Koton",
        price: "12 aylıqda öz qiymetinə",
        discount: "2% cashback",
    },
    {
        img: "./assets/levis.png",
        tittle: "Levi's",
        price: "1,3,6 aylıqda öz qiymetinə",
        discount: "2% cashback",

    },
    {
        img: "./assets/nike.png",
        tittle: "Nike",
        price: "1,3,6 aylıqda öz qiymetinə",
        discount: "2% cashback",
    },
    {
        img: "./assets/irshad.png",
        tittle: "Irshad",
        price: "1,3,6 aylıqda öz qiymetinə",
        discount: "2% cashback",
    },
    {
        img: "./assets/maxi.az.png",
        tittle: "Maxi.az",
        price: "6 aylıqda öz qiymetinə",
    },
    {
        img: "./assets/starbucks.png",
        tittle: "Starbucks",
        price: "3 aylıqda öz qiymetinə",
        discount: "14% cashback",
    },
    {
        img: "./assets/pull.bear.png",
        tittle: "Pull & Bear",
        price: "1,3,6 aylıqda öz qiymetinə",
        discount: "2% cashback",
    },
]


arr.forEach((objects) => {
    const div = document.createElement("div");
    container.appendChild(div);
  
    const img = document.createElement("img");
    img.src = objects.img;
    div.appendChild(img);
  
    const tittle = document.createElement("h2");
    tittle.textContent = objects.tittle;
    div.appendChild(tittle);
  
    const price = document.createElement("h4");
    price.textContent = objects.price;
    div.appendChild(price);
  
    const discount = document.createElement("h4");
    discount.textContent = objects.discount;
    div.appendChild(discount);
  });