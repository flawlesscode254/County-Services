import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoWBzMpqNTZ6fUVOMZj8u3xo9yFVA9Hqo",
  authDomain: "county-services.firebaseapp.com",
  projectId: "county-services",
  storageBucket: "county-services.appspot.com",
  messagingSenderId: "613025161510",
  appId: "1:613025161510:web:9d964c41774a906e6321e7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
