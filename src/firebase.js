import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "Enter your own API key",
    authDomain: "#############,
    projectId: "discord-clone-5254c",
    storageBucket: "###############",
    messagingSenderId: "844158929233",
    appId: "Enter your own app id"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
