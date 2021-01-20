import { connect } from 'react-redux'

import { selectShopCollectionsAsArray } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collection-preview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  collections: selectShopCollectionsAsArray(state),
})

export default connect(mapStateToProps)(CollectionsOverview)
