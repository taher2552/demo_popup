// Get the modal element
var customModal = document.getElementById("customModal");

// Get the button that opens the modal
var openCustomModalBtn = document.getElementById("openCustomModal");

// Get the close button element
var closeCustomModalBtn = document.getElementsByClassName("modal-close")[0];

// Function to open the modal
openCustomModalBtn.onclick = function () {
  customModal.style.display = "block";
};

// Function to close the modal
closeCustomModalBtn.onclick = function () {
  customModal.style.display = "none";
};

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target == customModal) {
    customModal.style.display = "none";
  }
};
