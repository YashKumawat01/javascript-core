// 1️⃣ Create array of products
const products = [
  { id: 1, name: "Soap", price: 100 },
  { id: 2, name: "Tea", price: 400 },
  { id: 3, name: "Ghee", price: 800 },
  { id: 4, name: "Oil", price: 500 }
];


// 2️⃣ Add GST (12%) using map
const productsWithGST = products.map(p => ({
  ...p,
  price: p.price * 1.12
}));


// 3️⃣ Filter products between ₹300 and ₹700
const filteredProducts = productsWithGST.filter(
  p => p.price >= 300 && p.price <= 700
);


// 4️⃣ Calculate average price using reduce
const totalPrice = productsWithGST.reduce(
  (sum, p) => sum + p.price,
  0
);

const averagePrice = totalPrice / productsWithGST.length;


// 5️⃣ Update one product immutably (rename id = 2)
const updatedProducts = products.map(p =>
  p.id === 2
    ? { ...p, name: "Green Tea" }
    : p
);


// OUTPUT
console.log("Original Products:", products);
console.log("With GST:", productsWithGST);
console.log("Filtered (300–700):", filteredProducts);
console.log("Average Price:", averagePrice);
console.log("Updated Products:", updatedProducts);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//                                      Code Without Spread Operator


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const product = [
  { id: 1, name: "Soap", price: 100 },
  { id: 2, name: "Tea", price: 400 },
  { id: 3, name: "Ghee", price: 800 },
  { id: 4, name: "Oil", price: 500 }
];



const productWithGST = products.map(p => {
  return {
    id: p.id,
    name: p.name,
    price: p.price * 1.18
  };
});



const filteredProduct = productsWithGST.filter(p => {
  return p.price >= 300 && p.price <= 700;
});



const total_Price = productsWithGST.reduce((sum, p) => {
  return sum + p.price;
}, 0);

// const average_Price = totalPrice / productsWithGST.length;



const updated_Products = products.map(p => {
  if (p.id === 4) {
    return {
      id: p.id,
      name: p.name,
      price: p.price + 100
    };
  }
  return {
    id: p.id,
    name: p.name,
    price: p.price
  };
});


// OUTPUT
console.log("Original:", products);
console.log("With GST:", productsWithGST);
console.log("Filtered:", filteredProducts);
// console.log("Average Price:", averagePrice);
console.log("Updated:", updatedProducts);
