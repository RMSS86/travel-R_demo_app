const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TopNav({
  children,
  _navClassName,
  _style,
  _menuClass,
  _onClick,
  _linkWrap,
  _linksClass,
  _navLink,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  //@ts-ignore
  const { globalUser, setGlobalUser } = useUserContext();
  console.log("From Top Navigator: ", globalUser);
  let _navigate = useNavigate();

  ///////LOGOUT///////LOGOUT///////LOGOUT///////LOGOUT///////LOGOUT///////LOGOUT
  ///////LOGOUT///////LOGOUT///////LOGOUT///////LOGOUT///////LOGOUT///////LOGOUT

  /////<
  const _dialog = useRef<HTMLDialogElement>(null);
  const _invokeModal = () => {
    //@ts-ignore
    _dialog.current!.open();
  };
  const _modalCommandClose = () => {
    _dialog.current!.close();
  };

  ///////LOGOUT
  const _logOut = async () => {
    //<MOVE TO A DEDICATED FILE OF ACTIONS
    try {
      const _response: any = await FetchData({
        _endPoint: "users/logout",
        _method: "GET",
      });
      const _resData = await _response.json();
      console.log("from log out", _resData);
      if (_resData.status === "success") {
        setGlobalUser(_userDefault); //< modify to local storge
        _modalCommandClose(); //> closes de modal

        useLocalUser({ _action: "remove", _storageKey: "user" });
        showAlert("success", "Succesflly Logged Out!");
        logActions({
          _action: "logout",
          _direct: _navigate("/"),
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  /////<

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <>
        <GeneralModal ref={_dialog}>
          <ModalCardStandard
            _brandingBGSrc={BG_Lettering_grey}
            _brandinglogosrc={LogoBlack}
            _msgTag="Are you Sure to Log Out?"
            _imgSrc={WarningIcon}
          >
            <ATagButton
              _btnText="LogOut"
              _onClick={_logOut}
              _className="btn btn--green"
            />
            <ATagButton
              _btnText="Cancel"
              _onClick={_modalCommandClose}
              _className="btn btn--white"
            />
          </ModalCardStandard>
        </GeneralModal>
      </>

      <ContextType
        {...rest}
        className={_navClassName}
        onClick={_onClick}
        style={_style}
      >
        <ul className={_menuClass} key="ul-1">
          {_menuFeatures.map((e) => (
            <Links
              _feat={e.menu}
              _href={e.href}
              _liClassName={_linksClass}
              _navLink={_navLink}
              _onClick={e.action}
              _key={e.menu}
            />
          ))}
          {globalUser!._active ? (
            <LogOutNav
              _liClass="nav__item"
              _aClass="nav__link"
              _aTag="LogOut"
              _onClick={_invokeModal}
              // _onClick={_logOut}
            />
          ) : (
            <Links
              _feat="LogIn"
              _href="login"
              _liClassName="nav__item"
              _navLink="nav__link"
              _onClick={() => {}}
            />
          )}

          {/* {BookNowBtn(props, book[0])} */}
        </ul>
      </ContextType>
    </>
  );
}

/////EXTERNAL/////EXTERNAL/////EXTERNAL/////EXTERNAL/////EXTERNAL//////
/////EXTERNAL/////EXTERNAL/////EXTERNAL/////EXTERNAL/////EXTERNAL//////

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _navClassName?: string;
  _style?: React.CSSProperties;
  _menuClass: string;
  _linkWrap: string;
  _linksClass: string;
  _navLink: string;
  _onClick?: () => void;
};

// const book: string[] = ["Book Now!", "Instant Memory!"];

const handleHover = (e) => {
  if (e.target.classList.contains("nav__link")) {
    //console.log(e.target.classList.value, " Included");
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    //console.log("siblings ", siblings);
    const logo = link.closest(".nav").querySelector("img");
    //console.log(logo);
    //console.log(this);
    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
// import React, { useEffect, useRef, useState } from "react";
// import handleHover from '../'
import {
  _menuFeatures,
  _userDefault,
} from "../../../../../utility/data/data.ts";
import Links from "../../links/Links.tsx";
import LogOutNav from "./LogOutNav.tsx"; //@ts-ignore
import {
  LogoBlack,
  WarningIcon,
  BG_Lettering_grey,
} from "../../../../../utility/imports.js";
//@ts-ignore
import "./TopNavigator.scss";
import { useUserContext } from "../../../../../store/UserContext.tsx";
import { useRef } from "react";
import FetchData from "../../../../../requests/http.ts"; //@ts-ignore
import { useNavigate } from "react-router-dom"; //@ts-ignore
import { showAlert } from "../../../../../utility/imports.js";
import { logActions } from "../../../../../models/functions/userLogActions.ts";
import GeneralModal from "../../../../Layout/modals/GeneralModal.tsx";
import ModalCardStandard from "../../cards/modal/ModalCard.tsx";
import ATagButton from "../../buttons/ATagButton.tsx";
import { useLocalUser } from "../../../../../models/hooks/useLocalUser.tsx";
