// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TopTours({
  children,
  _tours,
  _className,
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
      className="row__middle"
      onClick={_onClick}
      style={_style}
    >
      {/* <TourSection> */}
      {_tours?.map((tour) => (
        <OneSidedProductCard
          _wrapperClassName="grider"
          _title={tour?.name}
          _Location="Livingston Izabal"
          _dscTag="DIFFICULTY"
          _dscTagText={tour?.difficulty}
          _rating="RATING"
          _ratingText={tour?.ratingsAverage.toString()}
          _only="Only"
          _price={tour?.price.toString()}
          _imageCover={_defaultTourDir+tour?.imageCover} //{tour?.imageCover}
          _imgPrefixDir={_defaultTourDir}
        />
      ))}
      {/* </TourSection> */}
      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _tours?: Tours;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
import { Tour, Tours } from "../../../models/types/types";
import OneSidedProductCard from "../../UI/elements/cards/OneSidedProductCard.";
import TwoSidedProductCard from "../../UI/elements/cards/TwoSidedProductCard";
import TourSection from "../../UI/sections/tours/ToursSection";
import {_defaultTourDir} from '../../../utility/imports.js';
import "../../UI/sections/tours/ToursSection.scss";
