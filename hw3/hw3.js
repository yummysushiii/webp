document.addEventListener("keydown", function(e){
    
    for(var i = 0; i < 3; i++){
        
        setTimeout(function(){ 
            var ran = Math.floor(Math.random()*(90-65+1))+65;
        var letter = String.fromCharCode(ran);
            var game = document.getElementById("game");
            game.innerHTML = letter + game.innerHTML;
        },2500);
    }

    var guess = document.getElementById("guess");
    if(e.keyCode <= 90 && e.keyCode >= 65){
        guess.innerHTML += e.key.toUpperCase();
    }
    if(e.key.toUpperCase() == game.innerText.substr(-1)){
        var array = new Array();
        array = game.innerText.split("");
        var s = "";
        for(var i = 0; i < game.innerText.length-1;i++){
            s+=array[i];
        }
        game.innerHTML = s;
    }
}, false)