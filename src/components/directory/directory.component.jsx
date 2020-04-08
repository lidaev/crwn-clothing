import React from "react";

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {directorySectionsSelector} from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component.jsx";

import {DirectoryMenuWrapper} from "./directory.styles";

const Directory = ({sections}) => (
  <DirectoryMenuWrapper>
    {sections.map(({id, ...sectionProps}) => (
      <MenuItem key={id} {...sectionProps}></MenuItem>
    ))}
  </DirectoryMenuWrapper>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector,
});
export default connect(mapStateToProps, null)(Directory);
