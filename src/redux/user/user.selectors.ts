import { StoreStateType } from '../../types/common.types'
import { UserStateType, UserProfileType } from '../../types/user.types'

export const selectUser = (state: StoreStateType): UserStateType => state.user

export const selectCurrentUser = (state: StoreStateType): UserProfileType =>
  selectUser(state).currentUser as UserProfileType //cannot be null while executing
