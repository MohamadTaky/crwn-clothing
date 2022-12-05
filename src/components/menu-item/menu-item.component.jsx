import {
	MentItemContainer,
	ContentContainer,
	TitleContainer,
	SubtitleContainer,
	BackgroundImageContainer,
} from "./menu-item.styles";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ title, imageUrl, linkUrl, size = "" }) {
	const navigate = useNavigate();
	return (
		<MentItemContainer size={size} onClick={() => navigate(linkUrl)}>
			<BackgroundImageContainer imageUrl={imageUrl} />
			<ContentContainer>
				<TitleContainer>{title.toUpperCase()}</TitleContainer>
				<SubtitleContainer>SHOP NOW</SubtitleContainer>
			</ContentContainer>
		</MentItemContainer>
	);
}
