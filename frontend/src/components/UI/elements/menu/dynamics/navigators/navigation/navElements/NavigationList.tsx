import LogoBox from "../../../../../media/logo/LogoBox";

const ContextType = "nav";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function NavList({
  children,
  _className,
  _style,
  _listTagClass,
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
      //onClick={_onClick}
      style={_style}
    >
      <ul className={_listTagClass}>{children}</ul>
      <LogoBox
        _src={LogoLetters_only_white}
        _style={{
          width: "62rem",
          marginTop: "4%",
          marginLeft: "5%",
        }}
        _imgClass=""
      />
      <LogoBox
        _src={CancelIcon}
        _imgClass="navigation__nav-logo"
        _onClick={_onClick}
      />
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _className?: string;
  _listTagClass?: string;
  _href?: string;
  _id?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

import {
  LogoLetters_only_white,
  CancelIcon,
  _closePop,
  //@ts-ignore
} from "../../../../../../../../utility/imports.js";
