import { takeLatest, apply, call, put } from 'redux-saga/effects'

import {
  FETCH_COLLECTIONS_START,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions'
import {
  getCollectionRef,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

function* fetchCollections() {
  try {
    const collectionRef = getCollectionRef('collections')
    const collectionSnapShot = yield apply(collectionRef, 'get')
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, collectionSnapShot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollections)
}
