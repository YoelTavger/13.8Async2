async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data.length);
  let i = 0;
  data.forEach((element) => {
    const product = document.createElement("div");
    document.body.appendChild(product);
    product.textContent = element.title;
    console.log(data.title);
  });
}
getProducts();
