import { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.page'

class ShopPage extends Component {
  unsubscribeFromOnSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromOnSnapshot = collectionRef.onSnapshot((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)

      updateCollections(collectionsMap)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromOnSnapshot()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionRouteName`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

export default connect(null, { updateCollections })(ShopPage)
