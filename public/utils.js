const createCard = (board, item) => {
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
</div>`).appendTo(board);
};

const currentPrice = (price, id) => {
  const amount = document.getElementById(`num${id}`).value;
  const h = document.getElementById(`pr${id}`);
  h.innerHTML = Math.round(price*amount * 100)/100 + "$";
}

const createOrderCard = (board, item) => {
  const price = item.price.$numberDecimal;
  const card = $(`<div class="card item" style="width: 18rem;" id="${item._id}">
  <img src="./img/${item.short}.jpg" class="card-img-top img-fluid" alt="${item.name}">
  <div class="card-body">
    <div class="row justify-content-between">
      <div class="col">
        <h5 class="card-title">${item.name}</h5>
      </div>
      <div class="col">
        <h5 class="card-title" id="pr${item._id}">${price}$</h5>
      </div>
      </div>
      <div class="row justify-content-between">
        <input class="num_input" type="number" id="num${item._id}" min="1", max="5" value="1" onchange="currentPrice('${price}', '${item._id}')">
        <button type="button" class="btn-close" aria-label="Close" onclick="deleteItem('${item._id}')"></button>
      </div>
  </div>
</div>`).appendTo(board);
};
