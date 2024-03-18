function displayMessages() {
  var dashboard = document.getElementById('messagesDashboard');
  fetch("https://my-brand-backend-1-g6ra.onrender.com/message", {
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
      data.data.forEach(function(message) {
        var messageElement = document.createElement('div');
        messageElement.innerHTML = `
          <p><strong>Name:</strong> ${message.name}</p>
          <p><strong>Email:</strong> ${message.email}</p>
          <p><strong>Message:</strong> ${message.message}</p>
          <button class="delete-button" data-message-id="${message.id}">Delete</button>
          <hr>
        `;
        dashboard.appendChild(messageElement);
      });
    })
    dashboard.innerHTML = ''; 
  
  }
  
  displayMessages();

  var deleteButton = messageElement.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
      deleteBlog(message._id);
  });
  
function deleteMessage(messageId) {
  let token = localStorage.getItem("token")
    fetch(`https://my-brand-backend-1-g6ra.onrender.com/message/${messageId}`, {
        method: 'DELETE',
        mode: 'cors',
        headers:{
          Authorization:token
        }
    })
    .then(response => response.json())
    .then((data) => {
        console.log('Message deleted successfully', data);
       
        fetchMessages();
    })
    .catch(error => {
        console.error('Error deleting message:', error);
        alert('Error deleting message. Please try again later.');
    });
}


  
  
