let url = new URL(location.href);
let id = url.searchParams.get('id');

let userDetailsDiv = document.querySelector('.user_details_wrap');
let userPostsDiv = document.querySelector('.user_posts_block');

let userPostsBtn = document.createElement('button');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        for (const key in user) {
            if (typeof user[key] !== 'object') {
                let userInfoItem = document.createElement('div');
                userInfoItem.innerHTML = `<p><b>${key}</b> - ${user[key]}</p>`;
                userDetailsDiv.appendChild(userInfoItem);
            } else {
                let userInfoItemBlock = document.createElement('div');
                userInfoItemBlock.innerHTML = `<h4><u>${key}:</u></h4>`
                for (const key2 in user[key]) {
                    userInfoItemBlock.innerHTML += `<p>${user[key]}--${user[key][key2]}</p>`
                }
                userDetailsDiv.appendChild(userInfoItemBlock);
            }
        }
        
        
        
        
        
        
        
        
        
        
        
        // console.log(user);
        //     let userDetailsBlock = document.querySelector(".user_details_block");
    //     let userNameBlock = document.querySelector(".user_name_block");
    //     let userAdressBlock = document.querySelector(".user_address_block");
    //     let userCompanyBlock = document.querySelector(".user_company_block");
    //
    //     const userPostsBtn = document.createElement('button');
    //     userPostsBtn.classList.add('posts_btn');
    //     userPostsBtn.innerText = 'posts of current user';
    //     userDetailsBlock.appendChild(userPostsBtn);
    //
    //     userNameBlock.innerHTML = `
    // <h3><b>${user.username}</b></h3>
    // <h4><b>${user.name}</b></h4>
    // <p><b>email</b> - ${user.email}</p>
    // <p><b>phone number</b> - ${user.phone}</p>
    // <p><b>user website</b> - ${user.website}</p>
    // `;
    //
    //     userAdressBlock.innerHTML = `
    // <h4><u>USER ADRESS</u></h4>
    // <p><b>city</b> - ${user.address.city}</p>
    // <p><b>street</b> - ${user.address.street}</p>
    // <p><b>suite</b> - ${user.address.suite}</p>
    // <p><b>zipcode</b> - ${user.address.zipcode}</p>
    // <h5><u>coord</u></h5>
    // <p><b>lat</b> - ${user.address.geo.lat}</p>
    // <p><b>lng</b> - ${user.address.geo.lng}</p>
    // `;
    //
    //     userCompanyBlock.innerHTML = `
    // <h4><u>USER COMPANY</u></h4>
    // <p><b>user company</b> - ${user.company.catchPhrase}</p>
    // <p><b>catch phrase</b> - ${user.company.companyName}</p>
    // <p><b>bs</b> - ${user.company.bs}</p>
    // `;
    })

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

userPostsBtn.innerText = 'UserPosts';
userDetailsDiv.appendChild(userPostsBtn);

userPostsBtn.onclick = function () {
    userPostsDiv.classList.toggle('hidden');
}

