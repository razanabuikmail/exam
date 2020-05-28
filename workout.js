
     var btn=document.getElementById("btn");
     var num=0;
     btn.onclick=function(){
     num++;
    console.log("add post");

    var time=document.getElementById("time").value;
    var Distance=document.getElementById("Distance").value;
    var Avg=document.getElementById("Avg").value;
    var heart-rate=document.getElementById("rate").value;

     
    if(time === " ")||(distance === " ")||(Avg === " ")||(rate === " "){
      alert("nothing to add");
    }else{
    var li=document.createElement("li");
    li.innerHTML= 'time' + "" + 'distance' +""+ 'avg' +""+ 'rate' +  ;

    var ul=document.getElementById("posts")
    ul.appendChild(li);
    time.value="";
    distance.value="";
    avg.value="";
    rate.value="";
}}
