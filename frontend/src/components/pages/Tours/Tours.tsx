/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function ToursPage({
  _componentProps,
  children,
  _className,
  _style,
  _onClick,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  const _data = useLoaderData();
  const _tours = _data.data.data; //make a generic function

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType
        {...rest}
        className="tours__header"
        onClick={_onClick}
        style={{
          background: `url(${BrandImage3}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <HomeLogoBox
          _src={LogoPink}
          _className="tours__header-logo"
          _imgClass="tours__header-logo-box"
        />
        <div className="tours__header-elements">
          <h1 className="tours__header-title"> tours </h1>
        </div>
      </_contextType>
      <div className="tours__body">
        <TourList
          _className="tours__body-grid"
          _cardList="tours__body-cards"
          _tours={_tours}
        />

        {children}
      </div>
    </>
  );
}

/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
export async function loader() {
  const _response = await FetchData({ _endPoint: "tours" });
  console.log(_response);
  return _response;
}
//not related to
async function tsErrorLoader() {
  const _response = await FetchData({ _endPoint: "users/me" });
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
//@ts-ignore
import TourPage from "../Tour/Tour";
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////

import FetchData from "../../../requests/http.ts";

//@ts-ignore
import "./Tours.scss"; //@ts-ignore
import { Link, useLoaderData } from "react-router-dom"; //@ts-ignore
import { useEffect, useState } from "react"; //@ts-ignore
import TwoSidedProductCard from "../../UI/elements/cards/TwoSidedProductCard"; //@ts-ignore
import { Tour, Tours } from "../../../models/types/types.js";
import TourList from "./TourList.tsx"; //@ts-ignore
import { LogoPink, BrandImage3 } from "../../../utility/imports.js";
import GeneralButton from "../../UI/elements/buttons/GeneralButton.tsx";
import HomeLogoBox from "../home/HomeLogo.tsx";
