var addProduct=document.getElementById("aAddProduct");
var divForm=document.getElementById("AddProduct");
var divList=document.getElementById("ListOfProducts");
var p = [];


p=getStoredProducts();
console.log(p);
var p_id=1;

if(p.length!=0)
{
	p_id=p[p.length-1].id+1;
}


for(var i=0;i<p.length;i++)
{
		appendToDom(p[i]);
}

function storeProducts(p) 
{
	localStorage.p = JSON.stringify(p); 
}
function getStoredProducts()
 { 
 if (!localStorage.p) 
 { // default to empty array
 localStorage.p = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.p);
 }


function changeDom(ind2)
{
	var x=p[ind2].id;
	var rag=document.getElementById(x);
		console.log(rag.childNodes);
	rag.childNodes[0].innerHTML=p[ind2].name+" ";
	rag.childNodes[2].innerHTML=p[ind2].detail+" ";
	rag.childNodes[4].innerHTML=p[ind2].price+" ";
	rag.childNodes[6].innerHTML=p[ind2].qty+" ";
}

function removeFromProductsArray(selectedProductIndex)
{
	p.splice(selectedProductIndex,1);
	console.log(p);
	storeProducts(p);
}

function getProductIndex(id) 
{
    for (var i = 0; i < p.length; i++) 
	{
        if (p[i].id == id) 
			return i;
    }
} 

function editPanel(ind2)
{
	hide(addProduct);
var varForm2=document.createElement("form");
varForm2.id="myForm2";



var varP=document.createTextNode("Product Name:");
varForm2.appendChild(varP);
var c=document.createElement("input");
c.setAttribute('type',"text");
c.setAttribute('name',"pName");
c.value=p[ind2].name;
varForm2.appendChild(c);


insertBlank(varForm2);
insertBlank(varForm2);
insertBlank(varForm2);

var des=document.createTextNode("Product Details:");
varForm2.appendChild(des);
var des2=document.createElement("textarea");
des2.setAttribute('type',"text");
des2.setAttribute('name',"details");
des2.value=p[ind2].detail;
varForm2.appendChild(des2);

insertBlank(varForm2);
insertBlank(varForm2);
insertBlank(varForm2);

var rate=document.createTextNode("Price:");
varForm2.appendChild(rate);
var d=document.createElement("input");
d.setAttribute('type',"text");
d.setAttribute('name',"price");
d.value=p[ind2].price;
varForm2.appendChild(d);

insertBlank(varForm2);
insertBlank(varForm2);
insertBlank(varForm2);

var qty=document.createTextNode("Quantity:");
varForm2.appendChild(qty);
var e=document.createElement("input");
e.setAttribute('type',"text");
e.setAttribute('name',"quantity");
e.value=p[ind2].qty;
varForm2.appendChild(e);

insertBlank(varForm2);
insertBlank(varForm2);
insertBlank(varForm2);

var eButton=document.createElement("button");
var eText=document.createTextNode("Edit");
eButton.appendChild(eText);
varForm2.appendChild(eButton);
eButton.addEventListener("click",function(event){
	event.preventDefault();
	p[ind2].qty=e.value;
		p[ind2].price=d.value;
		p[ind2].detail=des2.value;
		p[ind2].name=c.value;
		console.log(p);
		changeDom(ind2);
		storeProducts(p);
		myForm2.parentNode.removeChild(myForm2);
			unhide(addProduct);
});

divForm.appendChild(varForm2);
}//end of edit pannel
function appendToDom(obj)
{
		
		var t_div=document.createElement("div");
		t_div.setAttribute("id",obj.id);
		t_div.setAttribute("style","border:1px solid black;width:100%");
	
		var l1=document.createElement("label");
		l1.innerHTML=obj.name;
		t_div.appendChild(l1);
		
		t_div.innerHTML+='&emsp;&emsp;&emsp;';
		
		var l2=document.createElement("label");
		l2.innerHTML=obj.detail;
		t_div.appendChild(l2);
		
		t_div.innerHTML+='&emsp;&emsp;&emsp;';
		
		var l3=document.createElement("label");
		l3.innerHTML=obj.price;
		t_div.appendChild(l3);
		
		t_div.innerHTML+='&emsp;&emsp;&emsp;';
		
		var l4=document.createElement("label");
		l4.innerHTML=obj.qty;
		t_div.appendChild(l4);
		
		t_div.innerHTML+='&emsp;&emsp;&emsp;';
		
		var b=document.createElement("button");
		
		var t=document.createTextNode("delete");
		b.appendChild(t);
		t_div.appendChild(b);
		
		b.addEventListener("click",function(event){
			var t_parent=event.target.parentNode;
			var ind=getProductIndex(t_parent.id);
			removeFromProductsArray(ind);
			t_parent.parentNode.removeChild(t_parent);
			
		});
		
		var b2=document.createElement("button");
		var t2=document.createTextNode("edit");
		b2.appendChild(t2);
		
		t_div.appendChild(b2);
		
		b2.addEventListener("click",function()
		{
				var t_parent2=event.target.parentNode;	
				hide(addProduct);
				var ind2=getProductIndex(t_parent2.id);
				editPanel(ind2);
				
		});
		
		
		insertBlank(t_div);
		
		divList.appendChild(t_div);
}	

function transfer()
{
	var obj=new Object();
	obj.id=p_id;
	obj.name=document.forms["myForm"]["pName"].value;
	obj.detail=document.forms["myForm"]["details"].value;
	obj.price=document.forms["myForm"]["price"].value;
	obj.qty=document.forms["myForm"]["quantity"].value;
	p.push(obj);
	storeProducts(p);
	console.log(p);
	appendToDom(obj);
	p_id++;
}

function insertBlank(varForm)
{
	var blank=document.createElement("br");
	varForm.appendChild(blank);
}

function hide(abc)
{
		abc.setAttribute("style","visibility:hidden");
}

function unhide(abc)
{
	abc.setAttribute("style","visibility:visible");
}	

function checkValidity()
{
		
		if(document.forms["myForm"]["pName"].value=="")
			return false;
		else if(document.forms["myForm"]["details"].value=="")
			return false;
		else if(document.forms["myForm"]["price"].value=="")
			return false;
		else if(document.forms["myForm"]["quantity"].value=="")
			return false;
		else		
		return true;
}

function createPanel()
{
	hide(addProduct);
var varForm=document.createElement("form");
varForm.id="myForm";



var varP=document.createTextNode("Product Name:");
varForm.appendChild(varP);
var c=document.createElement("input");
c.setAttribute('type',"text");
c.setAttribute('name',"pName");
varForm.appendChild(c);


insertBlank(varForm);
insertBlank(varForm);
insertBlank(varForm);

var des=document.createTextNode("Product Details:");
varForm.appendChild(des);
var des2=document.createElement("textarea");
des2.setAttribute('type',"text");
des2.setAttribute('name',"details");
varForm.appendChild(des2);

insertBlank(varForm);
insertBlank(varForm);
insertBlank(varForm);

var rate=document.createTextNode("Price:");
varForm.appendChild(rate);
var d=document.createElement("input");
d.setAttribute('type',"text");
d.setAttribute('name',"price");
varForm.appendChild(d);

insertBlank(varForm);
insertBlank(varForm);
insertBlank(varForm);

var qty=document.createTextNode("Quantity:");
varForm.appendChild(qty);
var e=document.createElement("input");
e.setAttribute('type',"text");
e.setAttribute('name',"quantity");
varForm.appendChild(e);

insertBlank(varForm);
insertBlank(varForm);
insertBlank(varForm);

var sButton=document.createElement("button");
var bText=document.createTextNode("submit");
sButton.appendChild(bText);
varForm.appendChild(sButton);
sButton.addEventListener("click",function(event){
	event.preventDefault();
		if(checkValidity(varForm))
		{
			transfer();
			myForm.parentNode.removeChild(myForm);
			unhide(addProduct);
		}
		else
		{
			window.alert("Incomplete Form");
		}	
		
});



divForm.appendChild(varForm);
}


addProduct.addEventListener("click",function(event)
{
createPanel();

});

