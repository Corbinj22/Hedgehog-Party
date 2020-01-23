var hedgehogName = document.querySelector('.hedgehog-name');
var hedgehogNumber = document.querySelector('.hedgehog-number');
var hedgehogAllergies = document.querySelector('.hedgehog-allergies');
var inviteBtn = document.querySelector('#invite-btn');
var uninviteBtn = document.querySelector('.univite-btn');
var guestList = document.getElementById('guest-table');
var userInputField = document.querySelector('.left-bottom-box');

guestList.addEventListener('click', removeGuest);
userInputField.addEventListener('keyup', ableInviteButton);
inviteBtn.addEventListener('click', function() {
  saveGuestInput();
  resetInputField();
});

function removeGuest(e) {
  if(e.target.classList.contains('univite-btn')) {
    e.target.closest('.test').remove();
  }
}

function ableInviteButton() {
 if((hedgehogName.value != '') && (hedgehogNumber.value != '') && (hedgehogAllergies.value != '')) {
   inviteBtn.removeAttribute('disabled');
 }
}

function saveGuestInput() {
  var newGuest = new Guest(hedgehogName.value, hedgehogNumber.value, hedgehogAllergies.value);
  console.log(newGuest);
  var guestRow = `<tr class="test">
    <td>${newGuest.name}</td>
    <td>${newGuest.hoglets}</td>
    <td>${newGuest.allergies}</td>
    <td><button class="univite-btn" type="button" name="button">UNINVITE</button></td>
  </tr>`;
  guestList.insertAdjacentHTML('beforeend', guestRow);
}

function resetInputField() {
  hedgehogName.value = '';
  hedgehogNumber.value = '';
  hedgehogAllergies.value = '';
  inviteBtn.setAttribute('disabled', '');
}
