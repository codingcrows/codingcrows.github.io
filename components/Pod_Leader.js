import styles from '../styles/Pod_leader.module.css';
import Card from './Card';

const Pod_Leader = () => {
    return (
        <div className={styles.pod_leader}>
            <h2>Meet our pod leader</h2>
            <Card url='/images/arsalan.jpg' name='Arslan Khattak' pod='' />
        </div>
    );
};

export default Pod_Leader;
