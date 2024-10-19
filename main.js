const sizeSelector = document.getElementById('size-selector');
const productPrice = document.getElementById('product-price');

// Update the price when the size is changed
sizeSelector.addEventListener('change', function () {
    const selectedPrice = sizeSelector.value;  // Get the price from the option value
    productPrice.textContent = `$${selectedPrice}`;  // Update the displayed price
});


