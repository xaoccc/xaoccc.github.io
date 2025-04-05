data = {
    'text': ['“ I’ve been interested in coding for a while but never taken the jump, until now. \
I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”', 
'“ If you want to lay the best foundation possible I’d recommend taking this course.\
The depth the instructors go into is incredible. I now feel so confident about \
starting up as a professional developer. ”'],
    'author': ['Tanya Sinclair', 'John Tarkpor'],
    'title': ['UX Engineer', 'Junior Front-end Developer'],
    'imgSrc': ['./images/image-tanya.jpg', './images/image-john.jpg'],
}
let n = 0;
const totalEntries = data.author.length;
const [text, author, title, img] = document.querySelectorAll('blockquote, .author-container a, .author-title, img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateView(n) {
    text.textContent = data.text[n];
    author.textContent = data.author[n];
    title.textContent = data.title[n];
    img.src = data.imgSrc[n];
    img.alt = data.author[n];
}

prevBtn.addEventListener('click', function() {
    (n == 0) ? null : n -=1;
    updateView(n);
})

nextBtn.addEventListener('click', function() {
    (n == totalEntries - 1) ? null : n +=1;
    updateView(n);
})

updateView(n);