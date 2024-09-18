const notificationsNum = document.createElement('span');
const unreadMessages = document.querySelectorAll('.unread');
notificationsNum.textContent = unreadMessages.length;
const heading = document.querySelector('h1');
heading.appendChild(notificationsNum);