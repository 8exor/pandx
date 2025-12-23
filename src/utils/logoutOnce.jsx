import { setAccessToken, getAccessToken } from "./Session";

export const logoutOnce = () => {
  // console.log("what up I am goonna get yoou : ", sessionStorage.getItem("LOGOUT_IN_PROGRESS"))
  if (sessionStorage.getItem("LOGOUT_IN_PROGRESS")) return;
  // console.log("is this function is running or not ::: ");
  sessionStorage.setItem("LOGOUT_IN_PROGRESS", "true");
  if (getAccessToken()) {
    setAccessToken("");
    window.location.replace("/");

  }
};