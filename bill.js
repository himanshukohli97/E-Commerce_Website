var pd=document.getElementById("p_detail");
var total=document.getElementById("total");
var o_button=document.getElementById("order");

var arr=[];
var cart=[];
var user;
var idx;
var order=[];
var o_product=[];

function storeItem(item) 
{
	localStorage.cart = JSON.stringify(item); 
}

function getUser()
{
	if (!sessionStorage.sinfo) 
 { 
 sessionStorage.sinfo = JSON.stringify([]); 
 }
 return JSON.parse(sessionStorage.sinfo);
}

function getCartProducts()
{
	if (!localStorage.cart) 
 { 
 localStorage.cart = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.cart);
}

function storeOrderProducts(xyz)
{
		localStorage.orderProducts = JSON.stringify(xyz); 
}

function storeOrder(xyz)
{
	localStorage.order = JSON.stringify(xyz); 
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

user=getUser();
cart=getCartProducts();
order=getOrders();
o_product=getOrderProducts();
console.log(order);
console.log(o_product);


var i=0;
for(var j=0;j<cart.length;j++)
{
	if(cart[j].u_id==user.login)
	{
		arr[i++]=cart[j];
	}
}

function clearUserCart()
{
	
	for(var i=0;i<cart.length;)
	{
		if(cart[i].u_id==user.login)
		{
			cart.splice(i,1);
		}	
		else
		{
			i++;
		}
	
	}
		
}

o_button.addEventListener("click",function(){
	if(order.length==0)
	{
		idx=1;
	}
	else
	{
		idx=order.length+1;
	}
	
	if(arr.length!=0)
	{
		var date=new Date();
		var d=date.getDate()+'-'+date.getMonth()+'-'+date.getYear();
		var obj=new Object();
		obj.o_id=idx;
		obj.u_id=user.login;
		obj.Status=false;
		obj.date=d;
		order.push(obj);
		storeOrder(order);
		console.log(order);
	}
	
	for(var i=0;i<arr.length;i++)
	{
		var o=new Object();
		o.o_id=idx;
		o.p_id=arr[i].p_id;
		o.name=arr[i].name;
		o.price=arr[i].price;
		o.qty=arr[i].qty;
		o_product.push(o);
	}
	
	clearUserCart();
	storeItem(cart);
	storeOrderProducts(o_product);
	console.log(o_product);
	window.alert("Order Placed");
	window.location="Cart.html";
	
});



function calculateTotal()
{
	var sum=0;
	for(var i=0;i<arr.length;i++)
	{
		sum=sum+(arr[i].qty*arr[i].price);
	}
	var el=document.createElement("label");
	el.innerHTML=sum;
	total.innerHTML="";
	var h=document.createElement("h2");
	h.innerHTML="Total";
	total.appendChild(h);
	total.appendChild(el);
}

function removeElement(n)
{
	var p;
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i].p_id==n)
		{
			p=i;
		}	
	}
		return p;
}

function removeFromCart(n)
{
	var p;
	for(var i=0;i<cart.length;)
	{
		if(cart[i].u_id==user.login && cart[i].p_id==n)
		{
			cart.splice(i,1);
		}	
		else
		{
			i++;
		}
	
	}
		return p;
}


function appendToDom(obj)
{
	var div=document.createElement("div");
	div.setAttribute("id",obj.p_id);
	div.setAttribute("style","border:1px solid black;width:100%");
	
	
	var na=document.createElement("label");
	na.innerHTML=obj.name;
	div.appendChild(na);
	
	div.innerHTML+='&emsp;&emsp;&emsp;';
	
	var pri=document.createElement("label");
	pri.innerHTML=obj.price;
	div.appendChild(pri);
	
	div.innerHTML+='&emsp;&emsp;&emsp;';
	
	var qt=document.createElement("label");
	qt.innerHTML=obj.qty;
	div.appendChild(qt);	
	div.innerHTML+='&emsp;&emsp;&emsp;';
	
	
	var st=document.createElement("label");
	st.innerHTML=obj.qty*obj.price;
	div.appendChild(st);
	
	div.innerHTML+='&emsp;&emsp;&emsp;';
	
	var but=document.createElement("button");
	but.innerHTML="delete";
	but.addEventListener("click",function(event){
		
		var temp=this.parentNode;
		
		var x=removeElement(temp.id);
		arr.splice(x,1);
		removeFromCart(temp.id);
		storeItem(cart);
		calculateTotal();
		temp.parentNode.removeChild(temp);
		
	});
	div.appendChild(but);
	
	pd.appendChild(div);
	console.log()
	
	
	
}


for(var i=0;i<arr.length;i++)
{
	appendToDom(arr[i]);
	
}

calculateTotal();


