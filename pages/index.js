import SEO from '../components/Seo';
import Coding_Crow from '../components/Coding_Crow';
import Pod_Leader from '../components/Pod_Leader';
import Pod from '../components/Pod';
import Footer from '../components/Footer';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

// popup Box Body
const openPopupboxForPod = bio => {
    const content = (
        <div className='popup' align='center'>
            <h3 className='popup-title'>Who am i? </h3>
            <p>{bio}</p>
        </div>
    );
    PopupboxManager.open({ content });
};

// popup box configs
const popupboxConfig = {
    fadeIn: true,
    fadeInSpeed: 400,
    overlayOpacity: 0.5,
};

export default function Home() {
    return (
        <>
            <SEO />
            <Coding_Crow />
            <Pod_Leader />
            <Pod openPopupboxForPod={openPopupboxForPod} />
            <Footer />
            <PopupboxContainer {...popupboxConfig} />
        </>
    );
}
