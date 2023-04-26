
/*modal checkbox*/
function disableCheckboxes(checkbox) {
    var checkboxes = document.getElementsByName('option');
    for (var i=0; i<checkboxes.length; i++) {
      if (checkboxes[i] != checkbox) {
        checkboxes[i].disabled = checkbox.checked;
      }
    }
  }
  /*logout*/
  function logout() {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to the login page
        window.location.href = 'login.html';
      }
    })
  }

  function addToCart() {
    const confirmButton = document.getElementById('confirm-button');
  confirmButton.addEventListener('click', () => {
    Swal.fire({
      title: 'Item added to cart!',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false
    })
  })
};