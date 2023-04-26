/* login function*/
function loginUser() {
    // Get the username and password entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are valid
    if (username === "Ebullient" && password === "Ebullient_owner") {
      // Show a success message using SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully logged in.",
      }).then((result) => {
        // If the user clicks the "Continue" button, redirect to the home page
        if (result.isConfirmed) {
          window.location.href = "index.html";
        }
      });
    } else {
      // Show an error message using SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Invalid username or password. Please try again.",
        confirmButtonText: "OK"
      });
    }
  
    // Prevent the form from submitting
    return false;
  }
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