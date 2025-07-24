const ContextType = "section";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TourList({
  children,
  _tours,
  _className,
  _style,
  _cardList,
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
      onClick={_onClick}
      style={_style}
    >
      <div className={_cardList}>
        {_tours?.map((tour) => (
          <TwoSidedProductCard
            _title={tour?.name}
            _Location=""
            _dscTag="DIFFICULTY"
            _dscTagText={tour?.difficulty}
            _rating="RATING"
            _ratingText={tour?.ratingsAverage.toString()}
            _only="Only"
            _price={tour?.price.toString()}
            _imageCover={tour?.imageCover}
            _imgPrefixDir={_defaultTourDir}
            _slug={tour?.slug}
            _id={tour?._id}
          />
        ))}
      </div>
      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _tours?: Tours;
  _className?: string;
  _cardList?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

import { Tour, Tours } from "../../../models/types/types";
import { _defaultTourDir } from "../../../utility/imports.js";
import TwoSidedProductCard from "../../UI/elements/cards/TwoSidedProductCard";
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
