import { connect } from 'react-redux'

import { selectShopCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...restProps }) => (
      <CollectionPreview key={id} {...restProps} />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
})

export default connect(mapStateToProps)(ShopPage)
