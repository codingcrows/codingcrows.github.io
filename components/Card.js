import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css';

const Card = ({ url, name, pod, github, linkedin, bio, project, openPopupboxForPod }) => {
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
                {pod === true && project === false ? (
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
            {(pod === true && project === false && (
                <div className={styles.read_more_btn}>
                    <button onClick={() => openPopupboxForPod(bio)}>Read More</button>
                </div>
            )) ||
                (pod === true && project === true && (
                    <div className={styles.read_more_btn}>
                        <Link href={github} passHref={true}>
                            <a>
                                <button>Read More</button>
                            </a>
                        </Link>
                    </div>
                )) ||
                (pod === false && project === false && (
                    <div className={styles.read_more_btn}>
                        <Link href='https://www.khattak.dev/' passHref={true}>
                            <a>
                                <button>Read More</button>
                            </a>
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default Card;
