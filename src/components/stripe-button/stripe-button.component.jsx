import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51MAdKhI4WYGi7qrhH4WxYmqJt8bU2HwUMYJl3Egxo9zBgRveWuheFlsprEO0Fo5ZdPx8GSNIW9L0hO4BRdSz2JIJ00X3JJi2Iq";

	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
