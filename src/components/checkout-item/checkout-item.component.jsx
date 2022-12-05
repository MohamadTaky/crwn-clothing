import {
	CheckoutItemContainer,
	ImageContainer,
	RemoveButtonContainer,
	ArrowContainer,
	ValueContainer,
	PropertyContainer,
	QuantityContainer,
} from "./checkout-item.styles";
import { connect } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<PropertyContainer>{name}</PropertyContainer>
			<QuantityContainer>
				<ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
				<ValueContainer>{quantity}</ValueContainer>
				<ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
			</QuantityContainer>
			<PropertyContainer>{price}</PropertyContainer>
			<RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: cartItem => dispatch(clearItem(cartItem)),
	addItem: cartItem => dispatch(addItem(cartItem)),
	removeItem: cartItem => dispatch(removeItem(cartItem)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
