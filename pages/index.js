import SEO from '../components/Seo';
import Pod_Leader from '../components/Pod_Leader';
import Pod from '../components/Pod';
import Coding_Crow from '../components/Coding_Crow';

export default function Home() {
    return (
        <>
            <SEO />
            <Coding_Crow />
            <Pod_Leader />
            <Pod />
        </>
    );
}
