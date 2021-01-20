import shopActionTypes from './shop.types'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
})

const fetchCollectionsSuccess = (collectionMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
})

const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollections = () => (dispatch) => {
  dispatch(fetchCollectionsStart())

  const collectionRef = firestore.collection('collections')

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)

      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
}
