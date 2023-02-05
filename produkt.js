/* får fat i produktet */
const id = 1532;
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
/* billede */
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
/* res er forkortelse for response */
function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#model2").textContent = produkt.productdisplayname;
  document.querySelector("#mærke").textContent = produkt.brandname;
  document.querySelector("#farve").textContent = produkt.basecolour;
  document.querySelector("#produktionsår").textContent = produkt.productionyear;

  document.querySelector("#produktBillede").src = imagePath;
}

hentData();
