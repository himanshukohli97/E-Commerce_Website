var d=document.getElementById("detail");

function getStoredUsers()
 { 
 if (!sessionStorage.order_detail_display) 
 { // default to empty array
 sessionStorage.order_detail_display = JSON.stringify([]); 
 }
 return JSON.parse(sessionStorage.order_detail_display);
 }
 
 var arr=[];
 arr=getStoredUsers();
 console.log(arr);
 
 
	 var main_div=document.createElement("div");
		main_div.setAttribute("style","border:1px solid black");
		
			var x1=document.createElement("label");
			x1.innerHTML="NAME";
			x1.setAttribute("style","display:block");
			x1.setAttribute("style","padding-right:50px");
			main_div.appendChild(x1);
			
			var x2=document.createElement("label");
			x2.innerHTML="Price";
			x2.setAttribute("style","display:block");
			x2.setAttribute("style","padding-right:50px");
			main_div.appendChild(x2);
			
			var x3=document.createElement("label");
			x3.innerHTML="Quantity";
			x3.setAttribute("style","display:block");
			x3.setAttribute("style","padding-right:50px");
			main_div.appendChild(x3);
			
			
		
		
		
		for(var i=0;i<arr.length;i++)
		{
			var sub_div=document.createElement("div");
			sub_div.setAttribute("style","border:1px solid black");
			
			var r1=document.createElement("label");
			r1.innerHTML=arr[i].name;
			r1.setAttribute("style","display:block");
			r1.setAttribute("style","padding-right:50px");
			sub_div.appendChild(r1);
			
			var r2=document.createElement("label");
			r2.innerHTML=arr[i].price;
			r2.setAttribute("style","display:block");
			r2.setAttribute("style","padding-right:50px");
			sub_div.appendChild(r2);
			
			var r3=document.createElement("label");
			r3.innerHTML=arr[i].qty;
			r3.setAttribute("style","display:block");
			r3.setAttribute("style","padding-right:50px");
			sub_div.appendChild(r3);
			
			main_div.appendChild(sub_div);
		}
		
		d.appendChild(main_div);
		
		
	
 
 
 


 
 function back()
 {
	 window.location="orderList.html";
 }