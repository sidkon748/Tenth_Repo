const sizeSelector = document.getElementById('size-selector');
const productPrice = document.getElementById('product-price');
const purchaseButton = document.getElementById('purchase-button');

// EventListener updates the price and button when the size is changed
sizeSelector.addEventListener('change', function () {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const selectedPrice = selectedOption.value;  // Get the price from the option value
    const availability = selectedOption.getAttribute('data-availability'); // Get availability status

    productPrice.textContent = `$${selectedPrice}`;  // Update the price

    // Disable the button if the selected size is out of stock
    purchaseButton.disabled = (availability === 'out-of-stock');
});

// Add event listener for the purchase button
purchaseButton.addEventListener('click', function () {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const availability = selectedOption.getAttribute('data-availability'); // Get availability status

    // if else statement for if availability is in stock and logs different statements for both
    if (availability === 'in-stock') {
        console.log('Thank you for your purchase!');
    } else {
        console.log('This product is currently out of stock and cannot be purchased.');
    }
});

// Initial state check on page load
sizeSelector.dispatchEvent(new Event('change'));
