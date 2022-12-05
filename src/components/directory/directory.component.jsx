import React from "react";
import { DirectoryMenuContainer } from "./directory.styles";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
	<DirectoryMenuContainer>
		{sections.map(({ id, ...rest }) => (
			<MenuItem key={id} {...rest} />
		))}
	</DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
