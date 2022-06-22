var right = document.getElementById("right");
var intro = document.getElementById("intro");
var left = document.getElementById("left");
var text1 = document.getElementById("text1");
var number1 = document.getElementById("number1");
var text2 = document.getElementById("text2");
var number2 = document.getElementById("number2");
introduction = [
    { ID: '姓名:', text: '賴宸緯'},
    { ID: '性別:', text: '男'},
    { ID: '大學:', text: '長庚大學'}
]
var div1 = document.createElement('div');
var div2 = document.createElement('div'); 
del_num = [];
for(var i = 0; i< introduction.length;i++){
    div1.innerHTML = introduction[i].ID;
    div1.setAttribute('style', 'float:left');
    intro.appendChild(div1);
    div2.innerHTML = introduction[i].text;
    intro.appendChild(div2);
    var del_b = document.createElement('input');
    del_b.setAttribute('type', 'button'); 
    del_b.setAttribute('id', i);
    del_b.setAttribute('value', 'Delete');
    del_b.setAttribute('style', 'float:right');
    del_b.setAttribute("onclick","go(this)")
    intro.appendChild(del_b);
    intro.innerHTML = intro.innerHTML+'<hr>';
    del_num[i] = 0;
}
go = function(oButton){
    del_num[oButton.id] = 1;
    crudApp();
}
function crudApp() {
    intro.innerHTML = "";
    for(var i = 0; i< introduction.length;i++){
        if(del_num[i] == 1){
            continue;
        }
        div1.innerHTML = introduction[i].ID;
        intro.appendChild(div1);
        div2.innerHTML = introduction[i].text;
        intro.appendChild(div2);
        var del_b = document.createElement('input');
        del_b.setAttribute('type', 'button'); 
        del_b.setAttribute('id', i);
        del_b.setAttribute('value', 'Delete');
        del_b.setAttribute('style', 'float:right');
        del_b.setAttribute("onclick","go(this)")
        intro.appendChild(del_b);
        intro.innerHTML = intro.innerHTML+'<hr>';
    }
}
show_intro.addEventListener("click",function(){
    update.setAttribute("style", "display:block");
})
new_intro.addEventListener("click",function(){
    newdate.setAttribute("style", "display:block");
})
new_b.addEventListener("click",function(){
    if(text1.value != "" && number1.value != ""){
        var temp = { ID: number1.value, text: text1.value};
        introduction.push(temp);
        crudApp();
        newdate.setAttribute("style", "display:none");
        text1.value = "";
        number1.value = "";
    }
})
newdate_cancel.addEventListener("click", function(){
    newdate.setAttribute("style", "display:none");
    text1.value = "";
    number1.value = "";
})
change_b.addEventListener("click",function(){
    if(text2.value != "" && number2.value != ""){
        for(var i = 0; i <introduction.length; i++){
            if(introduction[i].ID == number2.value){
                introduction[i].text = text2.value;
                crudApp();
                update.setAttribute("style", "display:none");
                text2.value = "";
                number2.value = "";
                break;
            }
        }
    }   
})
update_cancel.addEventListener("click", function(){
    update.setAttribute("style", "display:none");
    text2.value = "";
    number2.value = "";
})
var usercount = 0;
user.addEventListener("click", function(){
    if(usercount==0){
        intro.setAttribute("style","display:block");
        usercount = 1;
    }else{
        intro.setAttribute("style","display:none");
        usercount = 0;
    }
})

function readURL(input){
    if(input.files && input.files[0]){
        var imageTagID = input.getAttribute("targetID");
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.getElementById(imageTagID);
            img.setAttribute("src", e.target.result)
        }
        reader.readAsDataURL(input.files[0]);
    }
}
    
picture.addEventListener("click", function(){
    var li = document.createElement('div');
    li.innerHTML=`<form action="/somewhere/to/upload" enctype="multipart/form-data">
    <img id="pic" src="#"/>
    <br>
    <input type="file" onchange="readURL(this)" targetID="pic" accept="image/gif, image/jpeg, image/png"/>
    </form>
    <a id = 'good'>0個讚</a>
    <br>
    <textarea id = 'content'></textarea>
    <br>
    <div id='list'>
        <div class='article'>
        </div>
        </div>
    <br>
    <button id = 'release'>發布</button>`
    +"<button id = 'del'>刪除</button><hr>";
    right.insertBefore(li,right.children[0]);
    var as=document.querySelectorAll('#del');
    var picture=document.getElementById('pic');
    var good=document.getElementById('good');
    var list =document.getElementById("list");
    var release =document.getElementById('release');
    var content = document.getElementById("content")
    var count = 0;
    var point= false;
    
    picture.addEventListener("click", function(){
        if(point == false){
            count = count+1;
            point = true;
            good.innerHTML = count+"個讚";
        }else{
            count = count-1;
            point = false;
            good.innerHTML = count+"個讚";
        }
    })
    release.addEventListener("click", function(){
        list.innerHTML=list.innerHTML + `
        <div class="article">
            <p>${content.value}</p>
            <hr>
        </div>
        `;
    })

    for(var i=0;i<as.length;i++){
        as[i].addEventListener("click", function(){
            right.removeChild(this.parentNode);
        })
    }
})


