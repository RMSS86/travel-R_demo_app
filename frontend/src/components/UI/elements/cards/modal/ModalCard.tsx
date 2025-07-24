// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function ModalCardStandard({
  children,
  _className = "modal__card",
  _brandinglogosrc,
  _brandingBGSrc,
  _imgSrc,
  _msgTag,
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
      <img
        src={_brandinglogosrc}
        className="brand__logo-float "
        alt="trax-logo"
      />
      <div className="modal__card-block__left">
        <img src={_brandingBGSrc} alt="trax-logo" />
      </div>
      <div className="modal__card-block">
        <div className="modal__card-msg">
          <img src={_imgSrc} className="active" alt="warning" />
          <span>{_msgTag}</span>
        </div>
        <div className="modal__card-btns">{children}</div>
      </div>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _imgSrc?: string;
  _msgTag?: string;
  _brandinglogosrc?: string;
  _brandingBGSrc?: string;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./ModalCard.scss";
