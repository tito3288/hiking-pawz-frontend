const productArray = [
  {
    id: "1",
    img: "testCollar3.jpeg",
    title: "Collar 1",
    price: 19.99,
    page: "Page1",
  },
  {
    id: "2",
    img: "testCollar3.jpeg",
    title: "Collar 2",
    price: 19.99,
    page: "Page2",
  },
  {
    id: "3",
    img: "testCollar3.jpeg",
    title: "Collar 3",
    price: 19.99,
    page: "Page3",
  },
  {
    id: "4",
    img: "testCollar3.jpeg",
    title: "Collar 4",
    price: 19.99,
    page: "Page1",
  },
  {
    id: "5",
    img: "testCollar3.jpeg",
    title: "Collar 5",
    price: 19.99,
    page: "Page1",
  },
  {
    id: "6",
    img: "testCollar3.jpeg",
    title: "Collar 6",
    price: 19.99,
    page: "Page1",
  },
  {
    id: "7",
    img: "testCollar3.jpeg",
    title: "Collar 7",
    price: 19.99,
    page: "Page1",
  },
  {
    id: "8",
    img: "testCollar3.jpeg",
    title: "Collar 8",
    price: 19.99,
    page: "Page1",
  },
  {
    id: "9",
    img: "testCollar3.jpeg",
    title: "Collar 9",
    price: 19.99,
    page: "Page1",
  },
];

function getProductData(id) {
  let foundItem = productArray.find((value) => {
    return value.id === id;
  });

  if (foundItem === undefined) {
    console.log("Product was not found..");
    return undefined;
  }

  return foundItem;
}

export { productArray, getProductData };
