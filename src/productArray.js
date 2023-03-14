const productArray = [
  {
    id: "price_1Mb7rFL8hk1dUwiAIvZ3qZbV",
    img: "collar1.jpg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Flair Collar",
    price: 19.99,
    page: "ItemPage",
    description:
      "Our Flair Collar is made for when your furry friend is feeling a little more modern than usual, with it's modern art like patterns and colors it will be hard to look away! ",
  },
  {
    id: "2",
    img: "collar2.jpg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Picturesque Collar",
    price: 19.99,
    page: "Col2",
    description:
      "Our Picturesque Collar looks very attractive in any fur tone or lenght. With these awesome and fun colors, you might want to get two, or one, or just tell a friend, either way we love you and your pooch ♥️",
  },
  {
    id: "3",
    img: "collar3.jpg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Blossom Collar",
    price: 19.99,
    page: "Col3",
    description:
      "Our Blossom Collar was designed as one of our most colorful collars we currently have, with bright and unique different patterns from the inside and out, side to side, cha cha cha! 💃",
  },
  {
    id: "4",
    img: "testCollar3.jpeg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Atlas Collar",
    price: 19.99,
    page: "Col4",
    description:
      "Never lose sigth of your pups even when you're upset at them for chewing your new years resolution, homework etc. With these bright colors our Atlas Collar has to offer!",
  },
  {
    id: "5",
    img: "testCollar3.jpeg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Vintage Collar",
    price: 19.99,
    page: "Col5",
    description:
      "Vintage Collar consists of vintage like patterns. Who said vintage was out of style when you're pups will look so good!",
  },
  {
    id: "6",
    img: "testCollar3.jpeg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Tribal Collar",
    price: 19.99,
    page: "Col6",
    description:
      "We've create our Tribal Collar from inspiration of the Precolumbian Tribal Dogs who where the first to enter North America as our domesticated furry friends. Cool conversation starter and a little history on your pooch neck!",
  },
  {
    id: "7",
    img: "testCollar3.jpeg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Terra Collar",
    price: 19.99,
    page: "Col7",
    description:
      "Our Terra Collar is for the pups that can't keep off messy adventures, with most of it's dark colors and cool designs, very hard to notice dirt spots and you can procrastnate on washing it a little longer!",
  },
  {
    id: "8",
    img: "testCollar3.jpeg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Sunshine Collar",
    price: 19.99,
    page: "Col8",
    description:
      "Our Sunrise Collar is made with a bright yellow and beautiful patterns that can catch the attention of other furry friends. More furry friends equals more play dates!",
  },
  {
    id: "9",
    img: "testCollar3.jpeg",
    gallery: ["collar1.jpg", "collar2.jpg", "collar1.jpg"],
    title: "Spring Collar",
    price: 19.99,
    page: "Col9",
    description:
      "Our Spring Collar with floral designs will make your furry pal stand out from the rest, in a world where every pooch is unique and special!",
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
