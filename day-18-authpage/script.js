const firebaseConfig = {
  
};

// Initialize Firebase
// Your Firebase configuration code
// Your Firebase configuration code
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const loginForm = document.getElementById("login-form");
const submitbtn = document.getElementById("submit-btn");

// Sign In function
// Sign In function
submitbtn.addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      // Set a flag in localStorage to indicate the user is logged in
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to the map page
      window.location.href = "/livebus/index.html";
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
});

// Check if the user is already logged in when accessing the login page
if (localStorage.getItem("isLoggedIn") === "fasle") {
  // Redirect to the map page or another authenticated route
  window.location.href = "/livebus/index.html";
}
