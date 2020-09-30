import firebase from "firebase";

// Initialize Firebase
const config = {
  // apiKey: 'AIzaSyCYaTKjfam_qMXDnGfcdnBxScEq89VQtLk',
  // authDomain: 'curious-sandbox-196209.firebaseapp.com',
  // databaseURL: 'https://curious-sandbox-196209.firebaseio.com',
  // projectId: 'curious-sandbox-196209',
  // storageBucket: '',
  // messagingSenderId: '1034032747860'
  apiKey: "AIzaSyBgaoGWTRQIXwKScBZsPYJRpaSNyEFMy98",
  authDomain: "banditfitness-testing.firebaseapp.com",
  databaseURL: "https://banditfitness-testing.firebaseio.com",
  projectId: "banditfitness-testing",
  storageBucket: "banditfitness-testing.appspot.com",
  messagingSenderId: "907419384189",
  appId: "1:907419384189:web:2e36896aeb5d7cbf623414",
  measurementId: "G-CK91GZ97SM",
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.firestore();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
