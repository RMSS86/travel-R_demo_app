// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TwoSidedProductCard({
  children,
  _wrapperClassName,
  _title,
  _Location,
  _style,
  _goToTour,
  _dscTag,
  _dscTagText,
  _rating,
  _ratingText,
  _only,
  _price,
  _imageCover,
  _slug,
  _id,
  _imgPrefixDir,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  console.log(`${_imgPrefixDir + _imageCover}`);
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <ContextType
      {...rest}
      className={_wrapperClassName} ///defines the grid type
      onClick={_onClick}
      style={_style}
    >
      <div className="card">
        {/* /////CARD FRONT!///// */}
        <CardFrontFace
          _frontFaceClassNames="card__side card__side-front"
          _frontFacePicture="card__picture " //card__picture-img
          _cardHeading="card__heading"
          _inImgTitleClass="card__heading-span card__heading-span-img"
          _inImgTitle={_title} //"The Sea Explorer"
          _style={{
            backgroundImage: `url(${_imgPrefixDir + _imageCover})`,
          }}
        >
          {/* /////CARD FRONT DESCRIPTIONS BUTTONS///// */}
          <TourCMDSButton
            _CDGoClass="card__details-go"
            _CDGoLClass="card__details-go_left"
            _CDGoLBClass="card__details-go_left-bit"
            _CDGoRClass="card__details-go_right"
            _srcInfo={InfoIcon}
            _srcLoc={GoogleLocation}
            _srcBTN={GoIconGren}
          />

          {/* <div className="card__details-go">
            <div className="card__details-go_left">
              <div className="card__details-go_left-bit">
                <img src={InfoIcon} className="" alt="logo" />
              </div>
              <div className="card__details-go_left-bit">
                <img src={GoogleLocation} className="" alt="logo" />
              </div>
            </div>
            <div className="card__details-go_right">
              <img src={GoIconGren} className="" alt="logo" />
            </div>
          </div> */}

          {/* /////CARD FRONT DESCRIPTIONS AMENITIES///// */}

          <div className="card__details-amenities"></div>
          {/* /////CARD FRONT DESCRIPTIONS DEAL///// */}

          <div className="card__details-deal"></div>

          {/* /////CARD FRONT DESCRIPTIONS///// */}
          <CardDescription
            _cardDetails="card__details noHover"
            _cardDescTitle="card__description"
            _cardDescLiner="card__description--liner"
            _logoSignatureSrc={LogoWhite}
            _logoSignatureBottomSrc={LogoLetters_only_white}
            _logoCardClass="logo-box--card"
            _logoCardImgClass="logo--front"
            _logoSigBottomClass="logo-box--signature"
            _dscTitle={_title}
            _texTitle={_Location} //"Livingston Izabal"
            _dscDifficulty={_dscTag} //"DIFFICULTY" //
            _texDifficulty={_dscTagText} //"Medium" //
            _dscRate={_rating} //"Rating" //
            _texRate={_ratingText} //"4.5" //
          />
        </CardFrontFace>
        {/* ///// CARD BACK FACE ///// */}
        <CardBackFace
          _cardBackFaceclass="card__side card__side-back card__side-back-bg"
          _cardBackFaceCta="card__cta"
          _cardBackFacePrice="card__price-box"
          _priceOnlyText={_only} //"only" ///
          _priceValue={_price} //"99.99" ///
          _cardBackFacePriceOnly="card__price-only"
          _cardBackFacePriceValue="card__price-value"
        >
          {/* ///// BUTTON ///// */}
          <ATagButton
            _btnText="Travel Now!"
            _className="btn btn-green btn-animated"
            _href={_slug} /// make it a link ///_slug
            _onClick={_onClick} //{() => console.log("Travel Now!")} ///
          />
        </CardBackFace>
      </div>

      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _wrapperClassName?: string; //grid
  _style?: React.CSSProperties;
  _imageCover: string;
  _imgPrefixDir: string;

  _title?: string;
  _Location?: string;
  _dscTag?: string;
  _dscTagText?: string;
  _rating?: string;
  _ratingText?: string;
  _only?: string;
  _price?: string;
  _slug?: string;
  _id?: string;
  _goToTour?: () => void;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./TwoSidedProductCard.scss";
import TourCMDSButton from "./card_components/TourCommandsButton.tsx";
import {
  LogoWhite,
  LogoLetters_only_white,
  CardFrontFace,
  CardDescription,
  CardBackFace,
  ATagButton,
  GoIconGren,
  GoogleLocation,
  InfoIcon,
  //@ts-ignore
} from "../../../../utility/imports.js";

///5c88fa8cf4afda39709c2951
