// const params = new URLSearchParams(window.location.search)

// const loginForm = document.querySelector(".login");
// const getUsers = document.querySelector(".get-users");

fetch("http://localhost:3000/users/")
.then(response => response.json())
.then(console.log);
// loginForm.addEventListener("submit", handleLogin);
// getUsers.addEventListener("click", handleGetUsers);

// function displayUsers(users) {
//     users.forEach(user => {
//         const 
//     })

