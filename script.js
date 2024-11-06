// Update time and date dynamically
function updateTime() {
    const now = new Date();
    document.getElementById('day').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('date').textContent = now.toLocaleDateString();
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  
  // Open and close chatbot modal
  function openChatbot() {
    document.getElementById('chatbot-modal').style.display = 'block';
  }
  
  function closeChatbot() {
    document.getElementById('chatbot-modal').style.display = 'none';
  }
  function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    startMenu.style.display = (startMenu.style.display === 'block') ? 'none' : 'block';
  }
  // Function to handle sending an email (for demo purposes only)
  function sendEmail() {
    const message = document.getElementById('user-message').value;
    alert("Sending email with message: " + message);
    // Implement email sending logic here (e.g., EmailJS)
    closeChatbot();
  }
  
 