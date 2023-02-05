//https://kea-alt-del.dk/t7/api/products/

// 1. hente data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=10");
  const data = await response.json();
  //console.log(data);
  // 2. loope // 3. for hver
  data.forEach(showProduct);
}
getData();

function showProduct(product) {
  console.log(product);
  // 4. fange vores template
  const template = document.querySelector("#smallProductTemplate").content;
  // 5. clone
  const copy = template.cloneNode(true);
  // 6. skifte data
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  // 7. appende (tilføje de til DOM)
  document.querySelector("main").appendChild(copy);
}
