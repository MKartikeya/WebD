
const firebaseConfig = {
    apiKey: "AIzaSyAyFssCZMRYIJAcvSH1wQJNqHYG4WwJUIo",
    authDomain: "netflix-clone-ee259.firebaseapp.com",
    projectId: "netflix-clone-ee259",
    storageBucket: "netflix-clone-ee259.appspot.com",
    messagingSenderId: "631509489871",
    appId: "1:631509489871:web:894d68d1df37e595faffba",
    measurementId: "G-95SCYF18C1"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function writeData(){
    firebase.database().ref("User").set({
        email:document.getElementById("email").value,
        password: document.getElementById("password").value
    });
    console.log("YESS")
}