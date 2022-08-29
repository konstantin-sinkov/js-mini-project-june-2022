let usersWrap = document.querySelector('.users_wrap');

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userItem = document.createElement('div');
            let userDetailsBtn = document.createElement('button');
            userItem.classList.add('user_item');
            
            userItem.innerHTML = `<h4>${user.id} - ${user.name}</h4>`;
            userDetailsBtn.innerHTML = `<a href="user-details.html?id=${user.id}">User Details Info</a>`
            
            userItem.appendChild(userDetailsBtn);
            usersWrap.appendChild(userItem);
        }
    })
