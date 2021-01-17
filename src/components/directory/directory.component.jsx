import { connect } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
})

export default connect(mapStateToProps)(Directory)
