const ContextType = "li";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function NavElement({
  children,
  _aClass,
  _navIndex,
  _navTitle,
  _href,
  _id,
  _key,
  _className,
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
      key={_key}
      id={_id}
      className={_className}
      style={_style}
      onClick={_onClick}
    >
      <NavLink to={_href} className={_aClass}>
        {/* <span>{_navIndex}</span> */}
        {_navTitle}
      </NavLink>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _aClass?: string;
  _navIndex?: string;
  _navTitle?: string;
  _href?: string;
  _id?: string;
  _key?: string;
  _className?: string;

  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import { NavLink, Link } from "react-router-dom";
