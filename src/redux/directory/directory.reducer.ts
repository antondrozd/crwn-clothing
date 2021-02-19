import DIRECTORY_DATA from './data'

import { DirectoryStateType } from '../../types/directory.types'

const initialState: DirectoryStateType = {
  sections: DIRECTORY_DATA,
}

const directoryReducer = (state = initialState, action: any): DirectoryStateType => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
