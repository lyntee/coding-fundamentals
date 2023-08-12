const resetPwForm = document.querySelector("#reset-pw-form");
const usernameInput = document.querySelector("#current-username");
const newPwInput = document.querySelector("#reset-pw");

const resetPw = (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const newPw = newPwInput.value;
  const userRecords = JSON.parse(localStorage.getItem("userRecords"));
  const user = userRecords.find( (user) => user.username === username);
  if(Boolean(user)) {
    user.password = newPw;
    localStorage.setItem("userRecords", JSON.stringify(userRecords));
    resetPwForm.reset();
    console.log(userRecords)
    window.location.href = "../html/login.html";
  } else {
    console.log("user does not exist");
    resetPwForm.reset();
    usernameInput.focus();
  }
}

resetPwForm.addEventListener("submit", resetPw);