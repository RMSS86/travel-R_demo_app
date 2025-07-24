// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function CardBackFace({
  children,
  _cardBackFaceclass,
  _enableChilren = false,
  _cardBackFaceCta,
  _cardBackFacePrice,
  _cardBackFacePriceOnly,
  _cardBackFacePriceValue,
  _priceOnlyText,
  _priceValue = "0.00",
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
      className={_cardBackFaceclass}
      onClick={_onClick}
      style={_style}
    >
      <div className={_cardBackFaceCta}>
        <div className={_cardBackFacePrice}>
          <p className={_cardBackFacePriceOnly}>{_priceOnlyText}</p>
          <p className={_cardBackFacePriceValue}>${_priceValue}</p>
        </div>
        {children}
      </div>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _cardBackFaceclass?: string;
  _cardBackFaceCta?: string;
  _cardBackFacePrice?: string;
  _priceOnlyText?: string;
  _priceValue?: string;
  _cardBackFacePriceOnly?: string;
  _cardBackFacePriceValue?: string;

  _enableChilren?: boolean;

  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////

{
  /* use the generic botton on green color!*/
}
{
  /* <a href="#popup" className="btn btn-black">
            Book now!
          </a> */
}
