let items = new Array();

const showItems = async () => {
  for (const key in window.localStorage) {
    const id = window.localStorage.getItem(key)
    if (id) {
      const res = await fetch(`/api/v1/cart/${id}`);
      const item = await res.json();
      items.push(item.product)
    }
  }

  for (let i = 0; i < items.length; i++) {
    createOrderCard(document.getElementById('board'), items[i])
  }
}

const init = () => {
  showItems();
}

init()

const submitOrder = async () => {
  for (let i = 0; i < items.length; i++) {
    const amount = document.getElementById(`num${items[i]._id}`).value;
    items[i].amount = amount;
  }

  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const phone = document.getElementById('phoneInput').value;
  const address = document.getElementById('addressInput').value;

  const res = await fetch('/api/v1/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      products: items,
      name: name,
      email: email,
      phone: phone,
      address: address, 
    })
  })

  if (res.ok) {
    for (let i = 0; i < items.length; i++) {
      deleteItem(items[i]._id);
    }
    window.localStorage.clear();
  }
}

function deleteItem (id) {
  const el = document.getElementById(id);
  el.remove();
  window.localStorage.removeItem(id);
}