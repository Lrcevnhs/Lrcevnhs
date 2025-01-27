// admin.js
document.getElementById('admin-login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if credentials are correct
  if (email === 'Lrcevnhs@gmail.com' && password === 'LrcAdminStaff@evnhs') {
    window.location.href = 'admin-dashboard.html'; // Redirect to dashboard
  } else {
    alert('Invalid login credentials');
  }
});
