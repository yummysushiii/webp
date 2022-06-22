var real_username = "B0944223";
var real_password = "91110726";
var username1 = document.getElementById("username1");
var password1 = document.getElementById("password1");
var fullname = document.getElementById("fullname");
var username2 = document.getElementById("username2");
var password2 = document.getElementById("password2");
var comfirm_password = document.getElementById("comfirm_password");

createAccount=[
    {user:'B0944223', password:'91110726'}
]


function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        username1.value="";
        password1.value="";
        signup.style.display = "none";  //signup消失
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
     
        fullname.value="";
        username2.value="";
        password2.value="";
        comfirm_password.value="";
    }
}

submit1.addEventListener("click", function(){
    for(var i = 0; i < createAccount.length;i++){
        if(createAccount[i].user == username1.value){
            if(createAccount[i].password == password1.value){
                window.location = "web.html";
                alert("確認")
            }
            else if(password1.value == ""){
            }
            else{
                alert("密碼錯誤");
            }
        }
        else if(createAccount[i].user == ""){
        }
    }
    alert("查無此帳號");
})

submit2.addEventListener("click", function(){
    if(fullname.value != "" && username2.value != "" && password2.value != "" &&  comfirm_password.value != ""){
        if(password2.value != comfirm_password.value){
            alert("確認密碼錯誤");
        }else if(password2.value != "" && username2.value != ""){
            var temp = { user: username2.value, password: password2.value};
            createAccount.push(temp);
            alert("註冊成功");
        }
    }  
})