

let prodectCart = document.getElementById("prodects");


let noProdects = document.querySelector(".noProdcets")

function drawCartprodectsUI(allprodects = []){
  if(JSON.parse(localStorage.getItem("addeditem")).length===0){
    noProdects.style.display = "block";
  }
  let prodects = JSON.parse(localStorage.getItem("addeditem")) || allprodects;
    let prodectUi = prodects.map((x)=>{
        return `
        
        <div class="prodect-item">
    <div class="prodect-img">
      <img src="${x.imgUrl}" alt="">
    </div>
      <div class="prodect-info">
        <div class="title-btn">
      <h3 class="prodect-title">${x.title}</h3>
      <button class="btn-add" id="add-btn"   Onclick="removeItem(${x.id})">remove From Cart</button>
    </div>
      <p class="prodect-desc">${x.desc}</p>
       <h3 class="size">size :${x.size}</h3>
       <h3 class="size">quantity :${x.qyt}</h3>
       <h3 class="price">price :${x.price}$</h3>
   
       
    </div>
     
    </div>`;
    }).join("");
    prodectCart.innerHTML = prodectUi ;
    }
    drawCartprodectsUI();


    function removeItem(id){
      let prodectsIncart = localStorage.getItem("addeditem")
      if(prodectsIncart)
      {
        let items = JSON.parse(prodectsIncart); 
        let filterdItems = items.filter((item)=> item.id !== id)
        localStorage.setItem("addeditem" ,JSON.stringify(filterdItems));
        drawCartprodectsUI(filterdItems);
      }
     
    }
  

///basket
let numCart = document.querySelector(".icon");
let iconCart = document.getElementById("icon");
let cartProdectsD = document.querySelector(".cart-prodects div");
let cartProdects = document.querySelector(".cart-prodects");

iconCart.addEventListener('click' ,()=>{
 if(count!==0){
 if(cartProdects.style.display==="block"){
   cartProdects.style.display="none"
 }
 else{
   cartProdects.style.display="block"
     
 }} 

})
let addedItem = localStorage.getItem("addeditem") ? JSON.parse(localStorage.getItem("addeditem")) : [];

let count = addedItem.length;
if(addedItem){

  addedItem.map(item =>{
     
    cartProdectsD.innerHTML+=`<p>${item.title} ${item.qyt}</p>`;
  
  })
  }
  
function checkLogedUser (){

 if(localStorage.getItem("name")){
  count = count+1;
  numCart.setAttribute('data-content' , count);
 
 }else{
     window.location="login.html"; 
 }
 }

 numCart.setAttribute('data-content' , count);
 