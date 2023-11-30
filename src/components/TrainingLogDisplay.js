import TrainingLogCard from './TrainingLogCard';
import TrainingLogHeader from './TrainingLogHeader';
import styles from '@/styles/TrainingLogDisplay.module.css';
import { useState, useEffect } from 'react';

export default function TrainingLogDisplay() {
    const [ allLogs, setAllLogs ] = useState([]);

    useEffect(() => {
        async function getLogs() {
            const response = await fetch("http://localhost:3000/api/admin/training");
            const data = await response.json();
            setAllLogs(data);
        }
        getLogs();
    }, [])

    const sortedAllLogs = [...allLogs].sort((a, b) => a.date.localeCompare(b.date));

    return (
        <div className={styles.allLogsContainer}>
            <TrainingLogHeader />
            <div className={styles.logContainer}>
                {allLogs?.map((data) => {
                    return (
                        <TrainingLogCard all={true} title={data.title} date={data.date} description={data.description} hours={data.hours} user={data.user} animal={data.animal}/>
                    )
                })}
            </div>
        </div> 
    )

}