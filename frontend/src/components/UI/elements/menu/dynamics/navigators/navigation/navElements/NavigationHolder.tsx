// import React, { useEffect, useRef, useState } from "react";

const HolderContainer = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function NavHolder({
  children,
  _className,
  _id,
  _inputType,
  _inputId,
  _inputClass,
  _btnFor,
  _btnClass,
  _iconClass,
  _bgClass,
  _style,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <HolderContainer
      {...rest}
      className={_className}
      onClick={_onClick}
      id={_id}
    >
      <input type={_inputType} className={_inputClass} id={_inputId} />
      <label htmlFor={_btnFor} className={_btnClass}>
        <span className={_iconClass}>&nbsp;</span>
      </label>
      <div className={_bgClass} style={_style}>
        &nbsp;
      </div>
      {children}
    </HolderContainer>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _className?: string;
  _id?: string;
  _inputType?: string;
  _inputId?: string;
  _inputClass?: string;
  _btnFor?: string;
  _btnClass?: string;
  _iconClass?: string;
  _bgClass?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
