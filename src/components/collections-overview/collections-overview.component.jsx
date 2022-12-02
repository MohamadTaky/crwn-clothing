import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...rest }) => (
			<CollectionPreview key={id} {...rest} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
