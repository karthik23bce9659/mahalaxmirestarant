/* ==========================================
   MAHALAKSHMI HOTELS
   WHATSAPP.JS
========================================== */

/*
==============================================
CHANGE THIS TO YOUR WHATSAPP NUMBER
Example:
919876543210
(No +, No spaces)
==============================================
*/

const ADMIN_PHONE = "9177291958";

/* ==========================================
   SEND WHATSAPP MESSAGE
========================================== */

function sendWhatsApp(order){

    let message = "";

    message += "🍽️";
    message+=
    message += "━━━━━━━━━━━━━━━━━━%0A";
    message += "📦 *NEW FOOD ORDER*%0A%0A";

    message += "🆔 Order ID : ";
    message += order.id;
    message += "%0A%0A";

    message += "👤 Customer : ";
    message += order.customer;
    message += "%0A";

    message += "📞 Phone : ";
    message += order.phone;
    message += "%0A";

    message += "📍 Address : ";
    message += order.address;

    if(order.landmark){

        message += ", ";
        message += order.landmark;

    }

    message += "%0A%0A";

    message += "━━━━━━━━━━━━━━━━━━%0A";
    message += "🛒 *ORDER ITEMS*%0A";
    message += "━━━━━━━━━━━━━━━━━━%0A";

    order.items.forEach(item=>{

        message += "🍴 ";
        message += item.name;
        message += "%0A";

        message += "Qty : ";
        message += item.quantity;
        message += "%0A";

        message += "Price : ₹";
        message += item.price;
        message += "%0A";

        message += "Amount : ₹";
        message += item.price * item.quantity;
        message += "%0A";

        message += "------------------------%0A";

    });

    message += "%0A";

    message += "Subtotal : ₹";
    message += order.subtotal;
    message += "%0A";

    message += "Delivery : ₹";
    message += order.delivery;
    message += "%0A";

    message += "💰 Grand Total : ₹";
    message += order.total;
    message += "%0A%0A";

    message += "💵 Payment : ";
    message += order.payment;
    message += "%0A";

    message += "📅 ";
    message += order.date;
    message += "%0A%0A";

    message += "━━━━━━━━━━━━━━━━━━%0A";
    message += "Thank You ❤️";

    const url =
    `https://wa.me/${ADMIN_PHONE}?text=${message}`;

    window.open(url,"_blank");

}