import { all, call, apply, put, takeLatest } from 'redux-saga/effects'

import userActionTypes from './user.types'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from './user.actions'
import {
  signInWithGoogle as signInWithGoogleFirebase,
  signInWithEmail as signInWithEmailFirebase,
  createUserProfileDocument,
  getCurrentUser,
  signOut as signOutFirebase,
} from '../../firebase/firebase.utils'

function* getAndPutUserSnapshot(userAuth) {
  try {
    const userDocRef = yield call(createUserProfileDocument, userAuth)
    const userSnapShot = yield apply(userDocRef, 'get')

    const user = { id: userSnapShot.id, ...userSnapShot.data() }
    yield put(signInSuccess(user))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

function* signInWithGoogle() {
  try {
    const { user: userAuth } = yield signInWithGoogleFirebase()
    yield getAndPutUserSnapshot(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

function* signInWithEmail({ payload: emailAndPassword }) {
  try {
    const { user: userAuth } = yield signInWithEmailFirebase(emailAndPassword)
    yield getAndPutUserSnapshot(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

function* isUserAuthenticated() {
  const userAuth = yield call(getCurrentUser)
  if (!userAuth) return

  try {
    yield getAndPutUserSnapshot(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

function* signOut() {
  try {
    yield call(signOutFirebase)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    onGoogleSignInStart(),
    onEmailSignInStart(),
    onCheckUserSession(),
    onSignOutStart(),
  ])
}
