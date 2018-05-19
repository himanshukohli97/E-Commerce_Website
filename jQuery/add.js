$(document).ready(function(){
	var p_id=1;	
	$("#add").click(function(){
		$("#pannel").show();
	});	
	$("#submit").click(function(){
		if( $("#pname").value!="" && $("#detail").value!="" && $("#qty").value!="" && $("#price").value!="" )
		{
			var div=$("div").attr("id",p_id++);
			var n=$("p").text=$("#pname").value;
			div.append(n);
			div.innerHTML+='&emsp;&emsp;&emsp;';
			var det=$("p").text=$("#detail").value;
			div.append(det);
			div.innerHTML+='&emsp;&emsp;&emsp;';
			var p=$("#p").text=$("#price").value;
			div.append(p);
			div.innerHTML+='&emsp;&emsp;&emsp;';
			var q=$("p").text=$("#qty").value;
			div.append(q);
			div.innerHTML+='&emsp;&emsp;&emsp;';
			
		/*	var e_b=$("button").text="Edit";
			e_b.attr('id',"edit");
			div.append(e_b);
			div.innerHTML+='&emsp;';
			
			var d_b=$("button").text="Delete";
			d_b.attr('id',"delete");
			div.append(d_b);*/
			
			
			$("#LOP").append(div);
			$("#LOP").append($("br"));
		}
		
	});
	
	
	
});