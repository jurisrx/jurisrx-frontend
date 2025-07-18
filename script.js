document.getElementById('ask-button').addEventListener('click', async () => {
  const question = document.getElementById('question').value;
  const answerBox = document.getElementById('answer-box');

  try {
    const res = await fetch('https://jurisrx-backend.onrender.com/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    if (res.ok) {
      answerBox.innerHTML = data.answer || "✅ Answer received.";
    } else {
      answerBox.innerHTML = "❌ Error: " + (data.detail || "Unknown");
    }
  } catch (err) {
    answerBox.innerHTML = "⚠️ Request failed: " + err.message;
  }
});
