const SwitchLinks = document.querySelectorAll('.switch');
const Containers = document.querySelectorAll('.container')
const Limiter = document.querySelector('.limiter');
const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.sign-up-form');
const IconLogo = document.querySelector('.icon_logo');



console.log(SwitchLinks);
console.log(Containers);
console.log(Limiter);

//Toggle Containers
SwitchLinks.forEach(link => {
    link.addEventListener('click', () => {
        Containers.forEach(container => container.classList.toggle('active'));
    });
});

//Register Form
signUpForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;

   firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        console.log('registered', user);
        console.log(email,password);
        signUpForm.reset();
    })
    .catch(error => {
        signUpForm.querySelector('.error').textContent = error.message;

    });
    


});

//login Form
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

   firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log('logged in', user);
        loginForm.reset();
    })
    .catch(error => {
        loginForm.querySelector('.error').textContent = error.message;
        
    });
    


});

//auth listener
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      

    } 
})