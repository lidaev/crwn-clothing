import React from "react";

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {directorySectionsSelector} from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component.jsx";

import "./directory.styles.scss";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({id, ...sectionProps}) => (
        <MenuItem key={id} {...sectionProps}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector
});
export default connect(mapStateToProps, null)(Directory);
