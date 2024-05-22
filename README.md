[
{
"key": "String",
"Number": 1,
"array": [1, 2, 3],
"nested": {
"literals": true
},
"friend": [
{
"name": "rakib",
"id": "944",
"choice": [1, 3, 5, 7]
}
]
},
{
"key": "String",
"Number": 1,
"array": [1, 2, 3],
"nested": {
"literals": true
},
"friend": [
{
"name": "rakib",
"id": "944",
"choice": [1, 3, 5, 7]
}
]
}
]
let shop = document.getElementById("shop");

let shopItemData = [
{
id: "1",
img: "images/img-1.jpg",
name: "Casual shirt",
desc: "Lorem ipsum dolor sit amet.",
price: 45,
},
{
id: "2",
img: "images/img-2.jpg",
name: "Office Shirt",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
price: 100,
},
{
id: "3",
img: "images/img-3.jpg",
name: "T Shirt",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
price: 25,
},
{
id: "4",
img: "images/img-4.jpg",
name: "Mens Suit",
desc: "Lorem ipsum dolor sit amet.",
price: 300,
},
];

let generateShop = () => {
shop.innerHTML = shopItemData
.map((item) => {
return `   <div id="product-id-${item.id}" class="item">
        <img height="219px" width="219px" src="${item.img}" alt="${item.name}" />
        <div class="details">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="price-quantity">
            <h2>$${item.price}</h2>
            <div class="button">
              <i onclick="decrement('${item.id}')" class="bi bi-dash"></i>
              <div class="quantity" id="quantity-${item.id}">0</div>
              <i onclick="increment('${item.id}')" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
  `;
})
.join("");
};

generateShop();

let increment = (id) => {
let quantityElement = document.getElementById(`quantity-${id}`);
let quantity = parseInt(quantityElement.innerText);
quantityElement.innerText = quantity + 1;
console.log(`Incremented product ${id}, new quantity: ${quantity + 1}`);
};

let decrement = (id) => {
let quantityElement = document.getElementById(`quantity-${id}`);
let quantity = parseInt(quantityElement.innerText);
if (quantity > 0) {
quantityElement.innerText = quantity - 1;
}
console.log(`Decremented product ${id}, new quantity: ${quantity - 1}`);
};

<div class="spent">
          <h3>Total spent</h3>
          <div class="money">$ 0</div>
        </div>

        let shop = document.getElementById("shop");

let shopItemData = [
{
id: "1",
img: "images/img-1.jpg",
name: "Casual shirt",
desc: "Lorem ipsum dolor sit amet.",
price: 45,
},
{
id: "2",
img: "images/img-2.jpg",
name: "Office Shirt",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
price: 100,
},
{
id: "3",
img: "images/img-3.jpg",
name: "T Shirt",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
price: 25,
},
{
id: "4",
img: "images/img-4.jpg",
name: "Mens Suit",
desc: "Lorem ipsum dolor sit amet.",
price: 300,
},
];

let cart = {
totalQuantity: 0,
items: {},
};

let generateShop = () => {
shop.innerHTML = shopItemData
.map((item) => {
return `    <div id="product-id-${item.id}" class="item">
        <img height="219px" width="219px" src="${item.img}" alt="${item.name}" />
        <div class="details">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="price-quantity">
            <h2>$${item.price}</h2>
            <div class="button">
              <i onclick="decrement('${item.id}')" class="bi bi-dash"></i>
              <div class="quantity" id="quantity-${item.id}">0</div>
              <i onclick="increment('${item.id}')" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
   `;
})
.join("");
};

generateShop();

let increment = (id) => {
let quantityElement = document.getElementById(`quantity-${id}`);
let quantity = parseInt(quantityElement.innerText);
quantityElement.innerText = quantity + 1;

// Update cart state
cart.items[id] = (cart.items[id] || 0) + 1;
updateCartAmount();

console.log(`Incremented product ${id}, new quantity: ${quantity + 1}`);
};

let decrement = (id) => {
let quantityElement = document.getElementById(`quantity-${id}`);
let quantity = parseInt(quantityElement.innerText);
if (quantity > 0) {
quantityElement.innerText = quantity - 1;

    // Update cart state
    cart.items[id] = (cart.items[id] || 0) - 1;
    if (cart.items[id] === 0) delete cart.items[id]; // Remove item from cart if quantity is 0
    updateCartAmount();

    console.log(`Decremented product ${id}, new quantity: ${quantity - 1}`);

}
};

let updateCartAmount = () => {
let totalQuantity = Object.values(cart.items).reduce(
(total, quantity) => total + quantity,
0
);
document.getElementById("cartAmount").innerText = totalQuantity;
};
