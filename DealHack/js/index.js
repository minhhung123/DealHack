const IconLogo = document.querySelector('.icon_logo');

const userName = window.localStorage.getItem('userName') 
IconLogo.innerHTML = (userName) ? userName : '<a href="login.html"><span class="icon icon-person"></span></a>'  