//@ts-ignore
import { useState, useEffect } from "react";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default async function HomePage({
  _componentProps,
  _children,
  _className,
  _style,
  // _data,
  _onClick,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  const _navigator = useNavigate();
  const _data = useLoaderData();
  const _tours = _data.data.data; //< FIXME: [ BE ] SIMPLIFY

  const NavigationHandler = (nav: string) => {
    _navigator(nav);
  };

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      {/* FIXME: ///MAKE HOME HEADER COMPONENET/// */}
      <_contextType {...rest} className="home__wrapper" onClick={_onClick}>
        <section
          {...rest}
          className="home"
          onClick={_onClick}
          style={{
            background: `url(${BrandImage2}) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <HomeLogoBox
            _src={LogoWhite}
            _className="logo-box"
            _imgClass="logo"
          />
          <HomeHeaderElements
            _captionLogoSelector={false}
            _logo={LogoLetters_only_white}
            _logoClass="elements__header-logo"
            _className="home__text-box"
            _tittleClass="home-heading-primary"
            _headingMain="home-heading-primary-main"
            _headingSub="home-heading-primary-sub"
            _mainTag="Trax"
            _subTag="Instant Memories"
            _logoSub=""
            _logoSubClass=""
          >
            <GeneralButton
              _btnText="Discover the world"
              _className="btn btn-white btn-animated margin-home__btn"
              _href=""
              _onClick={() => NavigationHandler("tours")}
            />
          </HomeHeaderElements>
        </section>

        {/* ////TOP TOURS SECTIONS//// */}
        <TourSection>
          <TopTours _tours={_tours} />
        </TourSection>

        {/* TODO: ////CORE VALUES SECTIONS//// */}
        <CoreValuesSection />

        {/* TODO:////MOST VIEWED USERS PICTURES SECTIONS//// */}
        <section>
          <p>Pictures Section</p>
        </section>

        {/* TODO: ////REVIEWS SECTION//// */}
        <section>
          <p>Reviews Section</p>
        </section>

        {/* TODO: ////INSTANT BOOK SECTION//// */}
        <section>
          <p>Insant Book Section</p>
        </section>

        {/* TODO: ////BRANDING CARD SECTION//// */}
        <section>
          <p>Branding Card Section</p>
        </section>
      </_contextType>
    </>
  );
}

/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
export async function topToursLoader() {
  // const response = await fetchDialer({ _endPoint: "tours/top-5-cheap" });
  const _response = await FetchData({ _endPoint: "tours/top-5-cheap" });
  //showAlert("loading", "LOADING...", 1000);
  return _response;
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
const _contextType = "div";
type _props = _defaultProps & _altProps;

type _defaultProps = {
  _componentProps?: React.ComponentPropsWithoutRef<"div"> & {
    ///add alternative propierties than the native elements
  };
  _children?: React.ReactNode;
  _className?: string;
  _style?: React.CSSProperties;
  // _data?: unknown;
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
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import HomeLogoBox from "./HomeLogo.tsx";
import GeneralButton from "../../UI/elements/buttons/GeneralButton.tsx";
import TourSection from "../../UI/sections/tours/ToursSection.tsx";
import HomeHeaderElements from "./HomeHeaderElements.tsx"; //@ts-ignore
import "./Home.scss"; //@ts-ignore
import "./HomeHeaderElements.scss"; //@ts-ignore
import "./HomeLogo.scss";

import FetchData from "../../../requests/http.ts";

//@ts-ignore
import "../../../sass/typography/_typography.scss";
import {
  //LogoBlack,
  LogoWhite,
  LogoLetters_only_white,
  // BG_Lettering_black_one,
  //BrandImage1,
  BrandImage2,
  // BrandImage3,
  showAlert,

  // @ts-ignore
} from "../../../utility/imports.js";
import TopTours from "./TopTours.tsx";
import { Dailer } from "../../../requests/useDialers.tsx";
import { useQuery } from "@tanstack/react-query";
import { useLogger } from "../../../models/hooks/logging/useLogging.tsx";

//////////////////////////////////////////////////////>SECTIONS
import CoreValuesSection from "./sections/core_values/CoreValuesSection.tsx";
