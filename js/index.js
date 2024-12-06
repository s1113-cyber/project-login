var pagesignin = document.getElementById("signin-page")
var pageHome = document.getElementById("home")
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var signup_button = document.getElementById("bu_signup")
 var signin_button = document.getElementById("bu_signin")
var allData =[]





// emptyInputs
function emptyInputs() {
  if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">allinputneeded</span>'
    return false
} 
else {
    return true
};
  
};



//signup_button

signup_button.addEventListener("click", function (){
  var personData = {
    username :signupName.value,
    personEmail : signupEmail.value,
    personpassword : signupPassword.value,
  };

    
   
   if(JSON.stringify(personEmail).includes("@")==true && emptyInputs() == true ){
    allData.push(personData);
   localStorage.setItem("collectData" , JSON.stringify(allData));
   document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
   var usernameData = localStorage.getItem('username')
   document.getElementById('welcomeHome').innerHTML = 'welcome'+ usernameData
   }
   else{
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">faild</span>'
   }

});


//isLoginEmpty


function isLoginEmpty() {

  if (signinPassword.value == "" || signinEmail.value == "") {
      return false
  } else {
      return true
  }
}
//signin
signin_button.addEventListener("click", function (){
  if (isLoginEmpty() == false) {
    document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
}
var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < allData.length; i++){
      if (allData[i].personEmail .toLowerCase() == email.toLowerCase() && allData[i].personpassword.toLowerCase() == password.toLowerCase()){
        pagesignin.classList.add("d-none")
        pageHome.classList.remove("d-none")
      }
      else{
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">this email in database</span>'
      }
    }



})


