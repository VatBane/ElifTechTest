const createItem = async (panel, id) => {
  const res = await fetch('/api/v1/history/' + id);
  let order = await res.json();
  //order = order.order;
  console.log(order);
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