import { ForceGraph } from "graph/ForceGraph";
import miserables from 'graph/miserables.json'
import React, { useState, useEffect } from "react";

export const Graph = () => {
    const [ch, setCh] = useState(null);
    useEffect(() => {
        setCh(ForceGraph(miserables, {
            nodeId: d => d.id,
            nodeGroup: d => d.group,
            nodeTitle: d => `${d.id}\n${d.group}`,
            linkStrokeWidth: l => Math.sqrt(l.value),
            width: 600,
            height: 600,
            // invalidation // a promise to stop the simulation when the cell is re-run
        }));
    }, []);

    console.log(ch);

    return null;
}
