var lis=document.getElementById("items");
var arr=[];
var u_detail=[];
cart=[];

function storeItem(item) 
{
	localStorage.cart = JSON.stringify(item); 
}

function getCartProducts()
 { 
 if (!localStorage.cart) 
 { // default to empty array
 localStorage.cart = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.cart);
 }


function getStoredProducts()
{
	if (!localStorage.p) 
 { 
 localStorage.p = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.p);
}


function getUserDetail()
{
	if (!sessionStorage.sinfo) 
 { 
 sessionStorage.sinfo = JSON.stringify([]); 
 }
 return JSON.parse(sessionStorage.sinfo);
}




arr=getStoredProducts();
console.log(arr);
cart=getCartProducts();
u_detail=getUserDetail();
console.log(u_detail);
console.log(cart);


var but=document.createElement("button");
if(u_detail.length!=0)
{
	but.innerHTML="Logout";
	but.addEventListener("click",function(){
		
		window.location="login.html";
	});
}
else
{
	but.innerHTML="Login";
	but.addEventListener("click",function(){
		window.location="login.html";
	});
}
document.getElementById("status").appendChild(but);


function appendToDom(obj)
{
	var br=document.createElement("br");
	
	var div=document.createElement("div");
	div.setAttribute("id",obj.id);
	div.setAttribute("style","border:1px solid black;width:100%");
	
	var na=document.createElement("label");
	na.innerHTML=obj.name;
	div.appendChild(na);
	
	div.innerHTML+='&emsp;&emsp;&emsp;';
		
	var pri=document.createElement("label");
	pri.innerHTML=obj.price;
	div.appendChild(pri);
	
	div.innerHTML+='&emsp;&emsp;&emsp;';
	
	var qt=document.createElement("input");
	qt.setAttribute("type","text");
	qt.setAttribute("name","qty");
	qt.value=1;
	div.appendChild(qt);
	
	div.innerHTML+='&emsp;&emsp;&emsp;';
	
	var atc=document.createElement("button");
	atc.innerHTML="Add To Cart";
	atc.addEventListener("click",function(event){
		if(u_detail.length!=0)
		{
			var temp=this.parentNode;
			var flag=true;
			for(var i=0;i<cart.length;i++)
			{
				if(cart[i].u_id==u_detail.login && cart[i].p_id==temp.id)
				{
					var temp=this.parentNode;
					cart[i].qty=Number(cart[i].qty)+Number(temp.childNodes[4].value);
					flag=false;
					break;
				}
			}
			
			if(flag)
			{
				var temp=this.parentNode;
				var obj=new Object();
				obj.u_id=u_detail.login;
				obj.p_id=temp.id;
				obj.name=temp.childNodes[0].innerHTML;
				obj.price=temp.childNodes[2].innerHTML;
				obj.qty=temp.childNodes[4].value;
				cart.push(obj);
			}
			storeItem(cart);
			console.log(cart);
			
		}
		else
		{
			window.location="login.html";
		}
		
		
		
	});
	div.appendChild(atc);
	
	
	lis.appendChild(div);
	
}

for(var i=0;i<arr.length;i++)
{
	appendToDom(arr[i]);
}


