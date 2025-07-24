/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TourDSC({
  _componentProps,
  children,
  _className,
  _iconSrc,
  _style,
  _bottomLogoClass,
  _onClick,
  _tour,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType
        {...rest}
        className="description"
        onClick={_onClick}
        // style={{
        //   background: `url(${ArtisticBG}) no-repeat`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "top",
        // }}
      >
        <div className="overview__box">
          <div>
            <div className="overview__box-group">
              <div className="overview__box-head">
                <img src={InfoIcon} alt="info" />
                <h4 className="">info</h4>
              </div>

              <div className="overview__box-althead">
                <img src={InfoIcon} alt="info" />
                <h4 className="">info</h4>
              </div>

              <div className="overview__box-title-wrapper">
                <h2 className="overview__box-title margin-bt-smll">The Tour</h2>
              </div>

              <div className="overview__box-group__wrapper">
                <div className="overview__box-group__wrapper-left">
                  <div className="centered">
                    <img src={LogoWhite} className="overview__logo" />
                  </div>
                  <div className="overview__box-group__wrapper-left_deal">
                    <div className="centered">
                      <h2 className="overview__hot">
                        {_tour?.trending ? "HOT" : "FAIR"}
                      </h2>
                    </div>
                    <div className="centered">
                      <h3 className="">deal</h3>
                    </div>
                  </div>
                </div>

                {/* /////MAKE OWN COMPONENT/// */}
                <div className="overview__box-group__wrapper-right">
                  <DSCBoxDetails
                    _overviewClass="overview__box-details"
                    _imgSrc={AvlIcon}
                    _imgClass="overview__box-icon"
                    _lableClass="overview__box-label"
                    _textClass="overview__box-text"
                    _label="Availability"
                    _text="10 Hotels"
                  />
                  <DSCBoxDetails
                    _overviewClass="overview__box-details"
                    _imgSrc={DifIcon}
                    _imgClass="overview__box-icon"
                    _lableClass="overview__box-label"
                    _textClass="overview__box-text"
                    _label="DIFFICULTY"
                    _text={_tour!.difficulty}
                  />

                  <DSCBoxDetails
                    _overviewClass="overview__box-details"
                    _imgSrc={GPSIcon}
                    _imgClass="overview__box-icon"
                    _lableClass="overview__box-label"
                    _textClass="overview__box-text"
                    _label="LOCATIONS"
                    _text={`${_tour!.locations.length.toString()} Locations`}
                  />

                  <DSCBoxDetails
                    _overviewClass="overview__box-details"
                    _imgSrc={StarIcon}
                    _imgClass="overview__box-icon"
                    _lableClass="overview__box-label"
                    _textClass="overview__box-text"
                    _label="RATING"
                    _text={`${_tour!.ratingsAverage.toString()} Stars`}
                  />
                </div>
              </div>
              {/* /////MAKE OWN COMPONENT/// */}

              {/* ///////FOOTER////MID//// */}

              {/* ///extrat and brin  */}
              <div
                className="overview__box-middle "
                style={{
                  // background: `url(${BrandImage3}) no-repeat`
                  backgroundImage: `url(${BG_Lettering_black_one})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  filter: "opacity(0.93)",
                }}
              >
                <Tilt>
                  <div className="overview__box-foot">
                    <img src={Artistic_Logo_One} alt="branding" />
                  </div>
                </Tilt>
                <div className="overview__box-middle_right">
                  <img className="shadow-add" src={QRIcon_A} alt="re" />
                  <img className="shadow-add" src={InfoIcon} alt="re" />
                  <img className="shadow-add" src={GoogleLocation} alt="re" />
                </div>
              </div>

              <div className="overview__box-footer footer__low">
                <div className="">
                  <img
                    src={LogoLetters_only_white}
                    className="overview__box-footer-stamp"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="overview__box-group"
              style={{
                background: `url(${ArtisticBG}) no-repeat`,
                backgroundSize: "cover",
                borderRadius: "25px",
                // backgroundPosition: "top",
              }}
            >
              <h2 className="overview__box-title margin-bt-smll-plus">About</h2>
              <div className="description__text-wrapper">
                <p className="description__text">{_tour?.summary}</p>
                <p className="description__text">{_tour?.description}</p>
              </div>
              <div className="description__logo-wrapper">
                <img
                  src={LogoLetters_only_white}
                  className="description__logo-bottom"
                  alt="logo"
                />
              </div>
              <img src={LogoWhite} className="bottom-logo" />
            </div>
          </div>
        </div>

        {/* ///////HOTELS AREA//////// */}
        <div className="description__box">
          <div className="overview__box-hotels">
            <div className="description__text-wrapper-bg tittles-top">
              <h2 className="overview__box-title">Best Deal Hotels</h2>
            </div>

            <div className="hotels__list">
              <div className="hotels__list-element">
                {/* /////HOTEL ELEMENT//// */}
                <HotelCard
                  _hoteIMG={Hotel1}
                  _logoIMG={LogoWhite}
                  _logoFooter={LogoLetters_only_white}
                  _hotelName="Valhalla Hotel"
                  _bestPrice="78.99"
                  _hotelRate="4.5"
                  _amenityIconOne={InfoIcon}
                  _amenityIconTwo={InfoIcon}
                  _amenityIconThree={InfoIcon}
                />
                {/* /////HOTEL ELEMENT//// */}
                <HotelCard
                  _hoteIMG={Hotel1}
                  _logoIMG={LogoWhite}
                  _logoFooter={LogoLetters_only_white}
                  _hotelName="Casa Rosada Hotel"
                  _bestPrice="78.99"
                  _hotelRate="4.5"
                  _amenityIconOne={InfoIcon}
                  _amenityIconTwo={InfoIcon}
                  _amenityIconThree={InfoIcon}
                />
                {/* /////HOTEL ELEMENT//// */}
                <HotelCard
                  _hoteIMG={Hotel1}
                  _logoIMG={LogoWhite}
                  _logoFooter={LogoLetters_only_white}
                  _hotelName="Villa Caribe Hotel"
                  _bestPrice="78.99"
                  _hotelRate="4.5"
                  _amenityIconOne={InfoIcon}
                  _amenityIconTwo={InfoIcon}
                  _amenityIconThree={InfoIcon}
                />
                {/* /////HOTEL ELEMENT//// */}
                <HotelCard
                  _hoteIMG={Hotel1}
                  _logoIMG={LogoWhite}
                  _logoFooter={LogoLetters_only_white}
                  _hotelName="Henry Berrisford Hotel"
                  _bestPrice="78.99"
                  _hotelRate="4.5"
                  _amenityIconOne={InfoIcon}
                  _amenityIconTwo={InfoIcon}
                  _amenityIconThree={InfoIcon}
                />
                {/* /////HOTEL ELEMENT//// */}
                <HotelCard
                  _hoteIMG={Hotel1}
                  _logoIMG={LogoWhite}
                  _logoFooter={LogoLetters_only_white}
                  _hotelName="Stevenson's Shore Hotel"
                  _bestPrice="99.99"
                  _hotelRate="4.5"
                  _amenityIconOne={InfoIcon}
                  _amenityIconTwo={InfoIcon}
                  _amenityIconThree={InfoIcon}
                />

                {/* ///// */}
              </div>
            </div>
          </div>

          <div className="overview__box-hotels">
            {/* //bring the location over */}
            {/* <Tilt>
              <div className="overview__box-foot">
                <img src={Artistic_Logo_One} alt="branding" />
              </div>
            </Tilt> */}
            <div className="overview__box-footer footer__mid">
              {_tour?.locations.map((_loc) => (
                <TourLocs
                  _className="footer__mid-location"
                  _LocIcon={GPSIcon}
                  _LocName={_loc.description}
                  _nameClass="overview__box-footer-point"
                  _logoClass="overview__box-footer-logo"
                />
              ))}
            </div>
            {/* //bring the location over */}
          </div>

          <div className="overview__box-hotels">
            <div className="description__text-wrapper-bg tittles-bottom">
              <img
                src={LogoLetters_only_white}
                className="description__logo-bottom centered"
                alt="logo"
              />
            </div>
          </div>
        </div>

        {children}
      </_contextType>
    </>
  );
}
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
const _contextType = "section";
type _props = _defaultProps & _altProps;

type _defaultProps = {
  _componentProps?: React.ComponentPropsWithoutRef<"section"> & {
    ///add alternative propierties than the native elements
  };
  children?: React.ReactNode;
  _className?: string;
  _style?: React.CSSProperties;
  _bottomLogoClass?: string;
  _iconSrc?: string;

  _tour?: Tour;
  _onClick?: () => void;
};

type _altProps = {
  // _params?: {
  //   _param_1: number;
  //   _param_2: number;
  //   _param_3: number;
  // };
  // _onClickParam?: (test: string) => void;
  // _paramsRec?: Record<string, number>; ///in case on need to insert parametters mixed
  // _setCount: React.Dispatch<React.SetStateAction<number>>;
};

/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////

//@ts-ignore
import React from "react";
import { Tour } from "../../../../models/types/types.js";
import {
  LogoLetters_only_white,
  BG_Lettering_black_one,
  Artistic_Logo_One,
  LogoPink,
  LogoWhite,
  ArtisticBG,
  LetterBG_transp,
  BG_Lettering_grey,
  GoogleLocation,
  Hotel1,
  InfoIcon,
  StarIcon,
  GPSIcon,
  DifIcon,
  AvlIcon,
  QRIcon_A,
  //@ts-ignore
} from "../../../../utility/imports.js";
import HotelCard from "../../hotel/hotel_card/HotelCard.js";
import DSCBoxDetails from "../tour_components/BoxDetails"; //@ts-ignore
import TourLocs from "../tour_components/TourLocBullets.js";
import Tilt from "react-parallax-tilt";
