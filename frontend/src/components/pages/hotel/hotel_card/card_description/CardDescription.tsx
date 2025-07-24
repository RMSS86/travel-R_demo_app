// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function HotelCardDSC({
  children,
  _className = "hotel__description",
  _amType = "selection",
  _bPrice,
  _hRate,
  _style,
  _onClick,
  _lFooter,
  _amIconOne,
  _amIconTwo,
  _amIconThree,
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
      {/* ///////DESCRIPTION////// */}

      <div className="hotel__description-lines">
        {/* ///LINE/// */}
        <div className="hotel__description-line">
          <div className="hotel__description-line__bullet">
            <h4>Amenities:</h4>
          </div>
          <div className="hotel__description-line__bullet-value text__wrap">
            <h4>{_amType}</h4>
          </div>
        </div>
        {/* ///LINE/// */}

        <div className="hotel__description-line">
          <div className="hotel__description-line__bullet">
            <h4>Best Price:</h4>
          </div>
          <div className="hotel__description-line__bullet-value text__wrap">
            <h4>${_bPrice}</h4>
          </div>
        </div>
        {/* <div className='hotel__description-line__logo'><h4>Logo!</h4></div> */}
        {/* ///LINE/// */}
        <img
          src={_lFooter}
          className="hotel__description-line__logo logo-hotel__footer"
        />
      </div>

      {/* ///////ELEMENT///// */}

      <div className="hotel__description-amenities">
        <div className="">
          <img
            src={_amIconOne}
            className="hotel__description-amenities__amenity"
          />
        </div>
        <div className="">
          <img
            src={_amIconTwo}
            className="hotel__description-amenities__amenity"
          />
        </div>
        <div className="">
          <img
            src={_amIconThree}
            className="hotel__description-amenities__amenity"
          />
        </div>
      </div>

      {/* ////ELEMENT///// */}
      <div className="hotel__description-rate">
        <div className="hotel__description-rate__value">
          <h4>{_hRate}</h4>
        </div>
        <div className="hotel__description-rate__tag">
          <h4>Rate</h4>
        </div>
      </div>

      {/* ///// */}
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

  ///////DESCS
  _lFooter?: string;
  _amIconOne?: string;
  _amIconTwo?: string;
  _amIconThree?: string;
  _amType?: string;
  _bPrice?: string;
  _hRate?: string;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "../HotelCard.scss";
