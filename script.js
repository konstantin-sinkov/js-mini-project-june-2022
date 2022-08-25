const baseURL = 'https://jsonplaceholder.typicode.com/';
let usersWrap = document.getElementById('users_wrap');

fetch(`${baseURL}users`)
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userItem = document.createElement('div');
            userItem.classList.add('user_item');
            
            userItem.innerHTML = `<h4>${user.id} - ${user.name}</h4>`
            
            usersWrap.appendChild(userItem);
        }
    })
