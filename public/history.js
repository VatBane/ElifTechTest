const showOrderDetails = (order) => {
  const board = document.getElementById('board');
  board.innerHTML="";

  const info = document.getElementById("info");
  info.innerHTML = "";

  let total = 0;

  for (let i = 0; i < order.products.length; i++) {
    total += parseFloat(order.products[i].price.$numberDecimal);
    const card = $(`<div class="card item" style="width: 18rem;">
    <img src="./img/${order.products[i].short}.jpg" class="card-img-top" alt="${order.products[i].name}">
    <div class="card-body">
      <div class="row justify-content-between">
        <div class="col-8">
          <h5 class="card-title">${order.products[i].name}</h5>
        </div>
        <div class="col-4">
          <h5 class="card-title">${order.products[i].price.$numberDecimal}$</h5>
        </div>
        </div>
        <div>Amount: ${order.products[i].amount}</div>
    </div>
  </div>`).appendTo(board);
  }

  const infoCard = $(`<span>Name: ${order.name}</span> <br>
  <span>Phone: ${order.phone}</span> <br>
  <span>Email: ${order.email}</span> <br>
  <span>Address: ${order.address}</span> <br>
  <span>Total price: ${total}</span>`).appendTo(info);
}

const showOrder = async (id) => {
  const res = await fetch('/api/v1/history/' + id);
  let order = await res.json();
  showOrderDetails(order.order);
}

const createItem = (panel, id) => {
  const item = $(`<div class="oid" onclick="showOrder('${id}')">${id}</div>`).appendTo(panel);
}

const init = async () => {
  const panel = document.getElementById('orders');

  const res = await fetch('/api/v1/history');
  const user = await res.json();
  const orders = user.user.orders;

  for (let i = 0; i < orders.length; i++) {
    createItem(panel, orders[i]);
  }
}

init();