import * as React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { selectShopCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss'

type ParamsType = {
  collectionRouteName: string
}

const CollectionPage: React.FC<RouteComponentProps<ParamsType>> = ({ match }) => {
  const { title, items } = useSelector(
    selectShopCollection(match.params.collectionRouteName),
  )

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default CollectionPage
