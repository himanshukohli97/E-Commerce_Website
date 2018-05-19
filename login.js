var user_login=document.getElementById("user_login");
var user_password=document.getElementById("user_password");
var s_button=document.getElementById("login_button");
var users=[];
var p;

function storeUsers(info) 
{
	localStorage.info = JSON.stringify(info); 
}

function storeUser(info) 
{
	sessionStorage.sinfo = JSON.stringify(info); 
}

function getStoredUsers()
 { 
 if (!localStorage.info) 
 { // default to empty array
 localStorage.info = JSON.stringify([]); 
 }
 return JSON.parse(localStorage.info);
 }
 
 users=getStoredUsers();
 console.log(users);
 
 function clear()
{
	
	user_login.value="";
	user_password.value="";
}
 
 function validate(){
	var flag=true;
	if(user_login.value=="" || user_password.value=="")
	{
		flag=false;
		return flag;
	}
	else
	{
		
		return flag;
	}

}
 
 s_button.addEventListener("click",function(){
	 
	 if(validate())
	 {
		 var flag=false;
		 for(var i=0;i<users.length;i++)
		 {
			 if(users[i].login==user_login.value)
			 {
				 p=i;
				 flag=true;
				 break;
			 }
		 }
		 if(flag)
		 {
			 
			// window.alert("Registered User");
			if(users[p].pass==user_password.value)
			{
				storeUser(users[p]);
				window.location="cart.html";
			}
			else
			{
				clear();	
				window.alert("Wrong Passsowrd");
			}
		 }
		 else
		 {
			 clear();
			 window.alert("Not a Registered User");
		 }
	 }
	 else
	 {
		 window.alert("Fill the Fields");
	 }
	 
	 
 });