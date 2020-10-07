import { useState, useEffect } from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ url, name, pod }) => {
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
        </div>
    );
};

export default Card;
