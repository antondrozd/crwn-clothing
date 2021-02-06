import { all } from 'redux-saga/effects'

import { userSagas } from './user/user.sagas'
import { onFetchCollectionsStart } from './shop/shop.sagas'

export default function* rootSaga() {
  yield all([userSagas(), onFetchCollectionsStart()])
}
