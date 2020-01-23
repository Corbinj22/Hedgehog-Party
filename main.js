var headgehogName = document.querySelector('.headgehog-name');
var headgehogNumber = document.querySelector('.headgehog-number');
var headgehogAllergies = document.querySelector('.headgehog-allergies');
var inviteBtn = document.querySelector('#invite-btn');
var uninviteBtn = document.querySelector('.univite-btn');
var guestList = document.getElementById('guest-table');
var userInputField = document.querySelector('.left-bottom-box');

guestList.addEventListener('click', removeGuest);
userInputField.addEventListener('keyup', ableInviteButton);

function removeGuest(e) {
  if(e.target.classList.contains('univite-btn')) {
    e.target.closest('.test').remove();
  }
}

function ableInviteButton() {
 if((headgehogName != '') && (headgehogNumber != null) && (headgehogAllergies != '')) {
   inviteBtn.removeAttribute('disabled');
 }
}
