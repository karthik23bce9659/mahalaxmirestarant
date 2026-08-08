/* =========================================================
   MAHALAKSHMI HOTELS
   APP.JS
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const foodContainer = document.getElementById("foodContainer");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const floatingCount = document.getElementById("floatingCount");
const toast = document.getElementById("toast");

const modal = document.getElementById("foodModal");
const modalBody = document.getElementById("modalBody");

let selectedCategory = "All";


/* =========================================================
   CART
========================================================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* =========================================================
   GET CUSTOMER FOOD LIST
========================================================= */

/*
   IMPORTANT:

   Admin changes are stored in:

   foodGuruAdminFoods

   If admin has changed the menu,
   use that data.

   Otherwise use the original foods
   from food.js.
*/

function getCustomerFoods() {

    const savedFoods =
        localStorage.getItem("foodGuruAdminFoods");

    if (savedFoods) {

        try {

            const parsed =
                JSON.parse(savedFoods);

            if (Array.isArray(parsed)) {

                return parsed;

            }

        } catch (error) {

            console.error(
                "Error reading admin food data:",
                error
            );

        }

    }

    return foods;
}


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.display = "none";

    }, 1200);

});


function renderFoods(foodList = foods) {

    foodContainer.innerHTML = "";

    if (foodList.length === 0) {
        foodContainer.innerHTML = `
            <div class="empty-state">
                <h2>No Food Found</h2>
                <p>Try another search.</p>
            </div>
        `;
        return;
    }

    foodList.forEach(food => {

        const available = food.available !== false;

        const addButton = available
            ? `
                <button
                    class="add-cart"
                    onclick="addToCart(${food.id})">
                    Add
                </button>
              `
            : `
                <button
                    class="add-cart"
                    disabled>
                    Unavailable
                </button>
              `;

        foodContainer.innerHTML += `
            <div class="food-card fade-up">

                <img
                    src="${food.image}"
                    alt="${food.name}">

                <div class="food-info">

                    <h3>${food.name}</h3>

                    <p>${food.description}</p>

                    <div class="rating">
                        ⭐ ${food.rating}
                    </div>

                    <div class="food-bottom">

                        <div class="food-price">
                            ₹${food.price}
                        </div>

                        ${addButton}

                    </div>

                </div>

            </div>
        `;
    });
}


/* =========================================================
   SEARCH
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function (event) {

            const value =
                event.target.value
                    .toLowerCase()
                    .trim();


            let currentFoods =
                getCustomerFoods();


            /* CATEGORY */

            if (selectedCategory !== "All") {

                currentFoods =
                    currentFoods.filter(food =>
                        food.category ===
                        selectedCategory
                    );

            }


            /* SEARCH */

            if (value) {

                currentFoods =
                    currentFoods.filter(food =>

                        food.name
                            .toLowerCase()
                            .includes(value)

                    );

            }


            renderFoods(currentFoods);

        }
    );

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

const categoryButtons =
    document.querySelectorAll(
        ".category-container button"
    );


categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            selectedCategory =
                this.dataset.category;


            const value =
                searchInput
                ?
                searchInput.value
                    .toLowerCase()
                    .trim()
                :
                "";


            let filtered =
                getCustomerFoods();


            /* CATEGORY */

            if (selectedCategory !== "All") {

                filtered =
                    filtered.filter(food =>
                        food.category ===
                        selectedCategory
                    );

            }


            /* SEARCH */

            if (value) {

                filtered =
                    filtered.filter(food =>
                        food.name
                            .toLowerCase()
                            .includes(value)
                    );

            }


            renderFoods(filtered);

        }
    );

});


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id) {

    const currentFoods =
        getCustomerFoods();


    const food =
        currentFoods.find(
            item => Number(item.id) === Number(id)
        );


    if (!food) {

        showToast(
            "Food item not found."
        );

        return;

    }


    /* CHECK AVAILABILITY */

    if (food.available === false) {

        showToast(
            `${food.name} is currently unavailable.`
        );

        return;

    }


    const existing =
        cart.find(
            item =>
                Number(item.id) === Number(id)
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            ...food,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    showToast(
        `${food.name} added to cart`
    );

}


/* =========================================================
   UPDATE CART COUNT
========================================================= */

function updateCartCount() {

    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity || 0),
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalItems;

    }


    if (floatingCount) {

        floatingCount.textContent =
            totalItems;

    }

}


updateCartCount();


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   HERO BUTTON
========================================================= */

const orderNow =
    document.getElementById("orderNow");


if (orderNow) {

    orderNow.addEventListener(
        "click",
        function () {

            const categories =
                document.querySelector(
                    ".categories"
                );


            if (categories) {

                categories.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }
    );

}


/* =========================================================
   BUSINESS HOURS
========================================================= */

function checkBusinessHours() {

    const status =
        document.getElementById(
            "businessStatus"
        );


    if (!status) return;


    let settings = {

        restaurantOpen: true,

        openingTime: "12:00",

        closingTime: "20:00"

    };


    const saved =
        localStorage.getItem(
            "foodGuruAdminSettings"
        );


    if (saved) {

        try {

            settings = {

                ...settings,

                ...JSON.parse(saved)

            };

        } catch (error) {

            console.error(
                "Settings error:",
                error
            );

        }

    }


    /* ADMIN CLOSED */

    if (!settings.restaurantOpen) {

        status.innerHTML =
            "🔴 CLOSED • Restaurant is currently closed";

        status.classList.remove(
            "status-open"
        );

        status.classList.add(
            "status-closed"
        );

        return;

    }


    /* TIME */

    const now =
        new Date();


    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();


    const [openHour, openMinute] =
        settings.openingTime
            .split(":")
            .map(Number);


    const [closeHour, closeMinute] =
        settings.closingTime
            .split(":")
            .map(Number);


    const openingMinutes =
        openHour * 60 +
        openMinute;


    const closingMinutes =
        closeHour * 60 +
        closeMinute;


    const isOpen =
        currentMinutes >= openingMinutes &&
        currentMinutes < closingMinutes;


    if (isOpen) {

        status.innerHTML =
            `🟢 OPEN NOW • Taking Orders`;


        status.classList.remove(
            "status-closed"
        );


        status.classList.add(
            "status-open"
        );

    } else {

        status.innerHTML =
            `🔴 CLOSED • Opens At ${formatTime(
                settings.openingTime
            )}`;


        status.classList.remove(
            "status-open"
        );


        status.classList.add(
            "status-closed"
        );

    }

}


/* =========================================================
   FORMAT TIME
========================================================= */

function formatTime(time) {

    const [hour, minute] =
        time.split(":").map(Number);


    const date =
        new Date();


    date.setHours(
        hour,
        minute
    );


    return date.toLocaleTimeString(
        [],
        {
            hour: "numeric",
            minute: "2-digit"
        }
    );

}


checkBusinessHours();


/* =========================================================
   FOOD MODAL
========================================================= */

if (foodContainer) {

    foodContainer.addEventListener(
        "click",
        function (event) {

            /*
               Don't open modal when clicking Add.
            */

            if (
                event.target.closest(
                    ".add-cart"
                )
            ) {

                return;

            }


            const card =
                event.target.closest(
                    ".food-card"
                );


            if (!card) return;


            const id =
                card.dataset.id;


            const currentFoods =
                getCustomerFoods();


            const food =
                currentFoods.find(
                    item =>
                        String(item.id) ===
                        String(id)
                );


            if (!food) return;


            openFoodModal(food);

        }
    );

}


/* =========================================================
   OPEN FOOD MODAL
========================================================= */

function openFoodModal(food) {

    if (!modal || !modalBody) return;


    const available =
        food.available !== false;


    modal.classList.remove(
        "hidden"
    );


    modalBody.innerHTML = `

        <div class="modal-body">

            <div class="modal-image">

                <img
                    src="${food.image}"
                    alt="${food.name}">

            </div>


            <div class="modal-details">

                <h2>
                    ${food.name}
                </h2>


                <div class="rating">

                    ⭐ ${food.rating || "4.5"}

                </div>


                <p>

                    ${food.description || ""}

                </p>


                <h3 class="modal-price">

                    ₹${food.price}

                </h3>


                ${
                    available

                    ?

                    `
                    <button
                        class="primary-btn"
                        onclick="addToCart(${food.id})">

                        Add To Cart

                    </button>
                    `

                    :

                    `
                    <button
                        class="primary-btn"
                        disabled>

                        Currently Unavailable

                    </button>
                    `

                }

            </div>

        </div>

    `;

}


/* =========================================================
   CLOSE MODAL
========================================================= */

const closeModal =
    document.getElementById(
        "closeModal"
    );


if (closeModal && modal) {

    closeModal.addEventListener(
        "click",
        function () {

            modal.classList.add(
                "hidden"
            );

        }
    );

}


window.addEventListener(
    "click",
    function (event) {

        if (
            modal &&
            event.target === modal
        ) {

            modal.classList.add(
                "hidden"
            );

        }

    }
);


/* =========================================================
   ADMIN → CUSTOMER MENU SYNC
========================================================= */

window.addEventListener(
    "foodMenuChanged",
    function () {

        console.log(
            "Food menu updated by admin."
        );


        renderFoods(
            foods
        );


        /*
           Re-apply search/category
           if needed.
        */

        selectedCategory = "All";


        if (searchInput) {

            searchInput.value = "";

        }

    }
);


/* =========================================================
   ADMIN → CUSTOMER SETTINGS SYNC
========================================================= */

window.addEventListener(
    "restaurantSettingsChanged",
    function () {

        checkBusinessHours();

    }
);


/* =========================================================
   STORAGE EVENT
========================================================= */

/*
   This also works if the admin page
   is opened in another browser tab.
*/

window.addEventListener(
    "storage",
    function (event) {

        if (
            event.key ===
            "foodGuruAdminFoods"
        ) {

            renderFoods(
                getCustomerFoods()
            );

        }


        if (
            event.key ===
            "foodGuruAdminSettings"
        ) {

            checkBusinessHours();

        }

    }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

renderFoods();