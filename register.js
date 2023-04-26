/*show password*/
function showPassword() {
    var passwordField = document.getElementById("password");
    var showPasswordButton = document.getElementById("showPasswordButton");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      showPasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordField.type = "password";
      showPasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }

  /*show confirm password*/
  function showHideConfirmPassword() {
    var passwordField = document.getElementById("confirmPassword");
    var showHideButton = document.getElementById("showConfirmPasswordButton");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      showHideButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordField.type = "password";
      showHideButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }
  
  var showHideButton = document.getElementById("showConfirmPasswordButton");
  showHideButton.addEventListener("click", showHideConfirmPassword);
  
/*create account*/
// Select the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Show a Sweet Alert 2 success message
  Swal.fire({
    icon: 'success',
    title: 'Sign Up Successful!',
    text: 'You have successfully signed up.',
    confirmButtonText: 'OK'
  }).then(() => {
    // Redirect to login.html
    window.location.href = 'login.html';
  });
});
