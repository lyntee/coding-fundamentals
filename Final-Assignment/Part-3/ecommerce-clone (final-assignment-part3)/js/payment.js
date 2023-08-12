const loggedUsername = document.querySelector("#loggedUser");

window.addEventListener("load", () => {
  // if there's a logged user
  if(Boolean(localStorage.getItem("loggedUser"))) {
    loggedUsername.textContent = JSON.parse(localStorage.getItem("loggedUser")).username;
  }
});