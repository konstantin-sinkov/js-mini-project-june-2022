let url = new URL(location.href);
let postId = url.searchParams.get('postID');

let postBlock = document.querySelector('.post_block');
let commentsBlock = document.querySelector('.comments_block');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        for (const key in post) {
            let postBlockInfoItem = document.createElement('div');
            postBlockInfoItem.innerHTML = `<p><b>${key}</b> - ${post[key]}</p>`;
            postBlock.appendChild(postBlockInfoItem);
        }
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            
            for (const key in comment) {
                let commentInfoItem = document.createElement('div');
                commentInfoItem.innerHTML = `<p><b>${key}</b> - ${comment[key]}</p>`;
                commentDiv.appendChild(commentInfoItem);
            }
            
            commentsBlock.appendChild(commentDiv);
        }
    })

