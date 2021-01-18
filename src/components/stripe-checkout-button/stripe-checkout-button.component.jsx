import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey =
    'pk_test_51IASlqEHj7n45Qvv2mYgoTVOtsIkbqMXI3rtRXXvRN0iiS6O3juODpAXWYpbLmt2P0TpRf6dTyLKRQydggzlOHRA00RjSp2wxl'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      className="paynow-button"
    />
  )
}

export default StripeCheckoutButton
