/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function Header({
  _componentProps,
  _children,
  _className,
  _style,
  _onClick,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType {...rest} className="header" onClick={_onClick} style={{}}>
        <PopNavigator />
        <TopNav
          _navClassName="nav"
          _menuClass="nav__links"
          _linkWrap="nav__item"
          _linksClass="nav__item"
          _navLink="nav__link"
        />
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
  _children?: React.ReactNode;
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
import TopNav from "../elements/menu/statics/TopNavigator";
import PopNavigator from "../elements/menu/dynamics/navigators/navigation/PopNavigator";
//@ts-ignore
import "../elements/menu/dynamics/navigators/navigation/PopNavigator.scss";
// @ts-ignore
import "./Header.scss"; // @ts-ignore
import "../elements/menu/dynamics/navigators/Navigation/PopNavigator.scss";
// @ts-ignore
import "../../../sass/typography/_typography.scss";
