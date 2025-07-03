document.getElementById('emailForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    status: form.status.value,
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    position: form.position.value.trim()
  };

  const preview = {
    selected: `Dear ${data.name},\n\nWe are pleased to inform you that you have been selected for the position of ${data.position}.\n\nPlease reply to this email to confirm your acceptance.\n\nBest regards,\nHR Team`,
    rejected: `Dear ${data.name},\n\nThank you for applying for the position of ${data.position}.\n\nWe regret to inform you that we have decided to move forward with other candidates.\n\nBest regards,\nHR Team`
  };

  document.getElementById('preview').innerText = preview[data.status];

  const confirmed = confirm("Do you want to send this email?");
  if (!confirmed) return;

  try {
    const res = await fetch('/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const text = await res.text();
    document.getElementById('message').innerText = text;
  } catch (err) {
    document.getElementById('message').innerText = 'Error sending email.';
  }
});
