const [comments, newComment, profilePic]  = document.querySelectorAll('.comments, .new-comment, .new-comment > img');


async function fetchData() {
    const requestURL = 'data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();
    console.log(data);

    profilePic.src = data.currentUser.image.png;
    const currentUser = data.currentUser.username;
}

fetchData();