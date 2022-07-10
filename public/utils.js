const createRow = (board, size) => {
  let row;
  if (size < 3) {
    row = $(`<div class='row item-row'></div>`).appendTo(board);
  } else {
    row = $(`<div class='row item-row full'></div>`).appendTo(board);
  }
  return row;
};

const createCard = (row, item) => {
  const card = $(`<div class="card item" style="width: 18rem;">
  <img src="./img/${item.short}.jpg" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <div class="row justify-content-between">
      <div class="col-8">
        <h5 class="card-title">${item.name}</h5>
      </div>
      <div class="col-4">
        <h5 class="card-title">${item.price.$numberDecimal}$</h5>
      </div>
      </div>
    <button class="btn btn-primary" onclick="sendOrder('${item._id}')">Buy</button>
  </div>
</div>`).appendTo(row);
};

const fillBoard = (num) => {
  if (items.length < 1) {
    document.getElementById("board").innerHTML = "Choose a shop";
    return;
  }
  document.getElementById("board").innerHTML = "";
  const rowsNum = Math.floor(items.length / num) + 1;
  let row;
  for (let i = 0; i < items.length; i++) {
    if (i % num == 0) {
      row = createRow(document.getElementById("board"), items.length - i);
    }
    const card = createCard(row, items[i]);
  }
};

const createOrderCard = (row, item) => {
  console.log(item.price.$numberDecimal);
  const card = $(`<div class="card item" style="width: 18rem;">
  <img src="./img/${item.short}.jpg" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <div class="row justify-content-between">
      <div class="col-8">
        <h5 class="card-title">${item.name}</h5>
      </div>
      <div class="col-4">
        <h5 class="card-title">${item.price.$numberDecimal}$</h5>
      </div>
      </div>
      <input type="number" id=${item._id} min="1", max="5">
  </div>
</div>`).appendTo(row);
};

const fillOrderBoard = (num) => {
  if (items.length < 1) {
    document.getElementById("board").innerHTML =
      "Choose some products in the shop";
    return;
  }
  document.getElementById("board").innerHTML = "";
  const rowsNum = Math.floor(items.length / num) + 1;
  let row;
  for (let i = 0; i < items.length; i++) {
    if (i % num == 0) {
      row = createRow(document.getElementById("board"), items.length - i);
    }
    const card = createOrderCard(row, items[i]);
  }
};
