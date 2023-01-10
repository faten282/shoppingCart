 
 // get the data from the localstorage

 let name1 = localStorage.getItem("name");
 let email = localStorage.getItem("email");
 let avtar = localStorage.getItem("ImgPro");
 let prodects = JSON.parse(localStorage.getItem("prodects"))||prodectsDB;
 let myPro = prodects.filter((item)=> item.isMe==='yes');
 ///varibles

 let userName1 = document.getElementById("user-name");
 let pronum = document.getElementById("pronum");
 let userEmail = document.getElementById("email");
let  userAvr = document.getElementById("user-avtar");
 userName1.innerHTML = name1;
 userEmail.innerHTML = email;
 pronum.innerHTML=myPro.length;
 userAvr.src = avtar;






















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

let addedItem = localStorage.getItem("addeditem") ?JSON.parse(localStorage.getItem("addeditem")) :[];
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
 