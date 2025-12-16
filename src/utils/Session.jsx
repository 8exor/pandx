import Cookies from "js-cookie";


Cookies.set('name', 'value', {expires : 7})
Cookies.set('username', 'john cena')

const username = Cookies.get('username');


export  function setAccessToken(token){
  return   Cookies.set("ACCESS_TOKEN", token)
}

export  function getAccessToken(){ 
  return  Cookies.get("ACCESS_TOKEN")
}

export  function deleteCookies(){
    Cookies.remove("ACCESS_TOKEN")
}