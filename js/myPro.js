let prodects = JSON.parse(localStorage.getItem("prodects"))||prodectsDB;
console.log(prodects);
let myprodects = prodects.filter((item)=> item.isMe==='yes');

let noProdects = document.querySelector(".noProdcets")
let Myprodect = document.getElementById("prodects");
let creatProdect ;
(creatProdect = function(prodects = []){
    let myprodects = prodects.filter((item)=> item.isMe==='yes');
    if(myprodects.length!==0){
let prodectUi = myprodects.map((x)=>{
    return `
  <div class="prodect-item" style="border: ${x.isMe==='yes'? "1px solid red": ""}">
<div class="prodect-img">
  <img src="${x.imgUrl}" alt="">
</div>
  <div class="prodect-info">
    <div class="title-btn">
  <h3  class="prodect-title"   Onclick="saveItemData(${x.id})">${x.title}</h3>
  <button class="btn-add" id="add-btn"  Onclick="deletePro(${x.id})">delete</button>
 ${x.isMe === "yes"? "<button class='btn-add' Onclick='editPro("+x.id+")' >edit</button>" :""} 
</div>  

  <p class="prodect-desc">${x.desc}</p>
   <h3 class="size">size :${x.size}</h3>

   <h3 class="price">price :${x.price}$</h3>
  
   <i class="fa-solid fa-heart" style="color: ${x.liked === true ? "red": ""}" Onclick="addtofavoret(${x.id})" ></i>
  
</div>

</div>`;

}).join("");

Myprodect.innerHTML = prodectUi ;
    }
    else{
        noProdects.style.display = "block";
    }
})(JSON.parse(localStorage.getItem("prodects")) || prodectsDB);
 ///edit
function editPro(id){
    localStorage.setItem("editId",JSON.stringify(id));
    window.location = "edit.html"
   }
   //delete

   function deletePro(id){
    let prodects = JSON.parse(localStorage.getItem("prodects"))||prodectsDB;
    let myprodects = prodects.filter((item)=> item.isMe==='yes');
    let filterd =  myprodects.filter((item)=>item.id !==id);
    creatProdect(filterd);

    prodects = prodects.filter((item)=>item.id!==id)
    localStorage.setItem("prodects" , JSON.stringify(prodects));
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
    