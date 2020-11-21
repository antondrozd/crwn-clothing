import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCQqUUlkH5RpxCZ3qjGfwVO1JogBXhMuJM',
  authDomain: 'crwn-db-6cf92.firebaseapp.com',
  databaseURL: 'https://crwn-db-6cf92.firebaseio.com',
  projectId: 'crwn-db-6cf92',
  storageBucket: 'crwn-db-6cf92.appspot.com',
  messagingSenderId: '622261493225',
  appId: '1:622261493225:web:5c0b22875de36dfdddbf78',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userDocRef = firestore.doc(`users/${userAuth.uid}`)

  const userSnapShot = await userDocRef.get()

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userDocRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.error(error)
    }
  }

  return userDocRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
