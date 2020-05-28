 
     var btn=document.getElementById("btn");
     var num=0;
     btn.onclick=function(){
     num++;
    console.log("add sport");

    var input=document.getElementById("input-sport");
    var sport=input.value;
    if(sport ===""){
      alert("enter sport type ");

    }else{
    var li=document.createElement("li");
    li.innerHTML= sport;
    var ul=document.getElementById("s-list")
    ul.appendChild(li);
    input.value="";
}}