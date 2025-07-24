// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function HotelCard({
  children,
  _className = "hotel",
  _style,
  _onClick,
  _hoteIMG,
  _logoIMG,
  _hotelName,
  _bestPrice,
  _hotelRate,
  _logoFooter,
  _amenityIconOne,
  _amenityIconTwo,
  _amenityIconThree,
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
      // style={_style}
    >
      <div
        className="hotel__image"
        style={{
          background: `url(${_hoteIMG}) no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="hotel__name">{_hotelName}</div>
        <img src={_logoIMG} className="hotel__image-logo" alt="logo" />
      </div>
      <HotelCardDSC
        _amType="selection"
        _bPrice={_bestPrice}
        _hRate={_hotelRate}
        _lFooter={_logoFooter}
        _amIconOne={_amenityIconOne}
        _amIconTwo={_amenityIconTwo}
        _amIconThree={_amenityIconThree}
      />
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;

  //////Image
  _hoteIMG?: string;
  _logoIMG?: string;
  _hotelName?: string;
  _bestPrice?: string;
  _hotelRate?: string;
  _logoFooter?: string;
  _amenityIconOne?: string;
  _amenityIconTwo?: string;
  _amenityIconThree?: string;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./HotelCard.scss";
import HotelCardDSC from "./card_description/CardDescription";
