//Register user
let Name = document.getElementById("nameInput");

let email = document.getElementById("emailInput");

let password = document.getElementById("passInput");

let registerBtn = document.getElementById("signUp");


registerBtn.addEventListener('click',(e)=>{
e.preventDefault();
if(Name.value==="" ||email.value==="" || password.value===""){
console.log("fail");
}
else{
localStorage.setItem("name" , Name.value);
localStorage.setItem("email" , email.value);
localStorage.setItem("password" , password.value);
console.log("success");
}
setTimeout(()=>{window.location="login.html"},1000)

})
