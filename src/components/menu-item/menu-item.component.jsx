import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ title, imageUrl, linkUrl, size = "" }) {
	const navigate = useNavigate();
	return (
		<div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
			<div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image"></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
}
