import { useState } from 'react';
import Card from './Card';
import data from '../data/projects';
import styles from '../styles/Project.module.css';

const Projects = ({ openPopupboxForPod }) => {
    const [projects] = useState(data);
    return (
        <>
            <div className={styles.main_projects}>
                <div className={styles.heading}>
                    <h2>Take A Look At Our Projects</h2>
                </div>
            </div>
            <div className={styles.projects}>
                {projects.map(project => (
                    <Card
                        url={project.url}
                        name={project.name}
                        bio={project.info}
                        github={project.github}
                        pod={true}
                        project={true}
                        key={Math.floor(Math.random() * 10000)}
                        openPopupboxForPod={openPopupboxForPod}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects;
