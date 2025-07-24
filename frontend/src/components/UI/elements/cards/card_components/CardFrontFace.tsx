// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function CardFrontFace({
  children,
  _frontFaceClassNames,
  _frontFacePicture,
  _inImgTitleClass,
  _inImgTitle,
  _imgSrc,
  _cardHeading,
  _style,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <ContextType {...rest} className={_frontFaceClassNames} onClick={_onClick}>
      <img className={_frontFacePicture} src={_imgSrc} crossOrigin="anonymous"/>
    
      <h4 className={_cardHeading}>
        <span className={_inImgTitleClass}>{_inImgTitle}</span>
      </h4>

      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _contextType: string;
  _frontFaceClassNames: string;
  _frontFacePicture?: string;
  _inImgTitleClass?: string;
  _inImgTitle?: string;
  _imgSrc?: string;
  _cardHeading?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
