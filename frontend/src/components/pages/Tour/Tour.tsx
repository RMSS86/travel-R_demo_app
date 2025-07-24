/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TourPage({
  _componentProps,
  children,
  _className,
  _style,
  _onClick,
  _imageCover,
  _imgPrefixDir = "/src/assets/img/",
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  const _data = useLoaderData();
  const _tour = _data.tour;
  console.log(_tour);
  // const _tour = DUMMY_TOUR;

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType
        {...rest}
        className="tour__header"
        onClick={_onClick}
        style={{
          // background: `url(${BrandImage3}) no-repeat`
          backgroundImage: `url(${_imgPrefixDir + _tour.imageCover})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="tour__header-elements">
          <h1 className="tour__header-title">{_tour.name}</h1>
          <div className="tour__header__group">
            <div className="tour__header__group-detail">
              <img src={HotelIcon} alt="location" />
              <span className="heading-box__text">10 Hotels</span>
            </div>
            <div className="tour__header__group-detail">
              <img src={GoogleLocation} alt="location" />

              <span className="heading-box__text">
                {_tour.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </_contextType>

      {/* /////DESCRIPTION SECTION//// */}
      <TourDSC _tour={_tour} _iconSrc={arrowRm} />
      {/* /////IMAGES SECTION//// */}
      <TourImages />

      {/* /////////////////////////////////////// */}
      {/* /////////////////////////////////////// */}
      <section className="tour_map">
        <h1>Tour Map!</h1>
      </section>
      <section className="tour_reviews">
        <h1>Tour Reviews!</h1>
      </section>
      <section className="tour_cta">
        <h1>Tour BookNow!</h1>
      </section>
      {/* /////////////////////////////////////// */}
      {/* /////////////////////////////////////// */}
      {/* {children} */}
    </>
  );
}
/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
///TODO create type Tour with all fields //<  TOUR REFORMAT TO TANSTANK
export async function singleTourLoader({ params }) {
  const _slug = params.id;
  const _response = await FetchData({ _endPoint: `views/tour/${_slug}` });

  return _response;
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

  ////TOUR PARAMS////
  _imageCover?: string;
  _imgPrefixDir?: string;
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
import React from "react"; //@ts-ignore
import "./Tour.scss"; //@ts-ignore
import {
  BrandImage3,
  arrowRm,
  GoogleLocation,
  HotelIcon,
  BG_Lettering_black_one,
  //@ts-ignore
} from "../../../utility/imports.js"; //@ts-ignore
import "../../../sass/typography/_typography.scss";
import TourDSC from "./tour_sections/TourDsc.tsx";
//@ts-ignore
import { Link, useParams, useLoaderData } from "react-router-dom";
import FetchData from "../../../requests/http.ts";
import { DUMMY_TOUR } from "../../../utility/data/DUMMY_DATA.ts";
import TourImages from "./tour_sections/TourImages.tsx";
//   import FetchData from "../../../requests/http";

// const _param = useParams();
// const _data = useLoaderData();
// console.log("FROM TOUR: ", _tour);
// console.log("FROM TOUR: ", _tour.imageCover);
