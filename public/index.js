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

const createCard = (row) => {
  const card = $(`<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`).appendTo(row);

  // const card = document.createElement('div')
  // card.setAttribute('class', 'card');
  // card.setAttribute('style', 'width: 18rem;');

  // const img = document.createElement('img');
  // img.setAttribute('class', 'card-img-top');
  // // NEEEEEED TO ADD PHOTO

  // const body = document.createElement('div');
  // body.setAttribute('class', 'card-body');

  // const title = document.createElement('h5');
  // title.setAttribute('class', 'card-title');

  console.log(card);
};

const createRow = (board) => {
  const row = $(`<div class='row'></div>`).appendTo(board)
  return row;
}

const addShop = (shops) => {
  const shop_box = document.getElementById("shop-box");
  for (let i = 0; i < shops.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item shop");
    li.setAttribute("id", shops[i].urlAlias);
    li.innerHTML = shops[i].name;

    li.addEventListener("click", async () => {
      const items = await getItems(li.id);
      const rowsNum = Math.floor(items.length / 3) + 1;
      let row;
      for (let i = 0; i < items.length; i++) {
        if (i%3==0) {
          row = createRow(document.getElementById('board'));
        }
        console.log(row);
        const card = createCard(row);
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
