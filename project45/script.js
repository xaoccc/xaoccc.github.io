data = {
    'text': ['“ I’ve been interested in coding for a while but never taken the jump, until now. \
I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”', 
'“ If you want to lay the best foundation possible I’d recommend taking this course.\
The depth the instructors go into is incredible. I now feel so confident about \
starting up as a professional developer. ”'],
    'author': ['Tanya Sinclair', 'John Tarkpor'],
    'title': ['UX Engineer', 'Junior Front-end Developer'],
    'imgSrc': ['./images/image-tanya.jpg']
}

const [text, author, title] = document.querySelectorAll('blockquote, .author-container a, .author-title')
console.log([text, author, title])
text.textContent = data.text[0]
author.textContent = data.author[0]
title.textContent = data.title[0]