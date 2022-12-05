import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CollectionPageContainer, TitleContainer, ItemsContainer } from "./collection.styles";

const CollectionPage = () => {
	const { collectionId } = useParams();
	const collection = useSelector(state => state.shop.collections[collectionId]);
	const { title, items } = collection;

	return (
		<CollectionPageContainer>
			<TitleContainer>{title}</TitleContainer>
			<ItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsContainer>
		</CollectionPageContainer>
	);
};

export default CollectionPage;
