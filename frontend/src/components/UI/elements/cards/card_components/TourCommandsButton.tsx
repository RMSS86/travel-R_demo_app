/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////

const ContextType = "div";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TourCMDSButton({
  children,
  _className,
  _CDGoClass,
  _CDGoLClass,
  _CDGoLBClass,
  _CDGoRClass,
  _srcLoc,
  _srcBTN,
  _srcInfo,

  _onLocGoClick,
  _onInfoClick,
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
      className={_CDGoClass}
      onClick={_onClick}
      style={_style}
    >
      <div className={_CDGoLClass}>
        <div className={_CDGoLBClass}>
          <img src={_srcInfo} className="" alt="logo" />
        </div>
        <div className={_CDGoLBClass}>
          <img src={_srcLoc} className="" alt="logo" />
        </div>
      </div>
      <div className={_CDGoRClass}>
        <img src={_srcBTN} className="" alt="logo" />
      </div>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;

  _className?: string;
  _CDGoClass?: string;
  _CDGoLClass?: string;
  _CDGoLBClass?: string;
  _CDGoRClass?: string;
  _srcLoc?: string;
  _srcBTN?: string;
  _srcInfo?: string;

  _style?: React.CSSProperties;
  _onClick?: () => void;
  _onLocGoClick?: () => void;
  _onInfoClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
