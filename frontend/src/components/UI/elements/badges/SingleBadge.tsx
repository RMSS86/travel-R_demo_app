// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function SingleBadge({
  children,
  _className,
  _badgeClass,
  _badgeSrc,
  _linkClass,
  _wrapperClass,
  _linkASrc,
  _linkBSrc,
  _linkCSrc,
  _style,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <Tilt>
      <ContextType
        {...rest}
        className={_className}
        onClick={_onClick}
        style={_style}
      >
        <img src={_badgeSrc} className={_badgeClass} alt="badge" />

        <div className={_wrapperClass}>
          <img src={_linkASrc} className={_linkClass} alt="link" />
          <img src={_linkBSrc} className={_linkClass} alt="link" />
          <img src={_linkCSrc} className={_linkClass} alt="link" />
        </div>
        {children}
      </ContextType>
    </Tilt>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;

  _className?: string;
  _badgeClass?: string;

  _linkClass?: string;
  _wrapperClass?: string;
  _badgeSrc?: string;
  _linkASrc?: string;
  _linkBSrc?: string;
  _linkCSrc?: string;

  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./SingleBadge.scss";
import Tilt from "react-parallax-tilt";
