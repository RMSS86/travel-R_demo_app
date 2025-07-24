/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function Footer({
  children,
  _className = "footer",
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
      className={_className}
      onClick={_onClick}
      style={
        {
          // background: `url(${Artistic_BG_tranap_A}) no-repeat`,
          // backgroundSize: "cover",
          // backgroundPosition: "top",
        }
      }
    >
      <FooterLinks />

      <Tilt>
        <div className="footer__block">
          <BrandBadgePlus
            _logoSrc={LogoLetters_only_white}
            _footBrandSrcs={[iOSIcon_A, LogoBlack, AndroidIcon_B]}
          />
          <BrandBadgeSimple _logoSrc={LogoWhite} />
        </div>
      </Tilt>

      {/* {children} */}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
const ContextType = "footer";
type _defaultProps = {
  children?: React.ReactNode;

  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./Footer.scss"; //@ts-ignore
import {
  LogoWhite,
  LogoBlack,
  BG_Lettering_black_one as BG,
  LogoLetters_only_white,
  Artistic_BG_tranap_A,
  AndroidIcon_A,
  AndroidIcon_B,
  QRIcon_A,
  iOSIcon_A,
  //@ts-ignore
} from "../../../utility/imports.js";
import Tilt from "react-parallax-tilt";
import FooterLinks from "./FooterLinks.js";
import BrandBadgeSimple from "./FooterBadge.js";
import BrandBadgePlus from "./FooterBrand.js";
