import * as React from 'react'
import CircleLoader from 'react-spinners/CircleLoader'

import './with-spinner.styles.scss'

type PropsType = {
  isLoading: boolean
}

const withSpinner = (Wrapped: React.ComponentType<any>): React.FC<PropsType> => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <div className="spinner-wrapper">
      <CircleLoader color={'#9B9B9B'} size={50} />
    </div>
  ) : (
    <Wrapped {...otherProps} />
  )
}

export default withSpinner
