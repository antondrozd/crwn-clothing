import { all, call, apply, put, takeLatest } from 'redux-saga/effects'

import {
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	CHECK_USER_SESSION,
	SIGN_OUT_START,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from './user.actions'
import { clearCart } from '../cart/cart.actions'
import {
	signInWithGoogle as signInWithGoogleFirebase,
	signInWithEmail as signInWithEmailFirebase,
	createUserProfileDocument,
	getCurrentUser,
	signOut as signOutFirebase,
	signUp as signUpFirebase,
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
		yield put(clearCart())
	} catch (error) {
		yield put(signOutFailure(error))
	}
}

function* signUp({ payload: userCredentials }) {
	const { displayName, email, password } = userCredentials

	try {
		const { user: userAuth } = yield call(signUpFirebase, { email, password })
		yield call(createUserProfileDocument, userAuth, {
			displayName,
		})
		yield put(signUpSuccess(userAuth))
	} catch (error) {
		yield put(signUpFailure(error))
	}
}

function* signInAfterSignUp({ payload: userAuth }) {
	try {
		yield getAndPutUserSnapshot(userAuth)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

function* onCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
	yield takeLatest(SIGN_OUT_START, signOut)
}

function* onSignUpStart() {
	yield takeLatest(SIGN_UP_START, signUp)
}

function* onSignUpSuccess() {
	yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
	yield all([
		onGoogleSignInStart(),
		onEmailSignInStart(),
		onCheckUserSession(),
		onSignOutStart(),
		onSignUpStart(),
		onSignUpSuccess(),
	])
}
