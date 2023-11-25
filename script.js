
let signinCont=document.getElementsByClassName("container");

document.addEventListener("DOMContentLoaded",()=>{
if(islogged()){
    renderProfile();
}
else{
    renderSignup();
}
}
)


function renderSignup(){
    
    signinCont[0].innerHTML=(`<div class="card1">
    <p class="welcomeMsg">Welcome back! 👋</p>
    <h4 class="header">Sign up to your account</h4>
    <form>
      <label for="name" class="inputName">Your name</label>
      <br>
      <input type="text" id="name">
      <br>
      <label for="email"  class="inputName">Your email</label>
      <br>
      <input type="text" id="email">
      <br>
      <label for="pass"  class="inputName">Password</label>
      <br>
      <input type="password" id="pass">
      <br>
      <label for="validatePass" class="inputName">Confirm Password</label>
      <br>
      <input type="password" id="validatePass">
    </form>
    <button id="btn" onclick="signup()">Continue</button>
</div>
<p class="display">*Please fill all the fields</p>
       <p class="passDisplay">*Password Mismatch</p>
<p class="inputName">Don't have an account <span class="special">signup</span></p>`);
   
}
function renderProfile(){
    let user=localStorage.getItem("userDetails");
    let parsedUser=JSON.parse(user)
    console.log(user)
    signinCont[0].innerHTML=(`<div class="profileContainer">
    <h4 class="signHeader">Signup Successful</h4>
    <div class="card">
       <h3 class="">Profile</h3>
       <img src="./images/Vector (3).png">
       <img src="./images/Vector (4).png">
       <p>Full name :${parsedUser.name}</p>
       <p>Email :${parsedUser.email}</p>
       <p>Token :${parsedUser.accesToken}</p>
       <p>Password:${parsedUser.password} </p>
        <button id="log" onclick="logOut()">Logout</button>
    </div>
</div>`)
}


let btn=document.getElementById("btn");
let log=document.getElementById("log");

function signup(){
    let name=document.getElementById("name");
let email=document.getElementById("email");
let pass=document.getElementById("pass");
let validatePass=document.getElementById("validatePass");
let err=document.getElementsByClassName("display")
if(name.value===""||email.value===""|| pass.value===""){
   err[0].style.display="block";
}
else if(pass.value!==validatePass.value){
    err[0].style.display="none"
  document.getElementsByClassName("passDisplay")[0].style.display="block"
}
else{

let accesToken=accessToken()
let obj={
        name:name.value,
        email:email.value,
        accesToken:accesToken,
        password:pass.value,
    }
    localStorage.setItem("userDetails",JSON.stringify(obj));
    
  console.log("a");
 renderProfile();
}
    
};
function logOut(){
    localStorage.clear();
    renderSignup();
}
function accessToken(){
    let a=Math.random().toString(32).substr(2);
    return a;
}
 function islogged(){
    let elements=localStorage.getItem("userDetails");
    
    if(elements===null ){
        return false;
    }
    else{
        return true;
    }
 }