var order=[];
var o_products=[];
var details=document.getElementById("details");
var view=document.getElementById("view");

function storeDetails(info) 
{
	sessionStorage.order_detail_display = JSON.stringify(info); 
}

function getOrders()
{
	if (!localStorage.order) 
 { 
 localStorage.order = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.order);
}

function getOrderProducts()
{
	if (!localStorage.orderProducts) 
 { 
 localStorage.orderProducts = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.orderProducts);
}


order=getOrders();
o_products=getOrderProducts();


function appendToDom(obj)
{
	var div=document.createElement("div");
	div.setAttribute("id",obj.o_id);
	div.setAttribute("style","border:1px solid black");
	
	
	var l1=document.createElement("label");
	l1.innerHTML=obj.o_id;
	l1.setAttribute("style","display:block");
	l1.setAttribute("style","padding-right:50px");
	
	
	div.appendChild(l1);
	
	var l2=document.createElement("label");
	l2.innerHTML=obj.u_id;
	l2.setAttribute("style","display:block");
	l2.setAttribute("style","padding-right:50px");
	div.appendChild(l2);
	
	var l3=document.createElement("label");
	l3.innerHTML=obj.Status;
	l3.setAttribute("style","display:block");
	l3.setAttribute("style","padding-right:50px");
	div.appendChild(l3);
	
	var l4=document.createElement("label");
	l4.innerHTML=obj.date;
	l4.setAttribute("style","display:block");
	l4.setAttribute("style","padding-right:50px");
	div.appendChild(l4);
	
	var b=document.createElement("button");
	b.innerHTML="Show More";
	b.addEventListener("click",function(){
		
		var temp=this.parentNode;
		var temp2=temp.id;
		var arr=[];
		for(var i=0;i<o_products.length;i++)
		{
			if(o_products[i].o_id==temp.id)
			{
				arr.push(o_products[i]);
			}
		}
		
		storeDetails(arr);
		window.location="order_details.html";
	});
	div.appendChild(b);
	details.appendChild(div);
}



for(var i=0;i<order.length;i++)
{
appendToDom(order[i]);
}
console.log(order);
console.log(o_products);




