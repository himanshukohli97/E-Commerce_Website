var request = new XMLHttpRequest();
var a=document.getElementById("a");  
function append(obj)
{
	var table=document.createElement("table");
	table.style.border="1px solid black";
	table.setAttribute("style","border-collapse: collapse");
	for(var i=0;i<obj.length;i++)
	{
		var tr=document.createElement("tr");
		
		var td1=document.createElement("td");
		td1.setAttribute("style","border:1px solid black");
		
		td1.style.paddingRight="20";
		
		td1.innerHTML=obj[i].id;
		tr.appendChild(td1);
		
		var td2=document.createElement("td");
		td2.style.border="1px solid black";
		td2.style.paddingRight="20";
		td2.innerHTML=obj[i].name;
		tr.appendChild(td2);
		
		var td3=document.createElement("td");
		td3.style.border="1px solid black";
		td3.style.paddingRight="20";
		td3.innerHTML=obj[i].detail;
		tr.appendChild(td3);
		
		var td4=document.createElement("td");
		td4.style.border="1px solid black";
		td4.style.paddingRight="20";
		td4.innerHTML=obj[i].price;
		tr.appendChild(td4);
		
		var td5=document.createElement("td");
		td5.style.border="1px solid black";
		td5.style.paddingRight="20";
		td5.innerHTML=obj[i].qty;
		tr.appendChild(td5);
		
		table.appendChild(tr);
	}
	a.appendChild(table);
}
  
  
request.addEventListener('load', function() 
{
    var products = JSON.parse(request.responseText);
	console.log(products);
    append(products);
});

  request.open('GET', '/product');
  request.send();