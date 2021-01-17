export const selectDirectory = (state) => state.directory

export const selectDirectorySections = (state) =>
  selectDirectory(state).sections
