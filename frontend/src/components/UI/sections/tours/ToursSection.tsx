// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TourSection({
  children,
  _sectionClassName = "tours",
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
      className={_sectionClassName}
      onClick={_onClick}
      style={_style}
    >
      <div className="tours__wrapper">
        <h4 className="tours__wrapper-title">Popular Tours</h4>
      </div>
      <div className="row">{children}</div>

      <div className="tours__bottom">
        <ATagButton
          _className="btn btn-green btn-animated margin-row__btn "
          _btnText="Discover Now!"
          _href=""
          _onClick={() => console.log("Clicked")}
        />
      </div>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _sectionClassName?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./ToursSection.scss"; ///@ts-ignore
import {
  ATagButton,
  ///@ts-ignore
} from "../../../../utility/imports.js";
