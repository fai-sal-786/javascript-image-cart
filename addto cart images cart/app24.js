let cart = []; // Initialize cart

    function addItemToCart(itemName, price) {
      cart.push({ name: itemName, price: price }); // Add item to cart
      updateCartUI(); // Update cart UI
    }

    function updateCartUI() {
      const cartItemsElement = document.getElementById('cart-items');
      const cartTotalElement = document.getElementById('cart-total');

      cartItemsElement.innerHTML = ''; // Clear existing cart items
      let totalPrice = 0;

      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
      });

      cartTotalElement.textContent = `$${totalPrice}`; // Update total price
    }
  
