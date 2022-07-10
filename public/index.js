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

      if (items) document.getElementById('board').innerHTML ="";
      for (let i = 0; i < items.length; i++) {
        createCard(board, items[i]);        
      }
    });
    shop_box.appendChild(li);
  }
};

const init = async () => {
  const shops = await getShops();
  addShop(shops);
};

init();

const cart = async () => {
  window.location.href = "/cart.html"
}