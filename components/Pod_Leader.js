import styles from '../styles/Pod_leader.module.css';
import Card from './Card';

const Pod_Leader = () => {
    return (
        <div className={styles.pod_leader}>
            <h2>Meet our pod leader</h2>
            <div className={styles.leader_description}>
                <Card url='/images/arsalan.jpg' name='Arslan Khattak' pod='' />
                <p>
                    I'm a Computer Science Junior and a Full Stack (MERN) Developer and open source
                    contributor. Being MLH'20 Fellow, I'm active Next.Js Contributor. Writing down
                    what I have learned and sharing it with others is what I love to do. I love to
                    write and speak about new technologies. I am also an active member of technical
                    communities. I am DSC LEAD and Microsoft Student Partner.
                </p>
            </div>
        </div>
    );
};

export default Pod_Leader;
