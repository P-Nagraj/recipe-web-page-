let recipeobject={
    title:"TOMATO PASTA",
    imagesrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients:["Pasta","Oil","Onions","Salt","Tomato Pasta Sauce","cheese"]

};
//storing list of ingredients in one variable//
let list_of_ingredients=recipeobject.ingredients
//___________________________________________//
let Title_heading_Element=document.getElementById("heading-title");
Title_heading_Element.textContent=recipeobject.title;

let image_container_element=document.getElementById("image-container");
let main_image_element=document.getElementById("first-image");
main_image_element.setAttribute("src",recipeobject.imagesrc);
image_container_element.appendChild(main_image_element);

for (let list of list_of_ingredients){
    let list_container_element=document.getElementById("list-container");
    // let create li list items //
    let ingredients_order_list=document.createElement("li");
    ingredients_order_list.textContent=list;
    ingredients_order_list.style.color="white";
    ingredients_order_list.style.fontFamily="50px";
    list_container_element.appendChild(ingredients_order_list)

}

