// const dataGroup = [
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },

//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
//   {
//     id: 1,
//     imgSrc: "blogimg1",
//     title: "Pen",
//     subTitle: "lorem 1",
//   },
//   {
//     id: 2,
//     imgSrc: "blogimg2",
//     title: "apple",
//     subTitle: "lorem 2",
//   },
//   {
//     id: 3,
//     imgSrc: "blogimg3",
//     title: "Up",
//     subTitle: "lorem 3",
//   },
// ];
// console.log(dataGroup);
// const productList = document.getElementById("product-list");
// for (let i = 0; i < dataGroup.length; i++) {
//   productList.innerHTML += `
//               <div class="single-product" id="${dataGroup[i].id}">
//         <img src="${dataGroup[i].imgSrc}.png" alt="${dataGroup[i].imgSrc}" />
//         <h2>${dataGroup[i].title}</h2>
//         <p>
//           ${dataGroup[i].subTitle}
//         </p>
//       </div>
//     `;
// }
// dataGroup.map(({ id, imgSrc, title, subTitle }) => {
//   productList.innerHTML += `
//     <div class="single-product" id="${id}">
//         <img src="${imgSrc}.png" alt="${imgSrc}" />
//         <h2>
//         ${title}
//         </h2>
//         <p>
//         ${subTitle}
//         </p>
//       </div>
//     `;
// });

const arr = [
  {
    id: 1,
    imgSrc: "blogimg",
    title: "Up",
    subTitle: "lorem ",
  },
  {
    id: 2,
    imgSrc: "blogimg2",
    title: "down",
    subTitle: "lorem 2",
  },
  {
    id: 3,
    imgSrc: "blogimg3",
    title: "right",
    subTitle: "lorem 3",
  },
];
// console.log(arr[0].title);
// console.log(arr);
// let { id, imgSrc, title, subTitle } = arr;
// console.log(arr);
arr.map((x) => {
  console.log(x);
});
