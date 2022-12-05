import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item.component";

export default function CollectionPreview({ title, items }) {
	return (
		<CollectionPreviewContainer>
			<TitleContainer>{title.toUpperCase()}</TitleContainer>
			<PreviewContainer>
				{items.slice(0, 4).map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
}
