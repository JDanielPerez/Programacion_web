const datarecipes = [{
    name: "Surfer On Acid.",
    ingredients:"<br>-1 oz (30 ml) Malibu<br>-1 oz (30 ml) Jagermeister<br>-1 oz (30 ml) jugo de piña<br> -hielo",
    preparation:"<br>Agrega todos los ingredientes en una coctelera.<br>Agita fuerte y vierte en un vaso de old fashioned con hielo.<br>Decora al gusto.",
    img: "/Portafolio/Tienda_Licor/images/r2.jpg",
},
{
    name: "Coctel Don Julio 70.",
    ingredients:"<br> -Don julio 70 <br> -Rodajas de toronja deshidratada <br> -Agua mineral Topo Chico",
    preparation:"<br>Vierte Don Julio 70 en un vaso alto.<br>Completa con agua mineral Topo Chico.<br>Decora con una rodaja de toroja deshidratada",
    img:"/Portafolio/Tienda_Licor/images/r1.jpg",
}]
function recetas(datarecipes){
    return `<div class="file-recipe">
    <div class="Content_1"> 
        <h2 class="name">${datarecipes.name}</h2>
        <img class="img" src=${datarecipes.img}>
        <p class="ingredients">Ingredientes: ${datarecipes.ingredients}</p>
        <p class="preparation">Preparación: ${datarecipes.preparation}</p>
    </div>
    </div>`;
}

const p3=document.getElementById("app2").innerHTML=`
${datarecipes.map(recetas).join("")}`


