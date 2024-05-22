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
      return `
    <div id="product-id-${item.id}" class="item">
        <img height="219px" width="219px" src="${item.img}" alt="${item.name}" />
        <div class="details">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="price-quantity">
            <h2>$${item.price}</h2>
            <div class="button">
              <i onclick=" decrement(${id})" class="bi bi-dash"></i>
              <div id="product-id-${item.id}" class="quantity">0</div>
              <i onclick=" increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
};

generateShop();

//!increment

let increment = (id) => {
  let selectItem = id;
  console.log(selectItem.id);
};
let decrement = (id) => {
  let selectItem = id;
  console.log(selectItem.id);
};
let update = () => {};
