document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = [];
    const stockElements = document.querySelectorAll('.product-item');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            const productElement = this.closest('.product-item');
            const stockElement = productElement.querySelector('.stock');
            let stock = parseInt(stockElement.textContent);

            if (stock > 0) {
                stock -= 1;
                stockElement.textContent = stock;
                addProductToCart(productName, productPrice);
            } else {
                alert('Out of stock');
            }
        });
    });

    function addProductToCart(productName, productPrice) {
        const existingProduct = cartItems.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cartItems.push({ name: productName, price: productPrice, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        const cartList = document.getElementById('cartItems');
        cartList.innerHTML = '';
        let totalPrice = 0;
        let cartSummary = '';

        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            deleteButton.addEventListener('click', function() {
                removeProductFromCart(item.name);
                updateStock(item.name, item.quantity);
                updateCart();
            });
            li.appendChild(deleteButton);
            cartList.appendChild(li);
            totalPrice += parseFloat(item.price) * item.quantity;
            cartSummary += `${item.name} x ${item.quantity}, `;
        });

        const totalPriceElement = document.getElementById('totalPrice');
        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

        const cartSummaryElement = document.getElementById('cartSummary');
        cartSummaryElement.textContent = `You bought: ${cartSummary.slice(0, -2)}`;
    }

    function removeProductFromCart(productName) {
        const productIndex = cartItems.findIndex(item => item.name === productName);
        if (productIndex !== -1) {
            cartItems.splice(productIndex, 1);
        }
    }

    
    

    function updateStock(productName, quantity) {
        stockElements.forEach(element => {
            if (element.querySelector('.add-to-cart').getAttribute('data-product') === productName) {
                const stockElement = element.querySelector('.stock');
                stockElement.textContent = parseInt(stockElement.textContent) + quantity;
            }
        });
    }
});
