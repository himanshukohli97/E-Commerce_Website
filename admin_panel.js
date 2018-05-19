var b1=document.getElementById("home");
var b2=document.getElementById("users");

 document.getElementById("display").innerHTML="<center><h1>Home Page</h1></center>";

b1.addEventListener("click",function(){
	
	document.getElementById("display").innerHTML="<center><h1>Home Page</h1></center>";

});

b2.addEventListener("click",function(){
	
	document.getElementById("display").innerHTML='<object width="100%" height="100%" type="text/html" data="addQues.html"></object>';
});


