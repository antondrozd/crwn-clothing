export const selectUser = (state) => state.user

export const selectCurrentUser = (state) => selectUser(state).currentUser
