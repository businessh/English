function setCookie(doc,name,value)
{
	window.localStorage.setItem(name,value);
	return getCookie(doc,name);
}


function getCookie(doc,name)      
{
   return window.localStorage.getItem(name);
}
