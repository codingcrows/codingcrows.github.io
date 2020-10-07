import { useState } from 'react';
import Card from './Card';
import styles from '../styles/Pod.module.css';

const Pod = () => {
    const [podMembers] = useState([
        { name: 'Angelina Gasharova', url: '/images/Angelina_Gasharova.jpg' },
        { name: 'Saad Irfan', url: '/images/saad.jpg' },
        { name: 'Aneesh Kodali', url: '/images/Aneesh_Kodali.jpeg' },
        { name: 'Nkosilathi_Tauro', url: '/images/Nkosilathi_Tauro.png' },
    ]);

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
