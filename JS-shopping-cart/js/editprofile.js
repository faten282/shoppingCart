
 
 // get the data from the localstorage
 
 let name1 = localStorage.getItem("name");
 let email = localStorage.getItem("email");
 //let Img = localStorage.getItem("");
 ///varibles

 let userInput= document.getElementById("user-name");
 let userEmailInput = document.getElementById("user-email");
 let eidtForm =document.getElementById("edit-profile-form");
 let imgFileinput = document.getElementById("imgFile");
 let proImg;
//set values 


//events
eidtForm.addEventListener("submit" , editProfile)

imgFileinput.addEventListener("change", uploadImg);


function editProfile (e){
e.preventDefault();
localStorage.setItem("name" , userInput.value);
localStorage.setItem("email" , userEmailInput.value);
localStorage.setItem("ImgPro" , proImg);
setTimeout(()=>{
window.location = "profile.html"
},500)
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