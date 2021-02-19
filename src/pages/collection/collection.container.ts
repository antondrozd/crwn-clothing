import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import withSpinner from '../../HOCs/with-spinner/with-spinner.hoc'
import CollectionPage from './collection.page'

import { StoreStateType } from '../../types/common.types'

const mapStateToProps = (state: StoreStateType) => ({
  isLoading: !selectIsCollectionsLoaded(state),
})

export default compose(connect(mapStateToProps), withSpinner)(CollectionPage) as React.FC
