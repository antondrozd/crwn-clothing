import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import withSpinner from '../../HOCs/with-spinner/with-spinner.hoc'
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors'
import CollectionsOverview from './collections-overview.component'

import { StoreStateType } from '../../types/common.types'

const mapStateToProps = (state: StoreStateType) => ({
  isLoading: selectIsCollectionsFetching(state),
})

export default compose(
  connect(mapStateToProps),
  withSpinner,
)(CollectionsOverview) as React.FC
