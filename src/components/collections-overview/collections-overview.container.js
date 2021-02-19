import { compose } from 'redux'
import { connect } from 'react-redux'

import withSpinner from '../../HOCs/with-spinner/with-spinner.hoc'
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors'
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionsFetching(state),
})

export default compose(connect(mapStateToProps), withSpinner)(CollectionsOverview)
