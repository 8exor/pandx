import Cookies from "js-cookie";




export  function setAccessToken(token){
  return   Cookies.set("ACCESS_TOKEN", token)
}

export  function getAccessToken(){ 
  return  Cookies.get("ACCESS_TOKEN")
}

export  function deleteCookies(){
  return  Cookies.remove("ACCESS_TOKEN")
}