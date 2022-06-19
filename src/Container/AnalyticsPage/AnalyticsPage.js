import React from "react";
import { Graph } from './Components/Graph'

const AnalyticsPage = () => {
    return (
        <div>
            <span>
                Analytics Page
            </span>
            <Graph />
        </div>
    );
};

export default React.memo(AnalyticsPage);