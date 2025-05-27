const [comments, newComment, profilePic] = document.querySelectorAll('.comments, .new-comment, .new-comment > img');
const commentWrapper = document.querySelector('.comment-wrapper');
const commentsSection = document.querySelector('section.comments');
const [newCommentText, newCommentBtn] = newComment.querySelectorAll('button, textarea');
const filePath = 'data.json';

function writeToJSON(author, text) {
    let data = {
        author: author,
        text: text
    };
}

async function fetchData() {
    const requestURL = 'data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();
    // console.log(data);
    profilePic.src = data.currentUser.image.png;
    const currentUser = data.currentUser.username;

    data.comments.forEach(commentData => {
        let newComment = commentWrapper.cloneNode(true);
        newComment.querySelector('.profile-pic').src = commentData.user.image.png;
        newComment.querySelector('.profile-name').textContent = commentData.user.username;
        newComment.querySelector('.date').textContent = commentData.createdAt;
        newComment.querySelector('.score').textContent = commentData.score;
        newComment.querySelector('p').textContent = commentData.content;
        commentsSection.appendChild(newComment)

        if (commentData.replies.length > 0) {
            commentData.replies.forEach(replyData => {
                let newReply = commentWrapper.cloneNode(true);
                newReply.classList.add('reply');
                newReply.querySelector('.profile-pic').src = replyData.user.image.png;
                newReply.querySelector('.profile-name').textContent = replyData.user.username;
                newReply.querySelector('.date').textContent = replyData.createdAt;
                newReply.querySelector('.score').textContent = replyData.score;
                const replyTo = document.createElement('a');
                replyTo.classList.add('reply-to');
                replyTo.innerHTML = '@' + replyData.replyingTo;
                replyTo.href = '#';
                newReply.querySelector('p').appendChild(replyTo);
                newReply.querySelector('p').appendChild(document.createTextNode(' ' + replyData.content));


                if (currentUser == replyData.user.username) {
                    const editBtn = newReply.querySelector('.comment-header-right > .flex-row');
                    const deleteBtn = newReply.querySelector('.comment-header-right > .flex-row').cloneNode(true);
                    newReply.querySelector('.comment-header-right').appendChild(deleteBtn)
                    deleteBtn.classList.add('delete');
                    editBtn.classList.add('edit');
                    deleteBtn.querySelector('.reply-txt').textContent = 'Delete';
                    editBtn.querySelector('img').src = "./images/icon-edit.svg";
                    deleteBtn.querySelector('img').src = "./images/icon-delete.svg";
                    editBtn.querySelector('.reply-txt').textContent = 'Edit';
                }

                commentsSection.appendChild(newReply)
            });
        }
    });

    // This is the furtest I can go with front-end alone. For writing comments/replies and saving/editing/deleting them I will need the backend
    // Github does not support backend, so the poject should be updated and re-created to another repo...
    newCommentBtn.addEventListener('click', function (e) {
        let newCommentID = data.comments.length;
        console.log(newCommentID);
    })

}





fetchData();