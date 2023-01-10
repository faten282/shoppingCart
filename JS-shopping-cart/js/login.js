let Name = document.getElementById("nameInput");

let password = document.getElementById("passInput");

let loginBtn = document.getElementById("signIn");
let getName = localStorage.getItem("name");
let getPass = localStorage.getItem("password");
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(Name.value===""||password.value===""){
   alert("fail");
    }else{
      if(( getName.trim() && getName=== Name.value.trim()) && (getPass.trim() && getPass===password.value.trim())){
      console.log("test");
      setTimeout(()=>{window.location="index.html"},1000)
      }
      else{
        alert("password is wrong")
      }

    }


})

