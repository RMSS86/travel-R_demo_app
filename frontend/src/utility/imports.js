///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////MEDIA
import LogoBlack from "../assets/branding/logo/Travel_ur_logo_black.png";
import LogoWhite from "../assets/branding/logo/Travel_ur_logo_white.png";
import LogoPink from "../assets/branding/logo/Trax_logo-pink.png";
import LogoLetters_only_white from "../assets/branding/logo/Travel_ur_logo_and_letters__white.png";
import BG_Lettering_black_one from "../assets/branding/designs/Trax_let_backG_black_2.png";
import BG_Lettering_black_two from "../assets/branding/designs/Trax_let_backG_black.png";
import BG_Lettering_white from "../assets/branding/designs/Trax_mural_A-Letters_black.jpg";
import BG_Lettering_grey from "../assets/branding/designs/Trax_back_grey.png";
import Artistic_Logo_two from "../assets/branding/designs/Trax_waves_logo_A_2.png";
import Artistic_Logo_One from "../assets/branding/designs/letter_black_BGWhite_2.png";
import Artistic_BG_tranap_A from "../assets/branding/designs/Trax-bg-Logos_transparent.png";

///////TOURS
import BrandImage1 from "../assets/img/trax-1.jpg";
import BrandImage2 from "../assets/img/trax-2.jpg";
import BrandImage3 from "../assets/img/trax-3.jpg";
import BrandImage4 from "../assets/img/trax-4.jpg";
import BrandImage5 from "../assets/img/trax-5.jpg";
import BrandImage6 from "../assets/img/trax-6.jpg";
import BrandImage7 from "../assets/img/trax-7.jpg";
import ArtisticBG from "../assets/branding/artistic/trax-flash-A.png";

///////USERS
import User from "../assets/utility/user-1.jpg";
const DefaultUserLogo = "http://localhost/img/users/default.png";
const _defaultTourDir = "http://localhost/img/tours/";

///////ICONS
import LocationIcon from "../assets/icons/location-pin.png";
import GoogleLocation from "../assets/icons/google-maps.png";
import GoIconGren from "../assets/icons/go-arrow.png";
import arrowRm from "../assets/icons/arrow-right-m.png";
import InfoIcon from "../assets/icons/info.png";
import HotelIcon from "../assets/icons/hotel.png";
import StarIcon from "../assets/icons/star.png";
import GPSIcon from "../assets/icons/gps.png";
import DifIcon from "../assets/icons/tick.png";
import AvlIcon from "../assets/icons/event.png";
import UserIcon from "../assets/icons/profile-user.png";
import AndroidIcon_A from "../assets/icons/android-64.png";
import AndroidIcon_B from "../assets/icons/android.png";
import iOSIcon_A from "../assets/icons/ios-logo-50.png";
import QRIcon_A from "../assets/icons/qr-code-48.png";
import Heart from "../assets/icons/heart.png";
import WarningIcon from "../assets/icons/warning.png";
import CancelIcon from "../assets/icons/cancel.png";

//////HOTELS
import Hotel1 from "../assets/hotels/hotel-1.jpg";

///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////COMPONENTS

////////UI////////UI////////UI////////UI////////UI////////UI////////UI
////////UI////////UI////////UI////////UI////////UI////////UI////////UI
///////////////////////////////////////////HEADER
import Header from "../components/UI/header/Header.tsx";
import Footer from "../components/UI/footer/Footer.tsx";
import PopNavigator from "../components/UI/elements/menu/dynamics/navigators/navigation/PopNavigator";
//////////////////////////////////////////SECTIONS
//////////////////////////////////////TOUR SECTION
import ToursSection from "../components/UI/sections/tours/ToursSection.tsx";

//////////////////////////////////////////////////////CARDS
import TwoSidedProductCart from "../components/UI/elements/cards/TwoSidedProductCard.tsx";
////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////
////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////
/////////////////////////////////////////CARD//UI//ELEMENTS
import CardFrontFace from "../components/UI/elements/cards/card_components/CardFrontFace.tsx";
import CardDescription from "../components/UI/elements/cards/card_components/CardDescription.tsx";
import CardBackFace from "../components/UI/elements/cards/card_components/CardBackFace.tsx";
//////////BUTTONS
import ATagButton from "../components/UI/elements/buttons/ATagButton.tsx";

//////DATA//////DATA//////DATA//////DATA//////DATA//////DATA//////DATA
//////DATA//////DATA//////DATA//////DATA//////DATA//////DATA//////DATA
import { _menuFeatures, NAVS, noNAVS } from "./data/data.ts";
///////ALERTS//////ALERTS//////ALERTS//////ALERTS//////ALERTS//////ALERTS//////
///////ALERTS//////ALERTS//////ALERTS//////ALERTS//////ALERTS//////ALERTS//////
import { showAlert } from "../components/UI/elements/alerts/alerts.js";

//////HOOKS//////HOOKS//////HOOKS//////HOOKS//////HOOKS//////HOOKS//////HOOKS/////
//////HOOKS//////HOOKS//////HOOKS//////HOOKS//////HOOKS//////HOOKS//////HOOKS/////
import { useLogger } from "../models/hooks/logging/useLogging.tsx";
/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////
/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////

////////////////////////////////////////////SECTIONS
export { Header, Footer, ToursSection };
//////////////////////////////////////////////////UI
export { PopNavigator, TwoSidedProductCart };

////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////
////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////////UI///ELEMENTS////
//////////////////////////////////////CARD COMPONENTS
export { CardFrontFace, CardDescription, CardBackFace };
//////////////////////////////////////////BUTTONS
export { ATagButton, showAlert };
/////MEIDIA////MEIDIA////MEIDIA////MEIDIA///
/////MEIDIA////MEIDIA////MEIDIA////MEIDIA///
export {
  LogoBlack,
  LogoPink,
  LogoWhite,
  LogoLetters_only_white,
  BG_Lettering_black_one,
  BrandImage1,
  BrandImage2,
  BrandImage3,
  BrandImage4,
  BrandImage5,
  BrandImage6,
  BrandImage7,
  LocationIcon,
  ArtisticBG,
  GoIconGren,
  Hotel1,
  GoogleLocation,
  InfoIcon,
  arrowRm,
  HotelIcon,
  StarIcon,
  GPSIcon,
  DifIcon,
  AvlIcon,
  UserIcon,
  Artistic_Logo_One,
  BG_Lettering_black_two,
  BG_Lettering_grey,
  BG_Lettering_white,
  Artistic_Logo_two,
  AndroidIcon_A,
  iOSIcon_A,
  QRIcon_A,
  Artistic_BG_tranap_A,
  AndroidIcon_B,
  Heart,
  WarningIcon,
  DefaultUserLogo,
  CancelIcon,
  _defaultTourDir,
};

export { User }; ////test USER PIC
////DATA////DATA////DATA////DATA////DATA////DATA///
////DATA////DATA////DATA////DATA////DATA////DATA///
export { _menuFeatures, NAVS, noNAVS };
/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////
/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////EXPORTS/////
export { useLogger };
