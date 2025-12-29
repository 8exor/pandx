import {  getAccessToken, deleteCookies, setAccessToken } from "./Session";

export const logoutOnce = () => {

  try {
  // if (sessionStorage.getItem("LOGOUT_IN_PROGRESS")) return;
  // sessionStorage.setItem("LOGOUT_IN_PROGRESS", "true");
  console.log("what s up getaccestoken ", getAccessToken())
  if (getAccessToken()) {
   deleteCookies();
    window.location.replace("/");

  }

   } catch (error) {
    console.log({error})
  }
};