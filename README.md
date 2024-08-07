HTML FILE
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Java coffee</title>
        
    </head>
    <body>
       <header>
        
        <nav>
            <div class="brand">
                <h1>Java Coffee</h1>
            </div>
            <ul>
                <li><a href="Home.html">Home</a></li>
                <li><a href="Menu.html">Menu</a></li>
                <li><a href="Aboutus,html">About us</a></li>
                <li><a href="Contact.html">Contact</a></li>
            </ul>
            <div class="nav-right">
                <a href="#" class="cart">🛒</a>
                <input type="text" id="searchInput" placeholder="Search...">
                <button id="searchButton">🔍</button>
                <a href="#" id="signInButton" class="sign-in">Sign In</a>
            </div>
        </nav>
       </header>
       <main>
        <section>
            <h1>Welcome to Java coffee</h1>
            <h2>Your daily dose of coffee</h2>
           
            <p>At Java Coffee, we believe that every cup of coffee tells a story...</p>
            <button id="clickButton">Click Me</button>
            <p id="message"></p>

            
            <input type="text" id="searchBar" placeholder="Search for products...">


            <div id="products">
                <h3>Products</h3>
                <div class="product-grid">
                    <div class="product-item" data-stock="10" data-price="7.00">
                    <img src="https://i.pinimg.com/236x/c3/b5/6d/c3b56d0fed74d7667292d5aa4486bc23.jpg" alt="Coffee" width="300" height="300">
                    <p>Coffee -$7.00</p>
                    <button class="add-to-cart" data-product="Coffee">Add to Cart</button>
                    <p>Stock: <span class="stock">10</span></p>
                </div>
                <div class="product-item" data-stock="6" data-price="10.00">
                    <img src="https://i.pinimg.com/236x/4e/a4/89/4ea489445c5b485bca0551fef238165b.jpg" alt="Muffin" width="300" height="300">
                    <p>Muffin -$10.00</p>
                    <button class="add-to-cart" data-product="Muffin">Add to Cart</button>
                    <p>Stock: <span class="stock">6</span></p>
                </div>
                <div class="product-item" data-stock="4" data-price="11.00">
                    <img src="https://i.pinimg.com/236x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg" alt="Cake" width="300" height="300">
                    <p>Cake -$11.00</p>
                    <button class="add-to-cart" data-product="Cake">Add to Cart</button>
                    <p>Stock: <span class="stock">4</span></p>
                </div>
                <div class="product-item" data-stock="10" data-price="6.50">
                    <img src="https://i.pinimg.com/236x/b5/bb/71/b5bb71080ab92a6180da13e20c6b2c14.jpg" alt="Bread" width="300" height="300">
                    <p>Bread -$6.50</p>
                    <button class="add-to-cart" data-product="Bread">Add to Cart</button>
                    <p>Stock: <span class="stock">10</span></p>
                </div>
                <div class="product-item" data-stock="20" data-price="2.50">
                <img src="https://i.pinimg.com/236x/8a/50/9e/8a509e80a255b25b54774a4437debf0e.jpg" alt="Espresso" width="300" height="300">
                    <p>Espresso -$2.50</p>
                    <button class="add-to-cart" data-product="Espresso" data-price="2.50">Add to Cart</button>
                    <p>Stock: <span class="stock">20</span></p>
                </div>
                
                <div class="product-item" data-stock="15" data-price="3.00">
                    <img src="https://i.pinimg.com/236x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg" alt="Americano" width="300" height="300">
                    <p>Americano -$3.00</p>
                    <button class="add-to-cart" data-product="Americano" data-price="3.00">Add to Cart</button>
                    <p>Stock: <span class="stock">15</span></p>
                </div>
                
                <div class="product-item" data-stock="10" data-price="3.50">
                    <img src="https://i.pinimg.com/236x/86/50/a2/8650a2e29ec10a92a53af08f6928ec4a.jpg" alt="Latte" width="300" height="300">
                    <p>Latte -$3.50</p>
                    <button class="add-to-cart" data-product="Latte" data-price="3.50">Add to Cart</button>
                    <p>Stock: <span class="stock">10</span></p>
                </div>
                
                <div class="product-item" data-stock="12" data-price="3.75">
                    <img src="https://i.pinimg.com/236x/41/3e/c7/413ec74a68481ef01743fe316c867c48.jpg" alt="Cappuccino" width="300" height="300">
                    <p>Cappuccino -$3.75</p>
                    <button class="add-to-cart" data-product="Cappuccino" data-price="3.75">Add to Cart</button>
                    <p>Stock: <span class="stock">12</span></p>
                </div>
                
                <div class="product-item" data-stock="8" data-price="4.00">
                    <img src="https://i.pinimg.com/474x/4b/74/f6/4b74f6ab01e356515b6a60898390b27d.jpg" alt="Macchiato" width="300" height="300">
                    <p>Macchiato -$4.00</p>
                    <button class="add-to-cart" data-product="Macchiato" data-price="4.00">Add to Cart</button>
                    <p>Stock: <span class="stock">8</span></p>
                </div>
                
                <div class="product-item" data-stock="5" data-price="4.50">
                    <img src="https://i.pinimg.com/236x/1f/85/72/1f85723779ea27e2e2ef06340fa52cca.jpg" alt="Mocha" width="300" height="300">
                    <p>Mocha -$4.50</p>
                    <button class="add-to-cart" data-product="Mocha" data-price="4.50">Add to Cart</button>
                    <p>Stock: <span class="stock">5</span></p>
                </div>
                
                <div class="product-item" data-stock="18" data-price="3.25">
                    <img src="https://i.pinimg.com/236x/2d/44/3b/2d443b1934c04acbeb2ba8f5a6f8989a.jpg" alt="Flat White" width="300" height="300">
                    <p>Flat White -$3.25</p>
                    <button class="add-to-cart" data-product="Flat White" data-price="3.25">Add to Cart</button>
                    <p>Stock: <span class="stock">18</span></p>
                </div>
                
                <div class="product-item" data-stock="25" data-price="3.00">
                    <img src="https://i.pinimg.com/236x/85/b0/b6/85b0b61e74aca6af6dc2fca551c23487.jpg" alt="Cold Brew" width="300" height="300">
                    <p>Cold Brew -$3.00</p>
                    <button class="add-to-cart" data-product="Cold Brew" data-price="3.00">Add to Cart</button>
                    <p>Stock: <span class="stock">25</span></p>
                </div>
                
                <div class="product-item" data-stock="22" data-price="2.75">
                    <img src="https://i.pinimg.com/236x/b4/94/67/b494678e5b41483ad9249fd5c4f2c4e1.jpg" alt="Iced Coffee" width="300" height="300">
                    <p>Iced Coffee -$2.75</p>
                    <button class="add-to-cart" data-product="Iced Coffee" data-price="2.75">Add to Cart</button>
                    <p>Stock: <span class="stock">22</span></p>
                </div>
                
                <div class="product-item" data-stock="30" data-price="3.50">
                    <img src="https://i.pinimg.com/236x/03/f3/b5/03f3b5ca327dd80cc9729ad529bab37e.jpg" alt="Coffee Cake" width="300" height="300">
                    <p>Coffee Cake -$3.50</p>
                    <button class="add-to-cart" data-product="Coffee Cake" data-price="3.50">Add to Cart</button>
                    <p>Stock: <span class="stock">30</span></p>
                </div>
                
                <div class="product-item" data-stock="25" data-price="1.75">
                    <img src="https://i.pinimg.com/236x/70/1e/d7/701ed7f21ffe4c51a94e62efbb11565c.jpg" alt="Bagels" width="300" height="300">
                    <p>Bagels -$1.75</p>
                    <button class="add-to-cart" data-product="Bagels" data-price="1.75">Add to Cart</button>
                    <p>Stock: <span class="stock">25</span></p>
                </div>
                
                <div class="product-item" data-stock="20" data-price="2.25">
                    <img src="https://i.pinimg.com/236x/b3/f9/8a/b3f98ae0b6710dcc419a8b3e476b4f3d.jpg" alt="Croissants" width="300" height="300">
                    <p>Croissants -$2.25</p>
                    <button class="add-to-cart" data-product="Croissants" data-price="2.25">Add to Cart</button>
                    <p>Stock: <span class="stock">20</span></p>
                </div>
                
                <div class="product-item" data-stock="18" data-price="2.00">
                    <img src="https://i.pinimg.com/236x/be/62/b2/be62b2b99cce462d3570e658f24bb83e.jpg" alt="Water" width="300" height="300">
                    <p>Water -$2.00</p>
                    <button class="add-to-cart" data-product="Water" data-price="2.00">Add to Cart</button>
                    <p>Stock: <span class="stock">18</span></p>
                </div>
                
                <div class="product-item" data-stock="16" data-price="1.50">
                    <img src="https://i.pinimg.com/236x/a2/54/ab/a254ab3176f62d952a39db1c7a2a6a2b.jpg" alt="Cookies" width="300" height="300">
                    <p>Cookies -$1.50</p>
                    <button class="add-to-cart" data-product="Cookies" data-price="1.50">Add to Cart</button>
                    <p>Stock: <span class="stock">16</span></p>
                </div>
                
                <div class="product-item" data-stock="40" data-price="2.00">
                    <img src="https://i.pinimg.com/236x/e7/17/59/e717597c04d365318c440cdc9e4b23b8.jpg" alt="Earl Grey Tea" width="300" height="300">
                    <p>Earl Grey Tea -$2.00</p>
                    <button class="add-to-cart" data-product="Earl Grey Tea" data-price="2.00">Add to Cart</button>
                    <p>Stock: <span class="stock">40</span></p>
                </div>
                
                <div class="product-item" data-stock="30" data-price="2.25">
                    <img src="https://i.pinimg.com/236x/fe/f8/70/fef870df86d2139b64d809ce089cb965.jpg" alt="Green Tea" width="300" height="300">
                    <p>Green Tea -$2.25</p>
                    <button class="add-to-cart" data-product="Green Tea" data-price="2.25">Add to Cart</button>
                    <p>Stock: <span class="stock">30</span></p>
                </div>
                
                <div class="product-item" data-stock="35" data-price="2.50">
                    <img src="https://i.pinimg.com/474x/db/65/39/db65394f1f54a18db5dbf051320cdbf0.jpg" alt="Herbal Tea" width="300" height="300">
                    <p>Herbal Tea -$2.50</p>
                    <button class="add-to-cart" data-product="Herbal Tea" data-price="2.50">Add to Cart</button>
                    <p>Stock: <span class="stock">35</span></p>
                </div>
                
                <div class="product-item" data-stock="25" data-price="4.00">
                    <img src="https://i.pinimg.com/236x/f5/0f/8e/f50f8e381c1a85e9e9a0a31ddd8463cb.jpg" alt="Smoothie" width="300" height="300">
                    <p>Smoothie -$4.00</p>
                    <button class="add-to-cart" data-product="Smoothie" data-price="4.00">Add to Cart</button>
                    <p>Stock: <span class="stock">25</span></p>
                </div>
                <div class="product-item" data-stock="35" data-price="6.50">
                    <img src="https://i.pinimg.com/236x/97/84/40/978440fe09d65d3d1c461e614bd150d5.jpg" alt="Matcha" width="300" height="300">
                    <p>Matcha -$6.50</p>
                    <button class="add-to-cart" data-product="Matcha" data-price="6.50">Add to Cart</button>
                    <p>Stock: <span class="stock">35</span></p>
                </div>
                
                <div class="product-item" data-stock="25" data-price="4.00">
                    <img src="https://i.pinimg.com/236x/b2/1c/51/b21c5134b0cf15d08d7e18418d6b401f.jpg" alt="Pastary" width="300" height="300">
                    <p>Smoothie -$5.00</p>
                    <button class="add-to-cart" data-product="Pastary" data-price="4.00">Add to Cart</button>
                    <p>Stock: <span class="stock">25</span></p>
                </div>
            </div>

            <h3>Shopping Cart</h3>
            <ul id="cartItems"></ul>
            <p id="totalPrice"></p>
            <p id="cartSummary"></p>
          
        </section>
       </main>
       <footer>
        <p>© 2024 Java Coffe. All rights reserved.</p>
    </footer>
    <div id="signInModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Sign In</h2>
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">
            <button id="submitSignIn">Sign In</button>
        </div>
    </div>

    <script src="script.js"></script>
       
</body>
</html>


CSS FILE
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(https://i.pinimg.com/236x/d1/c8/93/d1c89356cae6997d236a217bf65b79cb.jpg);
    background-repeat: no-repeat;
}

nav {
    background-color: #4B2E2C; /* Dark brown */
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin: 0 10px;
}

nav .nav-right {
    display: flex;
    align-items: center;
}

main {
    padding: 20px;
    text-align: center;
}

#products {
    margin-top: 20px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-items: center;
}

.product-item {
    text-align: center;
}

.product-item img {
    width: 300px;  /* Standard product image size */
    height: 300px; /* Standard product image size */
    object-fit: cover; /* Ensures the image covers the entire area without stretching */
}

.product-item p {
    margin-top: 10px;
    font-size: 16px;
    color: #333;
}

/* Modal styling */
.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 300px;
    animation: fadeIn 0.5s;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

button {
    padding: 10px 20px;
    background-color: #4B2E2C;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #3E2422;
}

/* Example transition */
nav ul li a {
    color: white;
    text-decoration: none;
    padding: 14px 20px;
    display: block;
    transition: background-color 0.3s ease-in-out;
}

nav ul li a:hover {
    background-color: #575757;
}

/* Fade in animation */
@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}

#cartItems button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
}

#cartItems button:hover {
    background-color: darkred;
}
footer {
text-align: center;
background-color: #4B2E2C;
color: white;
}
JAVA FILE
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
