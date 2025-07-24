// import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function ImageHolder({
  _className,
  _pictureClass,
  _srcSet,
  _media,
  _imgSrcSet,
  _src,
  _alt,
  _id,
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
        />
      </picture>
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
  children?: React.ReactNode;
  _style?: React.CSSProperties;
  _id: string;

  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore

//media='(max-width:37.5rem)'

// import "./styles.css";

// export default function App() {
//   const css = `@media (max-width: 650px) {
//     .backimage {
//         background-image: url("https://picsum.photos/200/300")
//     }
// }
// @media (min-width: 750px) {
//     .backimage {
//         background-image: url("https://picsum.photos/200");
//     }
// }`;

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <style scoped>{css}</style>
//       <main style={{ height: 300 }} className="backimage">
//         test
//       </main>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
