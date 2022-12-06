import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item.component";
import { useNavigate } from "react-router-dom";

export default function CollectionPreview({ title, items, routeName }) {
	const navigate = useNavigate();
	console.log(routeName);
	return (
		<CollectionPreviewContainer>
			<TitleContainer onClick={() => navigate(routeName)}>{title.toUpperCase()}</TitleContainer>
			<PreviewContainer>
				{items.slice(0, 4).map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
}
