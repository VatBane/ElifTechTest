const init = async () => {
  const panel = document.getElementById('orders');

  const res = await fetch('/api/v1/history');
  console.log(await res.json());
}

init();