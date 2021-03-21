<?php include('header-menu.php') ?>
<main>
    <!-- Header -->
    <header class="centered">
        <div class="header-title">Shopping cart</div>
    </header>

    <div class="cart-block centered">
        <div class="cart-block__items">
            <div class="cart-block__item">
                <img class="cart-block__img" src="img/cart01.jpg" alt="product">
                <div class="cart-block__text">
                    <div class="cart-block__item-name">MANGO peOPLE T-SHIRT</div>
                    <ul class="cart-block__desc">
                        <li>
                            <div class="cart-block__desc-item">Price: <span class="accent">$300</span></div>
                        </li>
                        <li>
                            <div class="cart-block__desc-item">Color: <span class="muted">Red</span></div>
                        </li>
                        <li>
                            <div class="cart-block__desc-item">Size: <span class="muted">Xl</span></div>
                        </li>
                        <li>
                            <div class="cart-block__desc-item">Quantityd: <input class="cart-block__count" type="number" value="2"></div>
                        </li>
                    </ul>
                </div>
                <div class="cart-block__close">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757" />
                    </svg>
                </div>
            </div>
            <div class="cart-block__item">
                <img class="cart-block__img" src="img/cart02.jpg" alt="product">
                <div class="cart-block__text">
                    <div class="cart-block__item-name">MANGO peOPLE T-SHIRT</div>
                    <ul class="cart-block__desc">
                        <li>
                            <div class="cart-block__desc-item">Price: <span class="accent">$300</span></div>
                        </li>
                        <li>
                            <div class="cart-block__desc-item">Color: <span class="muted">Red</span></div>
                        </li>
                        <li>
                            <div class="cart-block__desc-item">Size: <span class="muted">Xl</span></div>
                        </li>
                        <li>
                            <div class="cart-block__desc-item">Quantityd: <input class="cart-block__count" type="number" value="2"></div>
                        </li>
                    </ul>
                </div>
                <div class="cart-block__close">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757" />
                    </svg>
                </div>
            </div>
            <div class="button-block">
                <a href="#" class="button button__cart-manage">CLEaR SHOPPING CART</a>
                <a href="#" class="button button__cart-manage">CoNTINUE SHOPPING</a>
            </div>
        </div>
        <div class="cart-block__form">
            <form action="#" class="form-adress">
                <label for="#">SHIPPING ADRESS</label>
                <input type="text" placeholder="Country">
                <input type="text" placeholder="State">
                <input type="text" placeholder="Postcode / Zip">
                <a href="#" class="button button__adress">GET A QUOTE</a>
            </form>
            <div class="checkout">
                <div class="checkout__sub-total">SUB TOtAL<span class="tab">$900</span></div>
                <div class="checkout__grand-total">GRAND TOTaL<span class="tab accent bold">$900</span></div>
                <div class="checkout__line"></div>
                <a href="#" class="button button__checkout">PROCEeD TO CHECKOUT</a>
            </div>
        </div>
    </div>


    <?php include('subscriber.php') ?>
</main>
<?php include('footer.php') ?>
</body>

</html>