// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function CardDescription({
  children,
  _cardDetails,
  _cardDescTitle,
  _cardDescLiner,
  _logoSignatureSrc,
  _logoSignatureBottomSrc,
  _logoCardClass,
  _logoSigBottomClass,
  _logoCardImgClass,
  _dscTitle,
  _texTitle,
  _dscDifficulty,
  _texDifficulty,
  _dscRate,
  _texRate,
  _logoAlt = "logo",
  _logoBottomAlt = "logo-bottom",
  _style,
  _toTourDetails,
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
      className={_cardDetails}
      onClick={_onClick}
      style={_style}
    >
      <ul>
        <li>
          <span className={_cardDescTitle}>{_dscTitle}</span>
          <span className={_cardDescLiner}>{_texTitle}</span>
        </li>
        <li>
          <span className={_cardDescTitle}>{_dscDifficulty}</span>
          <span className={_cardDescLiner}>{_texDifficulty}</span>
        </li>
        <li>
          <span className={_cardDescTitle}>
            <span className={_cardDescLiner}>{_dscRate}</span>
            {/* <img className="logo--liner" src={LogoWhite} alt="logo" /> */}
            {/* //{starLogo} */}
          </span>
          <span className={_cardDescLiner}>{_texRate}</span>
        </li>
      </ul>
      <img
        src={_logoSignatureBottomSrc} ///{logoBottom}
        alt={_logoBottomAlt}
        className={_logoSigBottomClass}
      />
      {/* /////USE A LOGOBOX///// */}

      <div className={_logoCardClass}>
        <img
          src={_logoSignatureSrc}
          alt={_logoAlt}
          className={_logoCardImgClass}
        />
      </div>

      {children}
     
    
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _cardDetails: string;
  _cardDescTitle: string;
  _cardDescLiner: string;
  _logoSignatureSrc: string;
  _logoSignatureBottomSrc: string;
  _logoCardClass: string;
  _logoCardImgClass: string;
  _logoSigBottomClass: string;

  _dscTitle: string;
  _texTitle: string;
  _dscDifficulty: string;
  _texDifficulty: string;
  _dscRate: string;
  _texRate: string;

  _logoAlt: string;
  _logoBottomAlt: string;
  _style?: React.CSSProperties;

  _toTourDetails?: () => void;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
