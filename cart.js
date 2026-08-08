/* ==========================================
   MAHALAKSHMI HOTELS
   CART.JS
========================================== */

const cartDrawer = document.getElementById("cartDrawer");
const floatingCart = document.getElementById("floatingCart");

/* -----------------------------
   Open Cart
----------------------------- */

floatingCart.addEventListener("click", () => {

    renderCart();

    cartDrawer.classList.add("active");

});

/* -----------------------------
   Close Cart
----------------------------- */

document.addEventListener("click", function(e){

    if(
        cartDrawer.classList.contains("active") &&
        !cartDrawer.contains(e.target) &&
        !floatingCart.contains(e.target)
    ){

        cartDrawer.classList.remove("active");

    }

});

/* -----------------------------
   Render Cart
----------------------------- */

function renderCart(){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length===0){

        cartDrawer.innerHTML=`

        <div class="empty-state">

            <h2>🛒 Cart is Empty</h2>

            <p>

                Add delicious food to begin your order.

            </p>

        </div>

        `;

        return;

    }

    let total=0;

    cartDrawer.innerHTML=`

    <h2 class="cart-title">

        Your Cart

    </h2>

    `;

    cart.forEach(item=>{

        total += item.price * item.quantity;

        cartDrawer.innerHTML +=`

        <div class="cart-item">

            <img src="${item.image}">

            <div class="cart-info">

                <h3>

                    ${item.name}

                </h3>

                <div class="cart-price">

                    ₹${item.price}

                </div>

                <div class="cart-actions">

                    <button
                    class="small-btn"
                    onclick="decreaseQuantity(${item.id})">

                    -

                    </button>

                    <strong>

                        ${item.quantity}

                    </strong>

                    <button
                    class="small-btn"
                    onclick="increaseQuantity(${item.id})">

                    +

                    </button>

                </div>

                <br>

                <button
                class="remove-btn"
                onclick="removeItem(${item.id})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

    const delivery =
    total>=200 ? 0 : 10;

    const grandTotal =
    total + delivery;

    cartDrawer.innerHTML +=`

    <div class="cart-total">

        <h2>

            <span>Subtotal</span>

            <span>₹${total}</span>

        </h2>

        <h2>

            <span>Delivery</span>

            <span>

            ₹${delivery}

            </span>

        </h2>

        <hr><br>

        <h2>

            <span>Total</span>

            <span>

            ₹${grandTotal}

            </span>

        </h2>

        <br>

        <button
        class="checkout-btn"
        onclick="openCheckout()">

        Proceed To Checkout

        </button>

    </div>

    `;

}

/* -----------------------------
   Increase Quantity
----------------------------- */

function increaseQuantity(id){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.map(item=>{

        if(item.id===id){

            item.quantity++;

        }

        return item;

    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    window.cart = cart;

    updateCartCount();

    renderCart();

}

/* -----------------------------
   Decrease Quantity
----------------------------- */

function decreaseQuantity(id){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.map(item=>{

        if(item.id===id){

            item.quantity--;

        }

        return item;

    }).filter(item=>item.quantity>0);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    window.cart = cart;

    updateCartCount();

    renderCart();

}

/* -----------------------------
   Remove Item
----------------------------- */

function removeItem(id){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart =
    cart.filter(item=>item.id!==id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    window.cart = cart;

    updateCartCount();

    renderCart();

    showToast("Item Removed");

}

/* -----------------------------
   Clear Cart
----------------------------- */

function clearCart(){

    localStorage.removeItem("cart");

    window.cart=[];

    updateCartCount();

    renderCart();

}

/* -----------------------------
   Checkout
----------------------------- */

function openCheckout(){

    cartDrawer.classList.remove("active");

    document
    .getElementById("checkoutDrawer")
    .classList.add("active");

    renderCheckout();

}