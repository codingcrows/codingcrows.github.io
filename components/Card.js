import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css';

const Card = ({ url, name, pod, github, linkedin, bio, openPopupboxForPod }) => {
    const [podClass, setPodClass] = useState(styles.card);
    useEffect(() => {
        if (pod === true) {
            setPodClass(styles.pod);
        }
    }, []);

    return (
        <div className={podClass}>
            <img src={url} alt={name} />
            <h3>{name}</h3>
            <div className={styles.social}>
                {pod === true ? (
                    <>
                        <Link href={github} passHref={true}>
                            <a>
                                <img src='./icons/github_logo.png' alt='github' />
                            </a>
                        </Link>
                        <Link href={linkedin} passHref={true}>
                            <a>
                                <img src='./icons/linkedin_logo.png' alt='github' />
                            </a>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href='https://github.com/khattakdev' passHref={true}>
                            <a>
                                <img src='./icons/github_logo_white.png' alt='github' />
                            </a>
                        </Link>
                        <Link href='https://linkedin.com/in/khattakdev' passHref={true}>
                            <a>
                                <img src='./icons/linkedin_logo_white.png' alt='github' />
                            </a>
                        </Link>
                    </>
                )}
            </div>
            <div className={styles.read_more_btn}>
                {/* <Link href={more} passHref={true}> */}
                {/* <a> */}
                <button onClick={() => openPopupboxForPod(bio)}>Read More</button>
                {/* </a> */}
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Card;
