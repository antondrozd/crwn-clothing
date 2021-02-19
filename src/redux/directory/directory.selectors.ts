import { StoreStateType } from '../../types/common.types'
import { DirectoryStateType, SectionType } from '../../types/directory.types'

export const selectDirectory = (state: StoreStateType): DirectoryStateType =>
  state.directory

export const selectDirectorySections = (state: StoreStateType): SectionType[] =>
  selectDirectory(state).sections
