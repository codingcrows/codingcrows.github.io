import SEO from '../components/Seo';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <SEO />
            <div className={styles.main}>
                <div className={styles.pod_img}>
                    <img src='/images/logo.png' alt='coding crow' />
                    <h1>Coding Crows</h1>
                </div>
            </div>
        </>
    );
}
