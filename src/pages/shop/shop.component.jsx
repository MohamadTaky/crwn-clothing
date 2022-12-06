import React from "react";

import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { collection, onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = collection(db, "collections");
		const { updateCollections } = this.props;
		this.unsubscribeFromSnapshot = onSnapshot(collectionRef, async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapshot();
	}

	render() {
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<CollectionsOverviewWithSpinner isLoading={loading} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
