/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TourImages({
  _componentProps,
  children,
  _className,
  _imagesSRC,
  _style,

  _onClick,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  const IMAGES = [BrandImage1, BrandImage4, BrandImage6];
  const Imager = ({
    _src,
    _imgClass,
    _baseClass,
    _imageWrapClass,
    _logoTopClass,
    _logoTopSrc,
    _footer_dsc,
    _tourName,
    _likeClass,
    _bottomLogo,
    _likeLogoSrc,
  }: {
    _src?: string;
    _imgClass?: string;
    _baseClass?: string;
    _logoTopClass?: string;
    _logoTopSrc?: string;
    _likeClass?: string;
    _footer_dsc?: string;
    _imageWrapClass?: string;
    _tourName?: string;
    _bottomLogo?: string;
    _likeLogoSrc?: string;
  }) => {
    return (
      <div className={_imageWrapClass}>
        <img src={_logoTopSrc} className={_logoTopClass} />
        <img src={_src} className={_imgClass} key={_src} />
        <div className={_baseClass}>
          <div className={_footer_dsc}>
            <img className={_likeClass} src={_likeLogoSrc} />
            <span>81</span>
          </div>
          <div className={_footer_dsc}>
            <span>{_tourName}</span>
            <img className={_likeClass} src={_bottomLogo} />
          </div>
        </div>
      </div>
    );
  };
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType {...rest} className="images" onClick={_onClick} style={{}}>
        <div className="images__title-block">
          <h2 className="images__title-block__title">Photo Gallery</h2>
          <BrandBadgePlus _logoSrc={LogoLetters_only_white} />
          <img
            className="images__title-block__img"
            src={BG_Lettering_grey}
            alt="brand-mural"
          />
        </div>
        <div className="images__frame">
          {/* {IMAGES.map((img) => (
            <Imager
              _logoTopSrc={LogoWhite}
              _logoTopClass="images__logo"
              _imageWrapClass="images__wrapper"
              _imgClass="images__image"
              _src={IMAGES[img]}
              _baseClass="images__footer"
              _likeClass="images__footer-logo"
            />
          ))} */}
          <Imager
            _logoTopSrc={LogoWhite}
            _bottomLogo={LogoLetters_only_white}
            _likeLogoSrc={Heart}
            _logoTopClass="images__logo"
            _imageWrapClass="images__wrapper"
            _imgClass="images__image"
            _src={IMAGES[0]}
            _baseClass="images__footer"
            _likeClass="images__footer-logo"
            _footer_dsc="images__footer__desc"
            _tourName="The Hikers Tour"
            // key={}
          />
          <Imager
            _logoTopSrc={LogoWhite}
            _bottomLogo={LogoLetters_only_white}
            _likeLogoSrc={Heart}
            _logoTopClass="images__logo"
            _imageWrapClass="images__wrapper"
            _imgClass="images__image"
            _src={IMAGES[1]}
            _baseClass="images__footer"
            _likeClass="images__footer-logo"
            _footer_dsc="images__footer__desc"
            _tourName="The Hikers Tour"
          />
          <Imager
            _logoTopSrc={LogoWhite}
            _bottomLogo={LogoLetters_only_white}
            _likeLogoSrc={Heart}
            _logoTopClass="images__logo"
            _imageWrapClass="images__wrapper"
            _imgClass="images__image"
            _src={IMAGES[2]}
            _baseClass="images__footer"
            _likeClass="images__footer-logo"
            _footer_dsc="images__footer__desc"
            _tourName="The Hikers Tour"
          />
        </div>
        {/* {children} */}
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
  _imagesSRC?: string[];
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

/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import React from "react"; //@ts-ignore
import "./TourImages.scss";
import {
  BrandImage1,
  BrandImage4,
  BrandImage6,
  Heart,
  LogoWhite,
  LogoLetters_only_white,
  BG_Lettering_grey,
  //@ts-ignore
} from "../../../../utility/imports.js";
import BrandBadgePlus from "../../../UI/footer/FooterBrand";
