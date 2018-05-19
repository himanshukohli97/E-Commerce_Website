var user_name=document.getElementById("user_name");
var user_login=document.getElementById("user_login");
var user_password=document.getElementById("user_password");
var s_button=document.getElementById("submit_button");
var r_button=document.getElementById("reset_button");
var info=[];

function storeUsers(info) 
{
	localStorage.info = JSON.stringify(info); 
}
function getStoredUsers()
 { 
 if (!localStorage.info) 
 { // default to empty array
 localStorage.info = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.info);
 }
//storeUsers(info);
info=getStoredUsers();
console.log(info);

function check_user()
{
	var flag=true;
	for(var i=0;i<info.length;i++)
	{
		if(info[i].login==user_login.value)
		{
			flag=false;
			break;
		}
	}
	if(!flag)
	window.alert("User Already Exixt");

	return flag;
}

function check_password()
{
	var mediumRegex = new RegExp(("^(?=.{0,8}$)(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[!@#$%^&*])"));
	if((user_password.value.match(mediumRegex)))
	return true;
	else 
	{
		window.alert("Invalid Password");
		return false;
	}
}

function validate(){
	var flag=true;
	if(user_name.value=="" || user_login.value=="" || user_password.value=="")
	{
		flag=false;
		window.alert("Complete te form");
		return flag;
	}
	else
	{	
		if(!check_user())
		{
			flag=false;
		}
		else if(!check_password())
		{
			flag=false;
		}
		return flag;
	}

}

function clear()
{
	user_name.value="";
	user_login.value="";
	user_password.value="";
}

r_button.addEventListener("click",function(){
	clear();
});

s_button.addEventListener("click",function(){
		if(validate())
		{
			
			var obj=new Object();
			obj.login=user_login.value;
			obj.pass=user_password.value;
			obj.name=user_name.value;
			info.push(obj);
			storeUsers(info);
			clear();
			console.log(info);
			window.location="login.html";
		}
		else
		{
			clear();
		}
		
});