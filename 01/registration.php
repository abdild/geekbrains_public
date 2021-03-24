<?php include('header-menu.php') ?>
<main>
    <!-- Header -->
    <header class="centered">
        <div class="header-title">registration</div>
    </header>

    <div class="cart-block centered">
        <div class="cart-block__form">
            <form action="#" class="form-adress">
                <label for="#">Your name</label>
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
                <div class="genre-flex">
                    <input type="radio" name="genre" id="male">
                    <label for="male">Male</label>
                    <input type="radio" name="genre" id="female">
                    <label for="female">Female</label>
                </div>
                <label for="#" style="margin-top: 33px;">Login details</label>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <p class="form-desc">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
                <input type="submit" value="JOIN NOW&emsp;&rarr;" class="button button__checkout" style="width: 167px;">
            </form>
        </div>
        <div class="registration-block">
            <div class="registration__title">LOYALTy HAS ITS PERKS</div>
            <div class="registration__text">
                Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
            </div>
            <ul>
                <li class="registration__list-item">15% off welcome offer</li>
                <li class="registration__list-item">Free shipping, returns and exchanges on all orders</li>
                <li class="registration__list-item">$10 off a purchase on your birthday</li>
                <li class="registration__list-item">Early access to products</li>
                <li class="registration__list-item">Exclusive offers & rewards</li>
            </ul>
        </div>
    </div>


    <?php include('subscriber.php') ?>
</main>
<?php include('footer.php') ?>
</body>

</html>