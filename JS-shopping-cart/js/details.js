let prodects = JSON.parse(localStorage.getItem("prodects"))||prodectsDB;
console.log(prodects);
let prodectId = JSON.parse(localStorage.getItem("prodectId"));
let itemDetails = document.querySelector(".item-details");
let prodectDetails= prodects.find(item => item.id === prodectId);
itemDetails.innerHTML=`
<div class="prodect-item">
<div class="prodect-img">
  <img src="${prodectDetails.imgUrl}" alt="">
</div>
  <div class="prodect-info">
    <div class="title-btn">
  <h3  class="prodect-title")">${prodectDetails.title}</h3>
</div>
  <p class="prodect-desc">${prodectDetails.desc}</p>
   <h3 class="size">size :${prodectDetails.size}</h3>
  <button class="btn-edit" id="add-btn"  Onclick="editPro(${prodectId})">edit</button>
</div>


</div>`;






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


let addedItem = localStorage.getItem("addeditem") ? JSON.parse(localStorage.getItem("addeditem")) : prodectsDB;
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

 //edit

   
 function editPro(id){
  localStorage.setItem("editId",JSON.stringify(id));
  window.location = "edit.html"
 }