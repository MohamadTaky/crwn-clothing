import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { Routes, Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, []);

	return (
		<div className="shop-page">
			<Routes>
				<Route index element={<CollectionsOverviewContainer />} />
				<Route path=":collectionId" element={<CollectionPageContainer />} />
			</Routes>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
