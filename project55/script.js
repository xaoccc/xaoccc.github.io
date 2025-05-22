const [comments, newComment, profilePic]  = document.querySelectorAll('.comments, .new-comment, .new-comment > img');
const commentWrapper = document.querySelector('.comment-wrapper');
const commentsSection = document.querySelector('section.comments');


async function fetchData() {
    const requestURL = 'data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();
    console.log(data);
    

    data.comments.forEach(commentData => {
        let newComment = commentWrapper.cloneNode(true);
        newComment.querySelector('.profile-pic').src = commentData.user.image.png;
        newComment.querySelector('.profile-name').textContent = commentData.user.username;
        newComment.querySelector('.date').textContent = commentData.createdAt;
        newComment.querySelector('.score').textContent = commentData.score;
        newComment.querySelector('p').textContent = commentData.content;
        commentsSection.appendChild(newComment)
    });

    
    profilePic.src = data.currentUser.image.png;
    const currentUser = data.currentUser.username;
}



fetchData();