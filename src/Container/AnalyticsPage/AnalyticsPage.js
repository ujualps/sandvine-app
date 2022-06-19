import React from "react";
import { Graph } from './Components/Graph'

const AnalyticsPage = () => {
    return (
        <div style={{padding: '1rem'}}>
            <span>
                Analytics Page
            </span>
            <Graph />
        </div>
    );
};

export default React.memo(AnalyticsPage);