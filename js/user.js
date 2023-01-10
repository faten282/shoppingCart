let userName = document.getElementById("userName");

let userInfo = document.getElementById("userInfo");

let removedNavList = document.getElementById("navlist");

let logOut = document.getElementById("logout");

if(localStorage.getItem("name")){
    removedNavList.remove();
    userName.style.display = "block";
    userInfo.innerHTML=localStorage.getItem("name");
}

logOut.addEventListener('click',()=>{
    setTimeout(()=>{ window.location ="register.html",1000});    
localStorage.clear();

})