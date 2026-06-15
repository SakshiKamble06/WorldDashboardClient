import React, { useEffect, useState } from 'react';
import { getAveragePopulation } from '../api/api';

const Averagepopulation = () => {
    const [AveragePop, setAvePop] = useState(0);

    async function fetchData() {
        const res = await getAveragePopulation();

        setAvePop(
            Number(res.averagePopulation[0].average_population)
        );
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="dashboard-card averagePop-card">
            <h3 className="card-title">
                Average Population
            </h3>

            <h1 className="card-value">
                {AveragePop.toLocaleString()}
            </h1>

            <p className="card-desc">
                Average Population
            </p>
        </div>
    );
};

export default Averagepopulation;