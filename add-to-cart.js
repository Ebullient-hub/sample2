/*Display cart with checkout*/
        function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = '';
  
    let subtotal = 0;
  
    cartItems.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.size}</td>
        <td><div style="background-color: ${item.color}; width: 30px; height: 30px;"></div></td>
        <td>${item.quantity}</td>
        <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
      `;
      cartTable.appendChild(row);
  
      subtotal += item.price * item.quantity;
    });
  
    document.getElementById('subtotal').innerHTML = `&#8369;${subtotal.toFixed(2)}`;
  }
  
  function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    cartItems.splice(index, 1);
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    displayCart();
  }
  
  function checkout() {
    // Add your checkout logic here
    Swal.fire({
      title: 'Checkout Success!',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
    });
    localStorage.removeItem('cart');
    displayCart();
  }
  
  displayCart();