var ans = 0;
var ans1 = "";
var tran = 0;
var cal_b = true;
var point_b = true;
var neg_b = true;
var n = 0;
var count = 0;

function calculate(i){
    tran = Number(ans1);
    if(count == 0){
        ans+=tran;
    }
    else{
        if(i == 0)ans+=tran;
        else if(i == 1)ans-=tran;
        else if(i == 2)ans*=tran;
        else if(i == 3)ans/=tran;
    }
    tran = 0;
    ans1 = "";
    if(cal_b == false)point_b = true;  
}
clr.addEventListener("click", function(){
    cal.innerHTML = "";
    ans = 0;
    ans1 = "";
})
dec.addEventListener("click", function(){
    if(cal_b){
        var str = ans1;
        ans1 = "";
        cal.innerHTML = "";
        for(var i = 0; i < str.length-1;i++){
            cal.innerHTML += str.charAt(i);
            ans1 += str.charAt(i);
        }
    }
})
add.addEventListener("click", function(){
    if(cal_b){
        cal.innerHTML = cal.innerHTML + "+";
        cal_b = false;
        calculate(n);
        n = 0;
        count+=1;
    }
})
sub.addEventListener("click", function(){
    if(cal_b){
        cal.innerHTML = cal.innerHTML + "-";
        cal_b = false;
        calculate(n);
        n = 1;
        count+=1;
    }
})
mul.addEventListener("click", function(){
    if(cal_b){
        cal.innerHTML = cal.innerHTML + "x";
        cal_b = false;
        calculate(n);
        n = 2;
        count+=1;
    }
})
div.addEventListener("click", function(){
    if(cal_b){
        cal.innerHTML = cal.innerHTML + "/";
        cal_b = false;
        calculate(n);
        n = 3;
        count+=1;
    }
})
point.addEventListener("click", function(){
    if(point_b){
        cal.innerHTML = cal.innerHTML + ".";
        ans1 += ".";
        point_b = false;
    }
})
function number(i){
    ans1+=i;
    cal.innerHTML = cal.innerHTML + i;
    cal_b = true;
}
nin.addEventListener("click", function(){
    number("9");
})
eig.addEventListener("click", function(){
    number("8");
})
seven.addEventListener("click", function(){
    number("7");
})
six.addEventListener("click", function(){
    number("6");
})
five.addEventListener("click", function(){
    number("5");
})
four.addEventListener("click", function(){
    number("4");
})
three.addEventListener("click", function(){
    number("3");
})
two.addEventListener("click", function(){
    number("2");
})
one.addEventListener("click", function(){
    number("1");
})
zero.addEventListener("click", function(){
    number("0");
})
equ.addEventListener("click", function(){
    calculate(n);
    list.innerHTML = list.innerHTML + `
        <div id="ans">
            <p>${cal.innerHTML + " = " + ans}</p>
            <hr>
        </div>
    `;
    ans = 0;
    count = 0;
    cal.innerHTML = "";
 })