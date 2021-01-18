import ClipLoader from 'react-spinners/ClipLoader'

import './with-spinner.styles.scss'

const withSpinner = (Wrapped) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner-wrapper">
      <ClipLoader color={'#9B9B9B'} size={50} />
    </div>
  ) : (
    <Wrapped {...otherProps}></Wrapped>
  )
}

export default withSpinner
