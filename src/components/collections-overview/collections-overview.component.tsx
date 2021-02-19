import { useSelector } from 'react-redux'

import { selectShopCollectionsAsArray } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollectionsAsArray)

  return (
    <div className="collection-preview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview
