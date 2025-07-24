// import React, { useEffect, useRef, useState } from "react";

import ShrinkableOneSidedProductCard from "../../../cards/ShrinkableOneSidedProductCard";

const ContextType = "section";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function DynamicSideMenu({
  children,
  _className,
  _side = true,
  _titleLo,
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
      className={
        _side
          ? "user__page-block user__page-block__outright"
          : "user__page-block user__page-block__outright-lo"
      }
      onClick={_onClick}
      style={_style}
    >
      <div
        className={
          _side
            ? "user__page-block__outright-upper"
            : "user__page-block__outright-lo-upper"
        }
      >
        <Review />
      </div>
      <div
        className={
          _side
            ? "user__page-block__outright-lower"
            : "user__page-block__outright-lo-lower"
        }
      >
        <ShrinkableOneSidedProductCard
          _wrapperClassName="fav-tours"
          _imgPrefixDir=""
          _imageCover={BrandImage6}
          _title="The Star Gazer"
        />
        <ShrinkableOneSidedProductCard
          _wrapperClassName="fav-tours"
          _imgPrefixDir=""
          _imageCover={BrandImage2}
          _title="The Star Gazer"
        />
      </div>
      <TitleLabel
        _tag="Favourite Tours"
        _titleLo={_titleLo}
        _toCaps={true}
        _isFlipped={false}
      />

      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _side?: boolean;
  _titleLo?: boolean;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import { BrandImage2, BrandImage6 } from "../../../../../../utility/imports.js";
import TitleLabel from "../../../labels/TitleLabel";
import Review from "../../../cards/review/Review";
