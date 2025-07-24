// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TitleLabel({
  children,
  _className = "titler",
  _tag = "Title",
  _toCaps = false,
  _isFlipped = false,
  _titleLo = false,
  _style,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <ContextType
      {...rest}
      className={_className}
      onClick={_onClick}
      style={_style}
    >
      <h4
        className={`${_titleLo ? "titler-lo-title" : "titler-title"} ${
          _isFlipped ? "titler-flipped" : ""
        }`}
      >
        {_toCaps ? _tag.toUpperCase() : _tag}
      </h4>

      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _tag?: string;
  _titleLo?: boolean;
  _toCaps?: boolean;
  _className?: string;
  _isFlipped?: boolean;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./TitleLabel.scss";
