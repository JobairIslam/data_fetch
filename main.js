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
  {
    id: "5",
    img: "images/img-2.jpg",
    name: "Summer Dress",
    desc: "Consectetur adipisicing elit.",
    price: 80,
  },
  {
    id: "6",
    img: "images/img-1.jpg",
    name: "Winter Jacket",
    desc: "Quisquam, quidem.",
    price: 150,
  },
  {
    id: "7",
    img: "images/img-2.jpg",
    name: "Jeans",
    desc: "Lorem ipsum dolor sit amet.",
    price: 60,
  },
  {
    id: "8",
    img: "images/img-2.jpg",
    name: "Formal Pants",
    desc: "Adipisicing elit. Quasi.",
    price: 95,
  },
  {
    id: "9",
    img: "images/img-4.jpg",
    name: "Sweater",
    desc: "Ratione, exercitationem.",
    price: 40,
  },
  {
    id: "10",
    img: "images/img-1.jpg",
    name: "Blazer",
    desc: "Voluptatibus, esse.",
    price: 200,
  },
  {
    id: "11",
    img: "images/img-2.jpg",
    name: "Leather Jacket",
    desc: "Adipisci, corporis.",
    price: 250,
  },
  {
    id: "12",
    img: "images/img-3.jpg",
    name: "Hoodie",
    desc: "Dolor sit amet.",
    price: 45,
  },
  {
    id: "13",
    img: "images/img-4.jpg",
    name: "Track Suit",
    desc: "Lorem ipsum dolor sit.",
    price: 120,
  },
  {
    id: "14",
    img: "images/img-1.jpg",
    name: "Polo Shirt",
    desc: "Amet consectetur adipisicing.",
    price: 35,
  },
  {
    id: "15",
    img: "images/img-2.jpg",
    name: "Shorts",
    desc: "Adipisicing elit. Mollitia.",
    price: 30,
  },
  {
    id: "16",
    img: "images/img-3.jpg",
    name: "Skirt",
    desc: "Lorem ipsum dolor.",
    price: 50,
  },
  {
    id: "17",
    img: "images/img-4.jpg",
    name: "Cardigan",
    desc: "Ipsum dolor sit.",
    price: 65,
  },
  {
    id: "18",
    img: "images/img-1.jpg",
    name: "Tank Top",
    desc: "Consectetur adipisicing elit.",
    price: 20,
  },
  {
    id: "19",
    img: "images/img-2.jpg",
    name: "Chinos",
    desc: "Dolor sit amet consectetur.",
    price: 55,
  },
  {
    id: "20",
    img: "images/img-3.jpg",
    name: "Denim Jacket",
    desc: "Lorem ipsum dolor sit.",
    price: 130,
  },
  {
    id: "21",
    img: "images/img-4.jpg",
    name: "Dress Shirt",
    desc: "Adipisicing elit. Veritatis.",
    price: 75,
  },
  {
    id: "22",
    img: "images/img-1.jpg",
    name: "Bomber Jacket",
    desc: "Lorem ipsum dolor sit.",
    price: 180,
  },
  {
    id: "23",
    img: "images/img-2.jpg",
    name: "Pullover",
    desc: "Adipisicing elit. Eos.",
    price: 50,
  },
  {
    id: "24",
    img: "images/img-3.jpg",
    name: "Vest",
    desc: "Lorem ipsum dolor sit amet.",
    price: 35,
  },
  {
    id: "25",
    img: "images/img-4.jpg",
    name: "Jumpsuit",
    desc: "Consectetur adipisicing elit.",
    price: 90,
  },
];

let cart = {
  totalQuantity: 0,
  items: {},
};

let generateShop = () => {
  shop.innerHTML = shopItemData
    .map((item) => {
      return `
    <div id="product-id-${item.id}" class="item">
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
  updateTotalSpent();

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
    updateTotalSpent();

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

let updateTotalSpent = () => {
  let totalSpent = Object.keys(cart.items).reduce((total, id) => {
    let item = shopItemData.find((item) => item.id === id);
    return total + item.price * cart.items[id];
  }, 0);
  document.querySelector(".total-spent").innerText = `$ ${totalSpent}`;
};
