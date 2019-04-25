import app from 'firebase/app';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDr5yhm8lAi93bkEvhLXQ-BNQ9XyQnBZWg",
    authDomain: "todo-app-da6cd.firebaseapp.com",
    databaseURL: "https://todo-app-da6cd.firebaseio.com",
    projectId: "todo-app-da6cd",
    storageBucket: "todo-app-da6cd.appspot.com",
    messagingSenderId: "186515379404"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
  
export default Firebase;