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

  fillOrderBoard(items.length);
}

const init = () => {
  showItems();
}

init()

const submitOrder = async () => {
  window.localStorage.clear();

  for (let i = 0; i < items.length; i++) {
    const amount = document.getElementById(`${items[i]._id}`).value;
    items[i].amount = amount;
    console.log(amount);
  }

  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const phone = document.getElementById('phoneInput').value;
  const address = document.getElementById('addressInput').value;

  await fetch('/api/v1/cart', {
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
}