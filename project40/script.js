let totalValue = 100000;
let backedValue = 89914;
let backers = 5007; 
let days = 56; // This value could be calculated automatically if a deadline is set up.

const backedCurrent = document.querySelector('.backed-current');
const backedTotal = document.querySelector('.backed-total');
const backersTotal = document.querySelector('.backers-total');
const daysLeft = document.querySelector('.days-left');
const barCurrent = document.querySelector('.bar-current')

backedCurrent.textContent = `$${backedValue.toLocaleString('en-US')}`;
backedTotal.textContent = `of $${totalValue.toLocaleString('en-US')} backed`;
backersTotal.textContent = backers.toLocaleString('en-US');
daysLeft.textContent = days;
barCurrent.style.width = `${(backedValue/totalValue)*100}%`