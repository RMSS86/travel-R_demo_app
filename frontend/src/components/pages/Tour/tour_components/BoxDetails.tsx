// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function DSCBoxDetails({
  children,
  _className,
  _overviewClass,
  _imgClass,
  _lableClass,
  _textClass,
  _imgSrc,
  _label,
  _text,
  _style,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  const TextPad = (_text: string) => {
    return <></>;
  };
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <ContextType
        {...rest}
        className={_overviewClass}
        onClick={_onClick}
        style={_style}
      >
        <div className="line__wrapper">
        <img src={_imgSrc} className={_imgClass} />
          <span className={_lableClass}>{_label}</span>
          <div className="line__wrapper-text">
            <span className={_textClass}>{_text}</span>
          </div>
        </div>
       
        {/* {children} */}
      </ContextType>
    </>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;

  _className?: string;
  _style?: React.CSSProperties;
  _overviewClass: string;
  _imgClass: string;
  _lableClass: string;
  _textClass: string;
  _imgSrc?: string;
  _label: string;
  _text: string;

  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
import React from "react";
import "./BoxDetails.scss";
