let url = new URL(location.href);
let postId = url.searchParams.get('postID');

let postBlock = document.querySelector('.post_block');
let commentsBlock = document.querySelector('.comments_block');
