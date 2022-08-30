let url = new URL(location.href);
let id = url.searchParams.get('id');

let userDiv = document.querySelector('.user_wrapper');
let userDetailsDiv = document.querySelector('.user_details_wrap');
let userPostsDiv = document.querySelector('.user_posts_wrap');

let userPostsBtn = document.createElement('button');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        //with recursion
        const userInfoItem = document.createElement('div');
        function objRecur(user) {
            for (const key in user) {
                if (typeof user[key] !== 'object') {
                    userInfoItem.innerHTML += `<p><b>${key}</b> - ${user[key]}</p>`;
                } else {
                    userInfoItem.innerHTML += `<p><b><u>${key}:</u></b></p>`;
                    for (const key2 in user[key]) {
                        if (typeof user[key][key2] !== 'object') {
                            userInfoItem.innerHTML += `<p><b>${key2}</b> - ${user[key][key2]}</p>`;
                        } else {
                            userInfoItem.innerHTML += `<p><b><u>${key2}:</u></b></p>`;
                            objRecur(user[key][key2]);
                        }
                    }
                }
            }
            userDetailsDiv.appendChild(userInfoItem);
        }

        objRecur(user);
    })
        
        // with for..in only
        // for (const key in user) {
        //     if (typeof user[key] !== 'object') {
        //         let userInfoItem = document.createElement('div');
        //         userInfoItem.innerHTML = `<p><b>${key}</b> - ${user[key]}</p>`;
        //         userDetailsDiv.appendChild(userInfoItem);
        //     } else {
        //         let userInfoItemBlock = document.createElement('div');
        //         userInfoItemBlock.innerHTML = `<h4><u>${key}:</u></h4>`
        //         for (const key2 in user[key]) {
        //             userInfoItemBlock.innerHTML += `<p>${user[key]}--${user[key][key2]}</p>`
        //         }
        //         userDetailsDiv.appendChild(userInfoItemBlock);
        //     }
        // }

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {
        const postDiv = document.createElement('div');
        const postDetailsBtn = document.createElement('button');
        for (const post of posts) {
            const postDiv = document.createElement('div');
            const postDetailsBtn = document.createElement('button');
            postDiv.innerHTML = `<p>${post.title}</p>`;
    
            //info about current post in query params
            let postDetailsLink = `post-details.html?postID=${post.id}`;
    
            postDetailsBtn.innerHTML = `<a href='${postDetailsLink}'>DETAILS INFO</a>`;
            postDiv.classList.add('post');
            postDiv.appendChild(postDetailsBtn);
    
            userPostsDiv.appendChild(postDiv);
        }
    })

userPostsBtn.innerText = 'Posts of current user';
userDiv.appendChild(userPostsBtn);

userPostsBtn.onclick = function () {
    userPostsDiv.classList.toggle('hidden');
}

