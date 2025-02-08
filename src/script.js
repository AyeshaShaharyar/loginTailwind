// array of users array of object with  username, password
//input values add them to the ussers
//on click check the task if it includes the user then add class hiden to the main div(login container) and remove hidden from the dashboard container
//onclick logout  remocve hidden from login and add hidden to logout

// In-memory user database
const users = [
  { username: "user", password: "123xyz" },
  { username: "user1", password: "123abc" },
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  //check if user exists in db
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    //login
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("user-name").innerText = username;
  } else {
    //show error message
    message.innerText = "Invalid username or password.";
  }
}

function logout() {
  //reset the states
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("message").innerText = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
