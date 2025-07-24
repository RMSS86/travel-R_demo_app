// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function BrandBadgeSimple({
  children,
  _className,
  _logoSrc,
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
      className="footer__badge"
      onClick={_onClick}
      style={_style}
    >
      <img src={_logoSrc} alt="Logo" className="footer__logo" />
      <div className="footer__badge-low">
        <p className="footer__copyright">
          &copy; Copyright by
          <a
            className="footer__link twitter-link"
            target="_blank"
            href="https://www.linkedin.com/in/robert-solis-stevenson-6a458a265/"
          >
            _Robbie Trevor
          </a>
          .
        </p>
      </div>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _logoSrc?: string;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./Footer.scss";
