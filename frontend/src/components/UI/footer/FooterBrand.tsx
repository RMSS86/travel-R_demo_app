// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function BrandBadgePlus({
  children,
  _className,
  _logoSrc,
  _footBrandSrcs,
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
      className="footer__block-left"
      onClick={_onClick}
      style={_style}
    >
      <div className="footer__block-left__col-up">
        <img src={_logoSrc} className="footer__block-left-logo" />
      </div>
      <div className="footer__block-left__col-down">
        <img className="footer__block-left-logo_lo" src={iOSIcon_A} />
        <img className="footer__block-left-logo_lo small-img" src={LogoBlack} />
        <img className="footer__block-left-logo_lo" src={AndroidIcon_B} />
      </div>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _logoSrc?: string;
  _footBrandSrcs?: string[];
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./Footer.scss";
import {
  iOSIcon_A,
  LogoBlack,
  AndroidIcon_B,
  //@ts-ignore
} from "../../../utility/imports.js";
