var r_acc = "B0944223";
var r_pw = 30201013;
var acc = document.getElementById("acc");
var pw = document.getElementById("pw");

btw.addEventListener("click", function(){
    if(r_acc == acc.value && r_pw == pw.value){
        window.location = "web.html";
    }
    else if(acc.value == ""){
        alert("請輸入帳號");
    }
    else{
        alert("帳號或密碼錯誤")
    }
})