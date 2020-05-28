	var counter=2;
	var num=document.getElementById("counter");
	var list = document.getElementById("friends");

	var suggested=document.getElementById("suggested");
	var tammy=document.getElementById("tammy");
	var jeffery=document.getElementById("jeffery");
	var jone=document.getElementById("jone");

	var firstButton=document.getElementById("first");
    var secondButton=document.getElementById("second");
    var thirdButton=document.getElementById("third");

    var img=document.getElementById("img");
    var img2=document.getElementById("img2");
    var img3=document.getElementById("img3");


	firstButton.onclick=function()

	{    
		 counter++;
		 num.innerHTML=counter+ " freinds";
         img.remove();
         tammy.remove();
         firstButton.remove();
         list.append(tammy);
         list.append(img);
	}

	secondButton.onclick=function()

	{    
		 counter++;
		 num.innerHTML=counter+ " freinds";
         img2.remove();
         jeffery.remove();
         secondButton.remove();
         list.append(jeffery);
         list.append(img2);
	}

	thirdButton.onclick=function()

	{    
		 counter++;
		 num.innerHTML=counter+ " freinds";
         img3.remove();
         jone.remove();
         thirdButton.remove();
         list.append(jone);
         list.append(img3);
	}
 
 