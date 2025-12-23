import {  getAccessToken, deleteCookies } from "./Session";

export const logoutOnce = () => {

  try {
    
 



  // console.log("what up I am goonna get yoou : ", sessionStorage.getItem("LOGOUT_IN_PROGRESS"))
  if (sessionStorage.getItem("LOGOUT_IN_PROGRESS")) return;
  // console.log("is this function is running or not ::: ");
  sessionStorage.setItem("LOGOUT_IN_PROGRESS", "true");
  if (getAccessToken()) {
    deleteCookies();
    window.location.replace("/");

  }

   } catch (error) {
    console.log({error})
  }
};