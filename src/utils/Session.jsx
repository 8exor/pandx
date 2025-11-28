import Cookies from "js-cookie";


Cookies.set('name', 'value', {expires : 7})
Cookies.set('username', 'john cena')

const username = Cookies.get('username');
console.log(username);

export async function setAccessToken(token){
  return  await Cookies.set("ACCESS_TOKEN", token)
}

export async function getAccessToken(){ 
  return  await Cookies.get("ACCESS_TOKEN")
}

export async function deleteCookies(){
   await Cookies.remove("ACCESS_TOKEN")
}