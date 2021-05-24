function logout()
{
  window.location="index.html"
}
    var firebaseConfig = {
        apiKey: "AIzaSyD6eHIJjZydWukXEXOiSC30onCf0TfwQCA",
        authDomain: "let-s-chat-web-app-701bf.firebaseapp.com",
        projectId: "let-s-chat-web-app-701bf",
        storageBucket: "let-s-chat-web-app-701bf.appspot.com",
        messagingSenderId: "257917995568",
        appId: "1:257917995568:web:fb211af1001c4c66447bf5",
        measurementId: "G-FQTSSF9J1Q"
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();