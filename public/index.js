let items;

const getShops = async () => {
  const res = await fetch("/api/v1/shops", { method: "GET" });
  const shops = await res.json();
  return shops.shops;
};

const getItems = async (id) => {
  const res = await fetch(`/api/v1/shops/${id}`);
  const items = await res.json();
  return items.products;
};

const sendOrder = async (id) => {
  window.localStorage.setItem(id, id);
};

const addShop = (shops) => {
  const shop_box = document.getElementById("shop-box");
  for (let i = 0; i < shops.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item shop");
    li.setAttribute("id", shops[i].urlAlias);
    li.innerHTML = shops[i].name;

    li.addEventListener("click", async () => {
      items = await getItems(li.id);
      window.dispatchEvent(new Event("resize"));
      // if (items.length < 1) {
      //   document.getElementById('board').innerHTML ="Choose a shop";
      //   return;
      // }
      // document.getElementById('board').innerHTML ="";
      // const rowsNum = Math.floor(items.length / 3) + 1;
      // let row;
      // for (let i = 0; i < items.length; i++) {
      //   if (i%3 == 0) {
      //     row = createRow(document.getElementById('board'), items.length-i);
      //   }
      //   // const col = createColumn(row);
      //   const card = createCard(row, items[i]);
      // }
    });
    shop_box.appendChild(li);
  }
};

const init = async () => {
  const shops = await getShops();
  addShop(shops);
};

init();

window.addEventListener("resize", async () => {
  console.log(window.localStorage);
  if ($(window).width() > 1500) {
    fillBoard(4);
  }
  if ($(window).width() < 1500 && $(window).width() > 1200) {
    fillBoard(3);
  }
  if ($(window).width() < 1200 && $(window).width() > 800) {
    fillBoard(2);
  }
});

const cart = async () => {
  window.location.href = "/cart.html"
}