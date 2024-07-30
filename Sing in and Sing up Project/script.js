document.getElementById('goToSignUp').addEventListener('click', () => {
    document.querySelector('.container').classList.add('right-panel-active');
  });
  
  document.getElementById('goToSignIn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('right-panel-active');
  });
  
  document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    alert('Sign-up form submitted!');
  });
  
  document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    alert('Sign-in form submitted!');
  });
  