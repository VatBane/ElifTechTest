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
  console.log(id);
}

const createCard = (row, item) => {
  const card = $(`<div class="card item" style="width: 18rem;">
  <img src="./img/${item.short}.jpg" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <button class="btn btn-primary" onclick="sendOrder('${item._id}')">Buy</button>
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
};

const createRow = (board, size) => {
  let row;
  if (size < 3) {
    row = $(`<div class='row item-row'></div>`).appendTo(board);
  } else {
    row = $(`<div class='row item-row full'></div>`).appendTo(board);
  }
  return row;
}

// const createColumn = (row) => {
//   let col;
//   col = $(`<div class="col-3 item"></div>`).appendTo(row);
//   return col;
// }

const fillBoard = (num) => {
      if (items.length < 1) {
        document.getElementById('board').innerHTML ="Choose a shop";
        return;
      }
      document.getElementById('board').innerHTML ="";
      const rowsNum = Math.floor(items.length / num) + 1;
      let row;
      for (let i = 0; i < items.length; i++) {
        if (i%num == 0) {
          row = createRow(document.getElementById('board'), items.length-i);
        }
        const card = createCard(row, items[i]);
      }
}

const addShop = (shops) => {
  const shop_box = document.getElementById("shop-box");
  for (let i = 0; i < shops.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item shop");
    li.setAttribute("id", shops[i].urlAlias);
    li.innerHTML = shops[i].name;

    li.addEventListener("click", async () => {
      items = await getItems(li.id);
      window.dispatchEvent(new Event('resize'));
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

window.addEventListener('resize', async ()=>{
  console.log('resize');
  if ($(window).width() > 1500) {
    fillBoard(4);
  } 
  if ($(window).width() < 1500 && $(window).width() > 1200) {
    fillBoard(3)
  } 
  if ($(window).width() < 1200 && $(window).width() > 800) {
    fillBoard(2)
  } 
})