const ContextType = "div";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function UserAvatar({
  _className,
  _pictureClass,
  _srcSet,
  _media,
  _imgSrcSet,
  _src,
  _alt,
  _id,
  _userName,
  _userWrapClass,
  _userNameClass,
  children,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  //   const [name, setName] = useState();

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <ContextType id={_id} className={_className} {...rest}>
      <picture>
        <source srcSet={_srcSet} media={_media} />
        <img
          className={_pictureClass}
          srcSet={_imgSrcSet}
          alt={_alt}
          src={_src}
          //> for fetching url>>
          crossOrigin="anonymous"
        />
      </picture>
      <div className={_userWrapClass}>
        <a className={_userNameClass}>{_userName}</a>
      </div>
      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  _className?: string;
  _pictureClass?: string;
  _srcSet?: string;
  _media?: string;
  _imgSrcSet?: string;
  _src?: string;
  _alt?: string;
  _userName?: string;
  _userNameClass?: string;
  _userWrapClass?: string;

  children?: React.ReactNode;
  _style?: React.CSSProperties;
  _id?: string;

  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
