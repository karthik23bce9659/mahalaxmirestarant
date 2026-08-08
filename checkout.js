/* ==========================================
   MAHALAKSHMI HOTELS
   CHECKOUT.JS
========================================== */

const checkoutDrawer =
document.getElementById("checkoutDrawer");

/* -----------------------------
   Checkout UI
----------------------------- */

function renderCheckout(){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length===0){

        checkoutDrawer.innerHTML=`

        <div class="checkout-container">

            <h2>Your Cart is Empty</h2>

        </div>

        `;

        return;

    }

    let subtotal=0;

    cart.forEach(item=>{

        subtotal += item.price * item.quantity;

    });

    const delivery =
    subtotal>=499 ? 0 : 40;

    const total =
    subtotal + delivery;

    checkoutDrawer.innerHTML=`

    <div class="checkout-container">

        <h2>Checkout</h2>

        <div class="checkout-form">

            <input
            id="customerName"
            type="text"
            placeholder="Customer Name">

            <input
            id="customerPhone"
            type="tel"
            placeholder="Mobile Number">

            <textarea
            id="customerAddress"
            rows="5"
            placeholder="Delivery Address"></textarea>

            <input
            id="customerLandmark"
            type="text"
            placeholder="Landmark">

            <div class="payment-box">

                Payment Method

                <br><br>

                ✅ Cash On Delivery

            </div>

            <div class="payment-box">

                Subtotal : ₹${subtotal}

                <br>

                Delivery : ₹${delivery}

                <br>

                <strong>

                Total : ₹${total}

                </strong>

            </div>

            <button
            class="place-order"
            onclick="placeOrder()">

                Confirm Order

            </button>

            <button
            class="secondary-btn"
            onclick="closeCheckout()">

                Cancel

            </button>

        </div>

    </div>

    `;

}

/* -----------------------------
   Close Checkout
----------------------------- */

function closeCheckout(){

    checkoutDrawer.classList.remove("active");

}

/* -----------------------------
   Place Order
----------------------------- */

function placeOrder(){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length===0){

        alert("Cart is Empty");

        return;

    }

    const name =
    document
    .getElementById("customerName")
    .value
    .trim();

    const phone =
    document
    .getElementById("customerPhone")
    .value
    .trim();

    const address =
    document
    .getElementById("customerAddress")
    .value
    .trim();

    const landmark =
    document
    .getElementById("customerLandmark")
    .value
    .trim();

    if(
        !name ||
        !phone ||
        !address
    ){

        alert(
            "Please fill all required details."
        );

        return;

    }

    let subtotal=0;

    cart.forEach(item=>{

        subtotal += item.price * item.quantity;

    });

    const delivery =
    subtotal>=399 ? 0 : 20;

    const total =
    subtotal + delivery;

    const order={

        id:Date.now(),

        customer:name,

        phone:phone,

        address:address,

        landmark:landmark,

        payment:"Cash On Delivery",

        subtotal,

        delivery,

        total,

        items:cart,

        date:new Date().toLocaleString()

    };

    const orders =
    JSON.parse(
        localStorage.getItem("orders")
    ) || [];

    orders.push(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    window.cart=[];

    updateCartCount();

    closeCheckout();

    sendWhatsApp(order);

    showToast("Order Placed Successfully 🎉");

}