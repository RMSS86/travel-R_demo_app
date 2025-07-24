import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function PicturedCard({
  children,
  _className = "pictured-card",
  _id = ContextId,
  _style,
  _onClick,
  _onCompClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  const [selectedValue, setSelectedValue] = useState("");

  function handleSelect(selectedButton: string) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedValue(selectedButton);
    // console.log(selectedTopic);
  }
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <ContextType
      {...rest}
      id={_id}
      className={_className}
      onClick={_onClick}
      style={_style}
    >
      <div
        className="pictured-card__frame"
        style={{
          background: `url(${BrandImage2}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PicturedCardMenu _className="pictured-card__menu">
          <IconedButtonRounded />
          {/* <IconedButtonRounded />
            <IconedButtonRounded />
            <IconedButtonRounded /> */}
        </PicturedCardMenu>
      </div>

      <SelfDescriptiveCard _className="pictured-card__description">
        {/* //ENTER ELEMENTS// */}
      </SelfDescriptiveCard>
      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _id?: string;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
  _onCompClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./PicturedCard.scss";
import PicturedCardMenu from "./PicturedCardMenu";
import IconedButtonRounded from "../../../../../UI/elements/buttons/IconedButton_Rounded";
import SelfDescriptiveCard from "../../../../../UI/elements/cards/descriptives/SelfDescriptiveCard";

import { BrandImage2 } from "../../../../../../utility/imports.js";
