const notificationsNum = document.createElement('span');
const unreadMessages = document.querySelectorAll('.unread');
notificationsNum.textContent = unreadMessages.length;
const heading = document.querySelector('h1');
const bullet = Array.from(document.querySelectorAll('.unread-bullet'));
heading.appendChild(notificationsNum);

const readAllButton = document.querySelector('.header button');
readAllButton.addEventListener('click', (e) => {
  unreadMessages.forEach((message) => {
    message.classList.remove('unread');
    bullet.forEach((bullet) => {
      bullet.style.display = 'none';
    });
  });
  notificationsNum.textContent = 0;
  e.target.textContent = 'No Unread Messages';
});