import * as React from 'react'
import { useEffect } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionRouteName`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

export default ShopPage
