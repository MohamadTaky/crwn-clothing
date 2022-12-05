import { CollectionsOverviewContainer } from "./collections-overview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
	<CollectionsOverviewContainer className="collections-overview">
		{collections.map(({ id, ...rest }) => (
			<CollectionPreview key={id} {...rest} />
		))}
	</CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
