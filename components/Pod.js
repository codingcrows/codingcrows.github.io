import { useState } from 'react';
import data from '../data/podMembers';
import Card from './Card';
import styles from '../styles/Pod.module.css';

const Pod = () => {
    const [podMembers] = useState(data);

    return (
        <div className={styles.pod_details}>
            <h2>Meet the pod</h2>
            <div className={styles.pod_members}>
                {podMembers.map(member => (
                    <Card
                        url={member.url}
                        name={member.name}
                        pod={true}
                        key={Math.floor(Math.random() * 10000)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pod;
