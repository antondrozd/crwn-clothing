import {
	CHECK_USER_SESSION,
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_START,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} from '../redux/user/user.actions'

export type UserStateType = {
	currentUser: UserProfileType | null
	error: any | null
}

export type UserProfileType = {
	displayName: string
	email: string
	photoURL?: string
	createdAt: Date
}

export type EmailAndPasswordType = {
	email: string
	password: string
}

export type UserCredentialsType = EmailAndPasswordType & { displayName: string }

type CheckUserSessionActionType = {
	type: typeof CHECK_USER_SESSION
}

type GoogleSignInStartActionType = {
	type: typeof GOOGLE_SIGN_IN_START
}

type EmailSignInStartActionType = {
	type: typeof EMAIL_SIGN_IN_START
	payload: EmailAndPasswordType
}

type SignInSuccessActionType = {
	type: typeof SIGN_IN_SUCCESS
	payload: UserProfileType
}

type SignInFailureActionType = {
	type: typeof SIGN_IN_FAILURE
	payload: any //error
}

type SignOutStartActionType = {
	type: typeof SIGN_OUT_START
}

type SignOutSuccessActionType = {
	type: typeof SIGN_OUT_SUCCESS
}

type SignOutFailureActionType = {
	type: typeof SIGN_OUT_FAILURE
	payload: any //error
}

type SignUpStartActionType = {
	type: typeof SIGN_UP_START
	payload: UserCredentialsType
}

type SignUpSuccessActionType = {
	type: typeof SIGN_UP_SUCCESS
	payload: UserProfileType
}

type SignUpFailureActionType = {
	type: typeof SIGN_UP_FAILURE
	payload: any //error
}

export type UserActionTypes =
	| CheckUserSessionActionType
	| GoogleSignInStartActionType
	| EmailSignInStartActionType
	| SignInSuccessActionType
	| SignInFailureActionType
	| SignOutStartActionType
	| SignOutSuccessActionType
	| SignOutFailureActionType
	| SignUpStartActionType
	| SignUpSuccessActionType
	| SignUpFailureActionType
