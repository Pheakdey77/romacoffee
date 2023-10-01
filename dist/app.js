const data = 
[
    {
        name: "ICE AMERICANO",
        img: "iceamericano.png",
        detail: "  1 doubleshot espresso <br> ½ cup ice <br> Cold water"
    },
    {
        name: "ICE LATTE",
        img: "icelate.jpg",
        detail: "   1-2 shots of espresso<br> 1 cup of milk <br> 1-2 tbsp of simple syrup <br>Ice cubes"
    },
    {
        name: "MACCHIATO",
        img: "macchiato.jpg",
        detail: "  2 shots of espresso <br> 1-2 oz of milk <br> Caramel sauce and vanilla syrup"
    },
    {
        name: "CARAMEL LATTE",
        img: "caramel_latte.jpg",
        detail: " 2 shots of espresso<br> 1 cup of milk<br> 2 tbsp caramel sauce<br> Whipped cream"
    },
    {
        name: "CHAI TEA LATTE",
        img: "Chai Tea latte.jpg",
        detail: "   2 bags of chai tea <br> 1 cup of milk <br> 1 cup of water <br> 2 tsp honey (or sweetener of your choice) <br> 1/4 tsp vanilla extract"
    },
    {
        name: "ICE CAPPUCCINO",
        img: "Iced-Cappuccino.jpg",
        detail: "  2 shots of espresso <br> 1/4 cup of milk <br> 1 tbsp sugar <br> 1 cup of ice cubes"
    }

];

var product = document.querySelector('.t-product');


    data.forEach(e =>{
        var name = e.name;
        var img = e.img;
        var detail = e.detail;
        product.innerHTML += `  
           <div class=" rounded-md  object-cover relative  overflow-hidden card " style=" width: 227px; height: 309px; ">
        <img src="../img/${img}" class="product_img" >
        <div class="absolute top-80 right-0 bg-slate-500 body-overflow backdrop-blur p-5" style="background-color: rgba(21, 25, 30, 0.119);  width: 227px; height: 309px;">
            <h1 class="font-bold leading-7 tracking-widest text-white border-b-2">
                ${name}
            </h1>
            <span class="text-white">
               ${detail}
    
            </span>
        </div>
    </div>`;
    });

   



