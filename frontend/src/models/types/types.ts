export type _defaultProps = {
  _componentProps: React.ComponentPropsWithoutRef<"section"> & {
    ///add alternative propierties than the native elements
  };
  _children?: React.ReactNode;
  _contextType: string;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

type Tour = {
  _id: string;
  name: string;
  slug: string;
  duration: number;
  maxGroupSize: number;
  difficulty: "easy" | "medium" | "difficult" | "Expert";
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  priceDiscount: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: Date[];
  trending: boolean;
  startLocation: _location;
  locations: _locations[];
  guides?: string;
};
type Tours = Tour[];
interface _location {
  coordinates: number[];
  address: string;
  description: string;
}
interface _locations {
  coordinates: number[];
  address: string;
  description: string;
  day: number;
}

export type { Tour, Tours };
