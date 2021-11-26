fetch("/Portafolio/Tienda_Licor/yeison/productos.json").then(function(response){
    return response.json()
}).then(function(data){
    document.getElementById("app").innerHTML=`
    ${data.products.map(productos).join("")}`
    const btn = Array.from(document.querySelectorAll(".btn"))/* es para meter todos los botones*/
    const btn_less = Array.from(document.querySelectorAll(".btn_less"))
    
    btn.forEach(element => {
        element.addEventListener("click",function(e){
            e.preventDefault()
            car_product[element.id].cantidad+=1
            carrito.innerHTML=`<h2>Hello my dear alcoholic.</h2>
            <p>These are your products:</p>` 
            var total=0
            Object.keys(car_product).map(function(key, index) {
             total+=car_product[key].cantidad*car_product[key].precio
             if(car_product[key].cantidad>0){
                carrito.innerHTML= carrito.innerHTML+`
                <div>
                    <h2>${car_product[key].name}</h2>
                    <p>Cantidad: ${car_product[key].cantidad}</p>
                    <sm>Precio Unidad: ${car_product[key].precio}</sm>
             </div>
             `
            }
          });
          carrito.innerHTML=carrito.innerHTML+`
          <div>
                <h2>Total:$ ${total}</h2>
            </div>`
        
        })
    })
    btn_less.forEach(element =>{ /*Falta que no los borre todos para estar completo */
        element.addEventListener("click",function(a){
            a.preventDefault()
            if(car_product[element.id].cantidad>0){
                car_product[element.id].cantidad-=1
                console.log(car_product[element.id].cantidad)
            }
            carrito.innerHTML=`<h2>Hello my dear alcoholic.</h2>
        <p>These are your products:</p>` 
        var total=0
        Object.keys(car_product).map(function(key, index) {
            total+=car_product[key].cantidad*car_product[key].precio
            if(car_product[key].cantidad>0){
            carrito.innerHTML= carrito.innerHTML+`
            <div>
                <h2>${car_product[key].name}</h2>
                <p>Cantidad: ${car_product[key].cantidad}</p>
                <sm>Precio Unidad:$ ${car_product[key].precio}</sm>
            </div>
            `
            }
          });
          carrito.innerHTML=carrito.innerHTML+`
          <div>
                <h2>Total:$ ${total}</h2>
            </div>`
        })
    })
})
var car_product = {
    1:{
        cantidad:0,
        precio:43.99,
        name:"Tequila 1800"
    },
    2:{
        cantidad:0,
        precio:32.37,
        name:"Buchanans"
    },
    3:{
        cantidad:0,
        precio:60.76,
        name:"Don Julio"
    },
    4:{
        cantidad:0,
        precio:31.66,
        name: "Jaggermaister"
    },
    5:{
        cantidad:0,
        precio:17.86,
        name: "Jose Cuervo"
    },
    6:{
        cantidad:0,
        precio:37.63,
        name:"Old Parr"
    }  
}

const car=document.querySelector(".shop")
const carrito=document.querySelector(".shop_car")
car.addEventListener("click",function(e){
    carrito.classList.toggle("flex")
    carrito.classList.toggle("none")
})

function productos(dataproduct){
    return `<div class="file-product">
    <div class="info">
    <img class="img" src=${dataproduct.img}>
    <p class="cost">Precio:$ ${dataproduct.cost}</p>
        <p class="status">${dataproduct.status}</p>
        <button class="btn" id="${dataproduct.id}"><i class="fas fa-cart-plus"></i></button>
        <button class="btn_less" id="${dataproduct.id}"><i class="fas fa-minus"></i></button>
    </div>
    <div class="Content"> 
        <h2 class="name">${dataproduct.name}</h2>
        <p class="description">${dataproduct.description}</p>
    </div>
    </div>`;
}

