//variables
let prodects = JSON.parse(localStorage.getItem("prodects"))||prodects;
let prodectId = JSON.parse(localStorage.getItem("editId"));
let getpro =  prodects.find((item)=>item.id===prodectId);


let proName = document.getElementById("pro-name");
let proDesc = document.getElementById("pro-desc");
let proSizeSelect = document.getElementById("pro-size");
let updateproForm= document.getElementById("update-form");
let inpuFile = document.getElementById("imgFile");
localStorage.setItem("Img" , "./images/IGRJ6274.JPG");
let ProSizeVal;
proName.value = getpro.title;
proDesc.value = getpro.desc;
proSizeSelect.value = getpro.size;
proImg = getpro.imgUrl;
//events
proSizeSelect.addEventListener('change' , getProSizeVal)

updateproForm.addEventListener("submit" , updatePro)
inpuFile.addEventListener("change", uploadImg);
//function

function getProSizeVal(e){
ProSizeVal = e.target.value;
}

function updatePro(e){
    e.preventDefault();
    getpro.title = proName.value;
    getpro.desc = proDesc.value;
    getpro.size = proSizeSelect.value;
    getpro.imgUrl = proImg;
    localStorage.setItem("prodects" , JSON.stringify(prodects));
    setTimeout(()=>{
        window.location ="index.html";
      },500);   
}


function uploadImg(){
    let file = this.files[0];
    getImgBase64(file);
    let types =["image/png" ,"image/jpeg" ]
    if(types.indexOf(file.type)===-1){
      alert("type not supported")
      return;
    }
    if(file.size> 2*1024*1024){
        alert("too big")
        return;
    }

}


function getImgBase64(file){
let reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = function (){
    proImg =reader.result
}
reader.onerror = function (){
    alert("error")
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
