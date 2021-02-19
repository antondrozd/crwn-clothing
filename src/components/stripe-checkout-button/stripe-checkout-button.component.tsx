import * as React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'

import Button from '../button/button.component'

type PropsType = {
  price: number
}

const StripeCheckoutButton: React.FC<PropsType> = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey =
    'pk_test_51IASlqEHj7n45Qvv2mYgoTVOtsIkbqMXI3rtRXXvRN0iiS6O3juODpAXWYpbLmt2P0TpRf6dTyLKRQydggzlOHRA00RjSp2wxl'

  const onToken = (token: Token) => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      ComponentClass="div"
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <Button className="paynow-button">Pay</Button>
    </StripeCheckout>
  )
}

export default StripeCheckoutButton
