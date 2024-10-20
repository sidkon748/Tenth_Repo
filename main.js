const sizeSelector = document.getElementById('size-selector');
const productPrice = document.getElementById('product-price');
const purchaseButton = document.getElementById('purchase-button');

// EventListener updates the price and button when the size is changed
sizeSelector.addEventListener('change', function () {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const selectedPrice = selectedOption.value;  // Get the price from the option value
    const availability = selectedOption.getAttribute('data-availability'); // Get availability status

    productPrice.textContent = `$${selectedPrice}`;  // Update the price

    // if else statement for denying purchase if the selected size is out of stock
    if (availability === 'out-of-stock') {
        purchaseButton.disabled = true;
    } else {
        purchaseButton.disabled = false;
    }
});

// Initial state check on page load
sizeSelector.dispatchEvent(new Event('change'));
