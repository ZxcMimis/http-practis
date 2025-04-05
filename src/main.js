fetch("https://api.github.com/users").then((respons) => {
    return respons.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
});

function listUser (users) {

const elements = users.map((user) => 
    `    
    <li class="item">
        <p class="user-login">${user.login}</p>
        <p class="id">${user.id}</p>
        <img class="img" src="${user.avatar_url}" alt="${user.login}">
    </li>`
).join("")

document.querySelector(".list").innerHTML = elements

}



//Отримати список користувачів з GitHub API Опис:
//  Використайте публічне API GitHub для отримання списку користувачів.
//  Зробіть GET-запит за адресою https://api.github.com/users та перегляньте отримані дані
//  щодо користувачів.