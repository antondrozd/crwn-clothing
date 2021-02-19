import {
	UserActionTypes,
	UserProfileType,
	EmailAndPasswordType,
	UserCredentialsType,
} from '../../types/user.types'

export const CHECK_USER_SESSION = 'CHECK_USER_SESSION'
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const SIGN_OUT_START = 'SIGN_OUT_START'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'
export const SIGN_UP_START = 'SIGN_UP_START'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const checkUserSession = (): UserActionTypes => ({
	type: CHECK_USER_SESSION,
})

export const googleSignInStart = (): UserActionTypes => ({
	type: GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = (
	emailAndPassword: EmailAndPasswordType,
): UserActionTypes => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
})

export const signInSuccess = (user: UserProfileType): UserActionTypes => ({
	type: SIGN_IN_SUCCESS,
	payload: user,
})

export const signInFailure = (error: any): UserActionTypes => ({
	type: SIGN_IN_FAILURE,
	payload: error,
})

export const signOutStart = (): UserActionTypes => ({
	type: SIGN_OUT_START,
})

export const signOutSuccess = (): UserActionTypes => ({
	type: SIGN_OUT_SUCCESS,
})

export const signOutFailure = (error: any): UserActionTypes => ({
	type: SIGN_OUT_FAILURE,
	payload: error,
})

export const signUpStart = (userCredentials: UserCredentialsType): UserActionTypes => ({
	type: SIGN_UP_START,
	payload: userCredentials,
})

export const signUpSuccess = (user: UserProfileType): UserActionTypes => ({
	type: SIGN_UP_SUCCESS,
	payload: user,
})

export const signUpFailure = (error: any): UserActionTypes => ({
	type: SIGN_UP_FAILURE,
	payload: error,
})
