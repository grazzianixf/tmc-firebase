  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnRblLt04UPvU9lvz8QfEU4HGKfPJd-tY",
    authDomain: "tmc-firebase-1f3c5.firebaseapp.com",
    databaseURL: "https://tmc-firebase-1f3c5.firebaseio.com",
    projectId: "tmc-firebase-1f3c5",
    storageBucket: "tmc-firebase-1f3c5.appspot.com",
    messagingSenderId: "319435978367"
  };
  firebase.initializeApp(config);

  var usuario = null;
  console.log("auth");
  console.log(firebase.auth());
  console.log("currentUser");
  console.log(firebase.auth().currentUser());  

  function obterUsuarioAssincrono(callBackFunction) {
    console.log("obterUsuarioAssincrono");
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          usuario = user;
          console.log("usuario");
          console.log(usuario);
          console.log("auth");
          console.log(firebase.auth());          
          
          if (callBackFunction != null) {
              console.log("chamando callback");
              callBackFunction(user);
          }
        }
      });
  }

  obterUsuarioAssincrono();