import { setAccessToken } from "./Session";

export const logoutOnce = () => {

  if (sessionStorage.getItem("LOGOUT_IN_PROGRESS")) return;
 
  sessionStorage.setItem("LOGOUT_IN_PROGRESS", "true");
  setAccessToken("");
  window.location.replace("/");
};