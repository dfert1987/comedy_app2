const loginForm = document.querySelector(".login");
const getUsers = document.querySelector(".get-users");
// const toHeadliners = document.querySelector(".view_headliners");

// const newUser = document.querySelector(".new_user")

loginForm.addEventListener("submit", handleLogin);
getUsers.addEventListener("click", handleGetUsers);
// toHeadliners.addEventListener("click", toHeadlinerPage);
// newUser.addEventListener("submit", saveUser);

// function saveUser() {
//     const formData = new formData(newUser)
//     const usernameInput = formData.get('name')
//     const passwordInput = formData.get('password_digest')
//     const userObject = {
// }

// function toHeadlinerPage() {

// }
function handleGetUsers() {
    console.log("token", localStorage.token);
    fetch("http://localhost:3000/users", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ localStorage.token }`
        }
    })
    .then(response => response.json())
    .then(console.log)
}

function handleLogin(event) {
    event.preventDefault();

    const loginFormData = new FormData(event.target);
    const name = loginFormData.get("name");
    const password = loginFormData.get("password");
    console.log("name", name);
    console.log("password", password);

const loginBody =  { name, password }

fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify( loginBody )
}).then(response => response.json())
    .then(result => {
        console.log(result.token);

        localStorage.setItem("token", result.token);
    })
    event.target.reset();
}