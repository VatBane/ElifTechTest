const signUp = async () => {
  const login = document.getElementById('loginUp').value;
  const pass = document.getElementById('passUp').value;
  if (!login || !pass) {
    alert('provide credintials');
    return;
  } 

  const res = await fetch('/api/v1/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login,
      password: pass
    })
  });

  if(!res.ok) {
    let msg = await res.json();
    alert(msg.msg);
  }
} 

const signIn = () => {
  window.location.href = '/';
} 
