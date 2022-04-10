var str = [];
var str1 = "";
var str2 = "";
var str3 = "";
var str4 = "";
var str5 = "";
var str6 = "";
var count = 0;

$(document).ready(function(){
    $(document).one("keydown",function(){
        run();
    });

    $(document).keydown(function(event){
        check(event);
    });
});
 
function run(){
    setInterval(function (){
        for(var i =0;i<6;i++){
            var ran = Math.floor(Math.random()*(90-65+1))+65;
            var letter = String.fromCharCode(ran);
            str[i] = letter;
        }   
        str1 = str[0] + str1;
        one(str[0]);
        str2 = str[1] + str2;
        two(str[1]);
        str3 = str[2] + str3;
        three(str[2]);
        str4 = str[3] + str4;
        four(str[3]);
        str5 = str[4] + str5;
        five(str[4]);
        str6 = str[5] + str6;
        six(str[5]);
        count++;
    }, 1500);
}

function check(event){
    if(event.key.toUpperCase() == str1.charAt(str1.length-1)){
        $("#1").empty();
        var array = new Array();
        array = str1.split("");
        var s = "";
        for(var i = 0; i < str1.length-1;i++){
            s+=array[i];
        }
    }else if(event.key.toUpperCase() == str2.charAt(str2.length-1)){
        $("#2").empty();
        var array = new Array();
        array = str2.split("");
        var s = "";
        for(var i = 0; i < str2.length-1;i++){
            s+=array[i];
        }
    }else if(event.key.toUpperCase() == str3.charAt(str3.length-1)){
        $("#3").empty();
        var array = new Array();
        array = str3.split("");
        var s = "";
        for(var i = 0; i < str3.length-1;i++){
            s+=array[i];
        }
    }else if(event.key.toUpperCase() == str4.charAt(str4.length-1)){
        $("#4").empty();
        var array = new Array();
        array = str4.split("");
        var s = "";
        for(var i = 0; i < str4.length-1;i++){
            s+=array[i];
        }
    }else if(event.key.toUpperCase() == str5.charAt(str5.length-1)){
        $("#5").empty();
        var array = new Array();
        array = str5.split("");
        var s = "";
        for(var i = 0; i < str5.length-1;i++){
            s+=array[i];
        }
    }else if(event.key.toUpperCase() == str6.charAt(str6.length-1)){
        $("#6").empty();
        var array = new Array();
        array = str6.split("");
        var s = "";
        for(var i = 0; i < str6.length-1;i++){
            s+=array[i];
        }
    }
}

function one(i){
    var load = "#1";
    letters(i,load);
    move();
}

function two(i){
    var load = "#2";
    letters(i,load); 
    move();
}
function three(i){
    var load = "#3";
    letters(i,load); 
    move();
}
function four(i){
    var load = "#4";
    letters(i,load); 
    move();
}

function five(i){
    var load = "#5";
    letters(i,load);
    move(); 
}

function six(i){
    var load = "#6";
    letters(i,load); 
    move();
}

function letters(i, load){
    var pic;
    if(i == "A"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/1200px-LetterA.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "B"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/1200px-LetterB.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "C"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/LetterC.svg/1200px-LetterC.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
    else if(i == "D"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/LetterD.svg/1200px-LetterD.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "E"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/LetterE.svg/800px-LetterE.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
    else if(i == "F"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/LetterF.svg/1200px-LetterF.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
    else if(i == "G"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/LetterG.svg/800px-LetterG.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "H"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/LetterH.svg/1200px-LetterH.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "I"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/U%2B2160.svg/1200px-U%2B2160.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
    else if(i == "J"){
        pic = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhBG7qa2RRUAEbxQqEBNSluBVZaPLOaSz2dLAqXKP001CBdxmlmGBm-eiu0-KEITbojk&usqp=CAU" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
    else if(i == "K"){
        pic = '<img src="https://w7.pngwing.com/pngs/908/509/png-transparent-letter-k-logo-font-agathe-auproux-angle-text-logo.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "L"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/U%2B216C.svg/1200px-U%2B216C.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "M"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Cirila-%D0%BC-minuskla.svg/800px-Cirila-%D0%BC-minuskla.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "N"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/LetterN.svg/640px-LetterN.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
    else if(i == "O"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1200px-Letter_o.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "P"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/LetterP.svg/800px-LetterP.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "Q"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/LetterQ.svg/1200px-LetterQ.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "R"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/LetterR.svg/800px-LetterR.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "S"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/LetterS.svg/1200px-LetterS.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "T"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/LetterT.svg/1200px-LetterT.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "U"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/LetterU.svg/1200px-LetterU.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "V"){
        pic = '<img src="https://ae01.alicdn.com/kf/H63c8484fbf234703823b8637ee8338f4u.jpg" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "W"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Letter_w.svg/1200px-Letter_w.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "X"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LetterX.svg/1200px-LetterX.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic); 
    }
    else if(i == "Y"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/LetterY.svg/640px-LetterY.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
    else if(i == "Z"){
        pic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/LetterZ.svg/800px-LetterZ.svg.png" style="height: 50px; width: 50px;position: absolute;">';
        $(load).append(pic);
    }
}

function move(){
    $(document).ready(function(){
        $("img").animate({left: '+=1000px'}, 2500, function(){
            location.reload();
            window.alert("Your lose!");
        });
    });
}


