import SEO from '../components/Seo';
import Coding_Crow from '../components/Coding_Crow';
import Pod_Leader from '../components/Pod_Leader';
import Pod from '../components/Pod';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <SEO />
            <Coding_Crow />
            <Pod_Leader />
            <Pod />
            <Footer />
        </>
    );
}
