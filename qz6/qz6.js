var demo = document.getElementById("demo");
setInterval(function(){
    date = new Date();
    demo.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
})