import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcwxS7XvXm98TF_zHiIWHm7TKi7p8gxx8",
    authDomain: "discord-clone-5254c.firebaseapp.com",
    projectId: "discord-clone-5254c",
    storageBucket: "discord-clone-5254c.appspot.com",
    messagingSenderId: "844158929233",
    appId: "1:844158929233:web:d20a9e6ad150f20fbd2b70"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db