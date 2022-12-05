import {
	CollectionItemContainer,
	ImageContainer,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
	CustomButtonContainer,
} from "./collection-item.styles.jsx";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<ImageContainer imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}$</PriceContainer>
			</CollectionFooterContainer>
			<CustomButtonContainer onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButtonContainer>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
