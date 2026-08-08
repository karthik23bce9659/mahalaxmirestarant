/* ===========================================
   MAHALAKSHMI HOTELS
   FOOD DATABASE
=========================================== */

const foods = [

{
    id:1,
    category:"Biryani",
    name:"Egg Biryani",
    price:120,
    rating:4.5,
    time:"20-25 mins",
    bestseller:false,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZr3aCKsOoylVDmrjDhAwhq68E1SLlwBdjB1LrY5k2qcLAJ664Rvn9Tss&s=10",
    description:"Aromatic basmati rice cooked with boiled eggs, fresh spices and herbs."
},

{
    id:2,
    category:"Biryani",
    name:"Chicken Dum Biryani (ML)",
    price:180,
    rating:4.9,
    time:"25-30 mins",
    bestseller:true,
    veg:false,
    image:"https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg",
    description:"Traditional dum cooked chicken biryani prepared with premium basmati rice."
},

{
    id:3,
    category:"Biryani",
    name:"Chicken Fry Biryani",
    price:200,
    rating:4.8,
    time:"25 mins",
    bestseller:true,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_gV-2EucGOzN0uueFSfc4oc4Egl4BEA64q5r0Y31LA&s=10",
    description:"Spicy chicken fry served with delicious biryani rice."
},

{
    id:4,
    category:"Biryani",
    name:"Bagara Rice + Chicken Curry",
    price:200,
    rating:4.7,
    time:"20 mins",
    bestseller:false,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSS1J3JcQXFfLAO6Ioxy-hO_gH80C95wI-aST6iZer4teW-u1DimswmJce&s=10",
    description:"Traditional bagara rice served with rich chicken curry."
},

{
    id:5,
    category:"Curries",
    name:"Mushroom Kaju Curry",
    price:120,
    rating:4.6,
    time:"20 mins",
    bestseller:false,
    veg:true,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7H4xnh4mcGI-FdVS4Cv9CV1-5V4pd76xwO0BCNQsN7g&s=10",
    description:"Creamy mushroom curry prepared with cashews and Indian spices."
},

{
    id:6,
    category:"Curries",
    name:"Paneer curry",
    price:160,
    rating:4.7,
    time:"20 mins",
    bestseller:true,
    veg:true,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwl3mX9Zyzi9g8ZZTxxmuzItFu1F-nGBv5vZzq7_44A&s=10",
    description:"Fresh spinach cooked with soft paneer cubes."
},

{
    id:7,
    category:"Curries",
    name:"Chicken Curry",
    price:160,
    rating:4.8,
    time:"25 mins",
    bestseller:true,
    veg:false,
    image:"https://i0.wp.com/www.snazzycuisine.com/wp-content/uploads/2018/11/Restaurant-style-chicken-curry.jpg?fit=1935%2C2583&ssl=1",
    description:"Home style chicken curry with authentic spices."
},

{
    id:8,
    category:"Curries",
    name:"Chicken Fry",
    price:180,
    rating:4.8,
    time:"20 mins",
    bestseller:true,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOoZniN0SYz9WG2ey9GwJJw3YzWbFANGXhaFSp5F6aQ&s=10",
    description:"Crispy spicy chicken fry served hot."
},

{
    id:9,
    category:"Curries",
    name:"Fish Curry",
    price:180,
    rating:4.7,
    time:"20 mins",
    bestseller:false,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7GfYQO4K6VeRJ_7w4xYqmsxOsTLphjSALE_XyQSeDhmlwpCJyBZXNg&s=10",
    description:"Fresh fish cooked in flavorful curry gravy.",
    available: true
},


{
    id:11,
    category:"Starters",
    name:"Chilli Chicken",
    price:180,
    rating:4.8,
    time:"15 mins",
    bestseller:true,
    veg:false,
    available: true,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDB42gYpzNUzloNEReewptXh6rqEgjMmuqGzta46YEZfJI-mIZDgCb2IY&s=10",
    description:"Boneless chicken tossed with Indo-Chinese sauces."
},

{
    id:12,
    category:"Starters",
    name:"Chicken Lollipop",
    price:180,
    rating:4.8,
    time:"20 mins",
    bestseller:false,
    available: true,
    veg:false,
    image:"https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/media_files/isjT1Dea5Lac4I9jfUqC.JPG",
    description:"Four juicy chicken lollipops served with spicy dip."
},

{
    id:13,
    category:"Starters",
    name:"Chicken Leg Piece",
    price:60,
    rating:4.6,
    time:"10 mins",
    bestseller:false,
    available: true,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF3NqTom46uAYlPnWeifcO0n5zKS1QxxrI2vk1YU4ENJVnEv7kYfGVWc&s=10",
    description:"Crispy fried chicken leg."
},

{
    id:14,
    category:"Starters",
    name:"Fish Fry",
    price:60,
    rating:4.5,
    time:"10 mins",
    bestseller:false,
    available: true,
    veg:false,
    image:"https://www.recipetineats.com/uploads/2017/06/Crispy-Pan-Fried-Fish-3-1.jpg",
    description:"Fresh fish fried until crispy."
},

{
    id:15,
    category:"Rotis",
    name:"Chapathi (2)",
    price:60,
    rating:4.5,
    time:"10 mins",
    bestseller:false,
    available: true,
    veg:true,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgFmweG0ko-wcWi90HM1zrznNsZgFu8mQr93udCKUFQRp7VJmKnx0ZCA4&s=10",
    description:"Soft chapathis served hot."
},

{
    id:16,
    category:"Rotis",
    name:"Parota (2)",
    price:80,
    rating:4.7,
    time:"10 mins",
    bestseller:true,
    available: true,
    veg:true,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAObq4y5XELfXwWgx0ix5vnVF8qM_vkIpXwoRhOuqoVw&s=10",
    description:"Flaky layered parotas."
},

{
    id:17,
    category:"Rotis",
    name:"Pulka (3)",
    price:80,
    rating:4.6,
    time:"10 mins",
    bestseller:false,
    available: true,
    veg:true,
    image:"https://t4.ftcdn.net/jpg/02/46/74/11/360_F_246741178_cFyflgN2PoxyPVZgHhVpl8RAA7pa7A2a.jpg",
    description:"Fresh homemade pulkas."
},

{
    id:18,
    category:"Specials",
    name:"Ragi Sangati (2) sunday",
    price:140,
    rating:4.8,
    time:"20 mins",
    bestseller:true,
    available: true,
    veg:true,
    image:"https://media-cdn.tripadvisor.com/media/photo-s/18/41/43/73/ragi-sangati.jpg",
    description:"Traditional Ragi Sangati served with curry."
},

{
    id:19,
    category:"Specials",
    name:"Prawn Biryani (sunday)",
    price:290,
    rating:4.9,
    time:"30 mins",
    bestseller:true,
    available: true,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cPEITDgsEFQxymdvyxk13VihBZXSBxU517LDS34nMg&s=10",
    description:"Delicious prawn biryani with aromatic spices."
},

{
    id:20,
    category:"Specials",
    name:"Fish Biryani (sunday)",
    price:290,
    rating:4.8,
    time:"30 mins",
    bestseller:false,
    available: true,
    veg:false,
    image:"https://rupal-bhatikar.com/wp-content/uploads/2021/08/DSC03727.jpg",
    description:"Fresh fish cooked with premium basmati rice."
},

{
    id:21,
    category:"Specials",
    name:"Mutton Biryani (sunday)",
    price:330,
    rating:5,
    time:"35 mins",
    bestseller:true,
    available: true,
    veg:false,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaUVtsXXVLLIiRpys4MFKTmKk50OaNytexyc8Ai7ciJMnuyxMx6RCE9s&s=10",
    description:"Tender mutton dum biryani with authentic flavors."
}

];