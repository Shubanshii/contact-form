// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBB52v5io8Oluj3gKkT2BMFs5P8gMIKcHw",
    authDomain: "contactform-e47b7.firebaseapp.com",
    databaseURL: "https://contactform-e47b7.firebaseio.com",
    projectId: "contactform-e47b7",
    storageBucket: "contactform-e47b7.appspot.com",
    messagingSenderId: "753545148011"
  };
  firebase.initializeApp(config);

// Reference messages collection
let messagesRef = firebase.database().ref('messages');

//Listen for form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();

  let name = getInputVal('name');
  let company = getInputVal('company');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let message = getInputVal('message');

  //Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();

}

// Function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, company, email, phone, message) {
  let newMessageRef = messagesRef.push();

  newMessageRef.set({name, company, email, phone, message});
}
