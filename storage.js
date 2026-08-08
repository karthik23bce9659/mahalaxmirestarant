/* ==========================================
   MAHALAKSHMI HOTELS
   STORAGE.JS
========================================== */

/* -----------------------------
   CART STORAGE
----------------------------- */

function getCart(){

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}

function saveCart(cart){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}

/* -----------------------------
   ORDERS STORAGE
----------------------------- */

function getOrders(){

    return JSON.parse(
        localStorage.getItem("orders")
    ) || [];

}

function saveOrders(orders){

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

}
const karthik= "janupapa";

/* -----------------------------
   BUSINESS SETTINGS
----------------------------- */

function getBusinessSettings(){

    return JSON.parse(
        localStorage.getItem("business")
    ) || {

        isOpen:true,

        openTime:"09:00",

        closeTime:"22:00",

        restaurantName:"Mahalakshmi Hotels",

        phone:"91XXXXXXXXXX"

    };

}

function saveBusinessSettings(settings){

    localStorage.setItem(

        "business",

        JSON.stringify(settings)

    );

}

/* -----------------------------
   ADMIN LOGIN
----------------------------- */

function getAdmin(){

    return JSON.parse(

        localStorage.getItem("admin")

    ) || {

        username:"admin",

        password:"admin123"

    };

}

function saveAdmin(admin){

    localStorage.setItem(

        "admin",

        JSON.stringify(admin)

    );

}

/* -----------------------------
   CLEAR CART
----------------------------- */

function clearCartStorage(){

    localStorage.removeItem("cart");

}

/* -----------------------------
   CLEAR ORDERS
----------------------------- */

function clearOrders(){

    localStorage.removeItem("orders");

}