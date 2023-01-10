
//define prodects 
let prodectsPage = document.getElementById("prodects");
let prodects = prodectsDB;
//display prodects ui
let creatProdect ;
(creatProdect = function(prodects = []){

let prodectUi = prodects.map((x)=>{
    return `
  <div class="prodect-item" style="border: ${x.isMe==='yes'? "1px solid red": ""}">
<div class="prodect-img">
  <img src="${x.imgUrl}" alt="">
</div>
  <div class="prodect-info">
    <div class="title-btn">
  <h3  class="prodect-title"   Onclick="saveItemData(${x.id})">${x.title}</h3>
  <button class="btn-add" id="add-btn"  Onclick="addTocart(${x.id})">Add</button>
 ${x.isMe === "yes"? "<button class='btn-add' Onclick='editPro("+x.id+")' >edit</button>" :""} 
</div>  

  <p class="prodect-desc">${x.desc}</p>
   <h3 class="size">size :${x.size}</h3>

   <h3 class="price">price :${x.price}$</h3>
  
   <i class="fa-solid fa-heart" style="color: ${x.liked === true ? "red": ""}" Onclick="addtofavoret(${x.id})" ></i>
  
</div>

</div>`;
}).join("");
prodectsPage.innerHTML = prodectUi ;
})(JSON.parse(localStorage.getItem("prodects")) || prodectsDB);

// prodects menu 
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

// if there is items in the local storge

let addedItem = localStorage.getItem("addeditem") ? JSON.parse(localStorage.getItem("addeditem")) : prodectsDB;
let count = addedItem.length;

if(addedItem){

  addedItem.map(item =>{
     
    cartProdectsD.innerHTML+=`<p>${item.title} ${item.qyt}</p>`;
  
  })
  }
  
 //add to cart

function addTocart(id){
 
  checkLogedUser();
  let prodects =JSON.parse(localStorage.getItem("prodects"))|| prodectsDB;
  let prodect= prodects.find((item)=> item.id===id);
  let isprodectincart= addedItem.some((i) => i.id === prodect.id);

  console.log(isprodectincart);
  if(isprodectincart){
    addedItem =addedItem.map(p=>{
     if(p.id===prodect.id) p.qyt += 1;
     return p;
    })
  
}
  else{
  addedItem.push(prodect);
  
  }
  cartProdectsD.innerHTML="";
  addedItem.forEach(item =>{
   
    cartProdectsD.innerHTML+=`<p>${item.title} ${item.qyt}</p>`;

  })

 
  localStorage.setItem("addeditem" , JSON.stringify(addedItem));
}

function getuniqeArray( arr , id){
let unique = arr.map(item => item[id])
.map((item , i , arr2)=> arr2.indexOf(item) === i && i)
.filter((item) => arr[item])
.map((item)=>arr[item])
return unique;
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


 function saveItemData(id){
  localStorage.setItem("prodectId"  ,id);
  window.location=("details.html");
 }

 /* search */
let inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup" ,function(e){
search(e.target.value,JSON.parse(localStorage.getItem("prodects")));

if(e.target.value.trim()===""){
  creatProdect(JSON.parse(localStorage.getItem("prodects")));
}
})
 function search(title,myArray){
 let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase())  !== -1);
  creatProdect(arr);
}
 




 //add to faverot


let favArray = localStorage.getItem("prodectsFav") 
? JSON.parse(localStorage.getItem("prodectsFav"))
:[];

function addtofavoret(id){
  console.log(id);
  if(localStorage.getItem("name")){
  let choosenItem = prodects.find((item) => item.id === id);
  choosenItem.liked = true;
  favArray =[...favArray , choosenItem]
  let uniqueProdects = getuniqeArray(favArray , "id");
  localStorage.setItem("prodectsFav" , JSON.stringify(uniqueProdects));
  
  prodects.map(item=>{
    if(item.id===choosenItem.id){
      item.liked = true;
  }
})
localStorage.setItem("prodects" ,JSON.stringify(prodects));
creatProdect(prodects);


  }else{
    window.location="login.html";  
  }

}
// filter product by size 
let sizeFilterSelect= document.getElementById("sizeF");
sizeFilterSelect.addEventListener('change' , filterProbysize)


function filterProbysize(e){
 let val = e.target.value;
 let prodects=JSON.parse(localStorage.getItem("prodects"))|| prodects ;
 if(val ==='all'){
  creatProdect(prodects);
 }else{
  prodects = prodects.filter((item) => item.size===val);
  creatProdect(prodects);
 }
}
//edit product 
  
 function editPro(id){
  localStorage.setItem("editId",JSON.stringify(id));
  window.location = "edit.html"
 }