import "./custom-button.styles.scss";

export default function CustomButton({ children, isGoogleSignIn, inverted, ...rest }) {
	return (
		<button
			className={`${isGoogleSignIn && "google-sign-in"} ${inverted && "inverted"} custom-button`}
			{...rest}>
			{children}
		</button>
	);
}