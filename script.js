const form = document.getElementById('login-form');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://jurisrx-api.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      result.textContent = '✅ Login successful!';
      console.log(data);
    } else {
      result.textContent = '❌ Login failed: ' + (data.detail || 'Unknown error');
    }
  } catch (error) {
    result.textContent = '⚠️ Error: ' + error.message;
  }
});
