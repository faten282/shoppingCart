//variables

let proName = document.getElementById("pro-name");
let proDesc = document.getElementById("pro-desc");
let proSizeSelect = document.getElementById("pro-size");
let proForm= document.getElementById("creat-form");
let inpuFile = document.getElementById("imgFile");
let proImg ;
let ProSizeVal;
//events
proSizeSelect.addEventListener('change' , getProSizeVal)
proForm.addEventListener("submit" , createPro)
inpuFile.addEventListener("change", uploadImg);
//function
function getProSizeVal(e){
    ProSizeVal = e.target.value;

}
function createPro(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("prodects"))|| prodectsDB
    let nameVal = proName.value;
    let descVal = proDesc.value;
    if(nameVal&&descVal){

        let obj = {
            id : allProducts ? allProducts.length+1 : 1,
            title:nameVal,
            desc: descVal,
            size: ProSizeVal,
            qyt:1,
            price: 500,
            imgUrl: proImg,
            isMe:"yes"
        }
        let newPro = allProducts? [...allProducts,obj] : [obj];
        localStorage.setItem("prodects" , JSON.stringify(newPro));
    
        proName.value ="";
        proDesc.value ="";
        proSizeSelect.value = "";
        setTimeout(()=>{
          //  window.location("index.html")
          window.location ="index.html";
        },500);
    }
    else{
        alert("enter data");
    }
    
}


function uploadImg(){
    let file = this.files[0];
    getImgBase64(file);
    console.log(file);
    let types =["image/png" ,"image/jpeg" ]
    if(types.indexOf(file.type)===-1){
      alert("type not supported")
      return;
    }
    if(file.size> 2*1024*1024){
        alert("too big")
        return;
    }
// proImg = URL.createObjectURL(file);
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
 