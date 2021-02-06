import { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../../pages/collection/collection.container'

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStart()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionRouteName`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

export default connect(null, { fetchCollectionsStart })(ShopPage)
