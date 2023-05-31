import ShoppingBasket from './general/ShoppingBasket';
import FruitBowl from './general/FruitBowl';
import Leaf from './general/Leaf';
import Newspaper from './general/Newspaper';
import Snowflake from './general/Snowflake';
import Share from './general/Share';
import Clock from './general/Clock';
import Mail from './general/Mail';
import Position from './general/Position';
import Phone from './general/Phone';
import Map from './general/Map';
import CheckCircle from './general/CheckCircle';
import Medal from './general/Medal';
import Percent from './general/Percent';
import Search from './general/Search';
import Filter from './general/Filter';
import Calendar from './general/Calendar';
import Truck from './general/Truck';
import DotSquare from './general/DotSquare';
import Trophy from './general/Trophy';
import CreditCard from './general/CreditCard';
import Mastercard from './general/Mastercard';
import CB from './general/CB';
import Visa from './general/Visa';
import InfoCircle from './general/InfoCircle';

import ArrowLeft from './navigation/ArrowLeft';
import ArrowRight from './navigation/ArrowRight';
import ArrowUp from './navigation/ArrowUp';
import ArrowDown from './navigation/ArrowDown';
import DoubleArrowLeft from './navigation/DoubleArrowLeft';
import DoubleArrowRight from './navigation/DoubleArrowRight';
import DoubleArrowUp from './navigation/DoubleArrowUp';
import DoubleArrowDown from './navigation/DoubleArrowDown';
import CaretUp from './navigation/CaretUp';
import CaretDown from './navigation/CaretDown';
import CaretLeft from './navigation/CaretLeft';
import CaretRight from './navigation/CaretRight';
import Cross from './navigation/Cross';
import CrossCircle from './navigation/CrossCircle';
import External from './navigation/External';
import ArrowCircular from './navigation/ArrowCircular';

import Facebook from './networks/Facebook';
import FacebookCircle from './networks/FacebookCircle';
import FacebookSquare from './networks/FacebookSquare';
import FacebookOutline from './networks/FacebookOutline';
import Snapchat from './networks/Snapchat';
import SnapchatSquare from './networks/SnapchatSquare';
import SnapchatCircle from './networks/SnapchatCircle';
import SnapchatOutline from './networks/SnapchatOutline';
import Pinterest from './networks/Pinterest';
import PinterestCircle from './networks/PinterestCircle';
import PinterestSquare from './networks/PinterestSquare';
import PinterestOutline from './networks/PinterestOutline';
import Instagram from './networks/Instagram';
import InstagramFill from './networks/InstagramFill';
import InstagramSquare from './networks/InstagramSquare';
import Youtube from './networks/Youtube';
import YoutubeOutline from './networks/YoutubeOutline';
import YoutubeSquare from './networks/YoutubeSquare';
import YoutubeTextLogo from './networks/YoutubeTextLogo';
import Twitter from './networks/Twitter';
import TwitterSquare from './networks/TwitterSquare';
import TwitterCircle from './networks/TwitterCircle';
import TwitterOutline from './networks/TwitterOutline';
import Twitch from './networks/Twitch';
import TwitchOutline from './networks/TwitchOutline';
import Linkedin from './networks/Linkedin';
import LinkedinOutline from './networks/LinkedinOutline';
import LinkedinSquare from './networks/LinkedinSquare';
import LinkedinSquareOutline from './networks/LinkedinSquareOutline';
import Whatsapp from './networks/Whatsapp';
import WhatsappSquare from './networks/WhatsappSquare';
import WhatsappOutline from './networks/WhatsappOutline';

const Icon = (props) => {
    switch (props.name) {
        case 'ShoppingBasket':
            return <ShoppingBasket {...props} />;
        case 'FruitBowl':
            return <FruitBowl {...props} />;
        case 'Leaf':
            return <Leaf {...props} />;
        case 'Newspaper':
            return <Newspaper {...props} />;
        case 'Snowflake':
            return <Snowflake {...props} />;
        case 'ArrowLeft':
            return <ArrowLeft {...props} />;
        case 'ArrowRight':
            return <ArrowRight {...props} />;
        case 'ArrowUp':
            return <ArrowUp {...props} />;
        case 'ArrowDown':
            return <ArrowDown {...props} />;
        case 'DoubleArrowLeft':
            return <DoubleArrowLeft {...props} />;
        case 'DoubleArrowRight':
            return <DoubleArrowRight {...props} />;
        case 'DoubleArrowUp':
            return <DoubleArrowUp {...props} />;
        case 'DoubleArrowDown':
            return <DoubleArrowDown {...props} />;
        case 'CaretUp':
            return <CaretUp {...props} />;
        case 'CaretDown':
            return <CaretDown {...props} />;
        case 'CaretLeft':
            return <CaretLeft {...props} />;
        case 'CaretRight':
            return <CaretRight {...props} />;
        case 'Cross':
            return <Cross {...props} />;
        case 'CrossCircle':
            return <CrossCircle {...props} />;
        case 'ArrowCircular':
            return <ArrowCircular {...props} />;
        case 'External':
            return <External {...props} />;

        case 'Facebook':
            return <Facebook {...props} />;
        case 'FacebookSquare':
            return <FacebookSquare {...props} />;
        case 'FacebookCircle':
            return <FacebookCircle {...props} />;
        case 'FacebookOutline':
            return <FacebookOutline {...props} />;
        case 'Instagram':
            return <Instagram {...props} />;
        case 'InstagramFill':
            return <InstagramFill {...props} />;
        case 'InstagramSquare':
            return <InstagramSquare {...props} />;
        case 'Snapchat':
            return <Snapchat {...props} />;
        case 'SnapchatSquare':
            return <SnapchatSquare {...props} />;
        case 'SnapchatCircle':
            return <SnapchatCircle {...props} />;
        case 'SnapchatOutline':
            return <SnapchatOutline {...props} />;
        case 'Pinterest':
            return <Pinterest {...props} />;
        case 'PinterestCircle':
            return <PinterestCircle {...props} />;
        case 'PinterestSquare':
            return <PinterestSquare {...props} />;
        case 'PinterestOutline':
            return <PinterestOutline {...props} />;
        case 'Youtube':
            return <Youtube {...props} />;
        case 'YoutubeOutline':
            return <YoutubeOutline {...props} />;
        case 'YoutubeSquare':
            return <YoutubeSquare {...props} />;
        case 'YoutubeTextLogo':
            return <YoutubeTextLogo {...props} />;
        case 'Twitter':
            return <Twitter {...props} />;
        case 'TwitterSquare':
            return <TwitterSquare {...props} />;
        case 'TwitterOutline':
            return <TwitterOutline {...props} />;
        case 'TwitterCircle':
            return <TwitterCircle {...props} />;
        case 'Twitch':
            return <Twitch {...props} />;
        case 'TwitchOutline':
            return <TwitchOutline {...props} />;
        case 'Linkedin':
            return <Linkedin {...props} />;
        case 'LinkedinOutline':
            return <LinkedinOutline {...props} />;
        case 'LinkedinSquare':
            return <LinkedinSquare {...props} />;
        case 'LinkedinSquareOutline':
            return <LinkedinSquareOutline {...props} />;
        case 'Whatsapp':
            return <Whatsapp {...props} />;
        case 'WhatsappSquare':
            return <WhatsappSquare {...props} />;
        case 'WhatsappOutline':
            return <WhatsappOutline {...props} />;

        case 'Share':
            return <Share {...props} />;
        case 'Mail':
            return <Mail {...props} />;
        case 'Clock':
            return <Clock {...props} />;
        case 'Position':
            return <Position {...props} />;
        case 'Map':
            return <Map {...props} />;
        case 'Phone':
            return <Phone {...props} />;
        case 'CheckCircle':
            return <CheckCircle {...props} />;
        case 'Medal':
            return <Medal {...props} />;
        case 'Percent':
            return <Percent {...props} />;
        case 'Search':
            return <Search {...props} />;
        case 'Filter':
            return <Filter {...props} />;
        case 'Calendar':
            return <Calendar {...props} />;
        case 'Truck':
            return <Truck {...props} />;
        case 'Trophy':
            return <Trophy {...props} />;
        case 'CreditCard':
            return <CreditCard {...props} />;
        case 'Mastercard':
            return <Mastercard {...props} />;
        case 'CB':
            return <CB {...props} />;
        case 'Visa':
            return <Visa {...props} />;
        case 'InfoCircle':
            return <InfoCircle {...props} />;
        case 'DotSquare':
            return <DotSquare {...props} />;

        default:
            return <ShoppingBasket {...props} />;
    }
};

export default Icon;