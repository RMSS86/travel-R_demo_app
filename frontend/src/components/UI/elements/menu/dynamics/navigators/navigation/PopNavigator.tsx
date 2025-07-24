/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function PopNavigator({
  children,
  _className,
  _style,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  //@ts-ignore
  const { globalUser } = useUserContext();
  const [userImage, setUserImage] = useState<string>("");

  useEffect(() => {
    if (globalUser?._active) {
      console.log(`${globalUser?._imgDir}${globalUser?._photo}`);
      setUserImage(() => `${globalUser?._imgDir}${globalUser?._photo}`);
    } else {
      setUserImage(() => DefaultUserLogo);
    }
  }, [globalUser]);

  function PopLinks({
    children,
    _navs,
  }: {
    children?: React.ReactNode;
    _navs: NAV[];
  }) {
    return (
      <>
        {_navs.map((nav: NAV) => (
          <NavElement
            _key={nav.navIndex}
            _className="navigation__item"
            _aClass="navigation__link"
            _navIndex={nav.navIndex}
            _navTitle={nav.nav}
            _href={nav.href}
            _onClick={_closePop}
          />
        ))}
      </>
    );
  }
  const ActionPanel = (props) => {
    const escFunction = useCallback((event) => {
      if (event.key === "Escape") {
        _closePop();
        //Do whatever when esc is pressed
      }
    }, []);

    useEffect(() => {
      document.addEventListener("keydown", escFunction, false);

      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }, [escFunction]);

    return <input />;
  };
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <NavHolder
        {...rest}
        _className="navigation"
        _inputType="checkbox"
        _inputId="navi-toggle"
        _inputClass="navigation__checkbox"
        _btnFor="navi-toggle"
        _btnClass="navigation__button"
        _iconClass="navigation__icon"
        _bgClass="navigation__background" //change to image!
        _style={{
          background: `url(${BG_Lettering_black_one}) `, //no-repeat
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <UserAvatar
          _alt="user"
          _className="avatar"
          _src={userImage}
          _pictureClass="avatar__img"
          _userName={
            globalUser?._active ? globalUser._name.split(" ")[0] : "Log-in"
          }
          _userWrapClass="avatar__tag"
          _userNameClass="avatar__name"
        />

        {/* ///wrap nav list inside a divider */}
        <NavList
          _className="navigation__nav"
          _listTagClass="navigation__list"
          _onClick={_closePop}
        >
          {globalUser?._active
            ? PopLinks({ _navs: NAVS })
            : PopLinks({ _navs: noNAVS })}
        </NavList>
      </NavHolder>
    </>
  );
}
/////MAKE THIS REUSABLE
const _closePop = () => {
  console.log("from the pop!");
  //@ts-ignore
  const _checked: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > = document.getElementById("navi-toggle");
  _checked.checked = false;
};
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

type NAV = {
  navIndex: string;
  nav: string;
  href: string;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
///import React, { useEffect, useRef, useState } from "react";
import NavHolder from "./navElements/NavigationHolder";
import NavElement from "./navElements/NavElement";
import NavList from "./navElements/NavigationList";
import UserAvatar from "../../../../media/avatars/UserAvatar.js";

// @ts-ignore
import "./PopNavigator.scss";
import {
  BG_Lettering_black_one,
  LogoLetters_only_white,
  UserIcon,
  User, ///will replace with database image
  NAVS,
  noNAVS,
  DefaultUserLogo,
  CancelIcon,
  /// @ts-ignore
} from "../../../../../../../utility/imports.js";
import { useUserContext } from "../../../../../../../store/UserContext.js";
import { useCallback, useContext, useEffect, useState } from "react";
import LogoBox from "../../../../media/logo/LogoBox.js";
