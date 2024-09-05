//JavaScript for Modal and QR code interaction : 
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('appointment-modal');
  var closeButton = document.querySelector('.close-button');

  // Open Modal : 
  function openBookingForm() {
    modal.style.display = 'flex';
  }

  // Close Modal : 
  closeButton.onclick = function() {
    closeBookingForm();
  };

  // Close Modal when clicking/tapping outside of Modal content : 
  window.onclick = function(event) {
    if(event.target == modal) {
      closeBookingForm();
    }
  };

  function closeBookingForm() {
    modal.style.display = 'none';
  }
});
                          
