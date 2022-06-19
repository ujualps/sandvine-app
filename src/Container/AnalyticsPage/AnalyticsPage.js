import { ForceGraph } from "../../graph/ForceGraph";
import miserables from '../../graph/miserables.json'
import React, { useEffect, useState } from "react";

const AnalyticsPage = () => {
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
        }))
    //     setCh(<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"              x="0px" y="0px"
    //         viewBox="0 0 330.242 330.242" style="enable-background:new 0 0 330.242 330.242;" >
    //         <path d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999
	// c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314
	// c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053
	// v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5
	// c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"
    //         />
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //     </svg>
// )
    }, [])

    console.log(ch)
    // const chart = ForceGraph(miserables, {
    //     nodeId: d => d.id,
    //     nodeGroup: d => d.group,
    //     nodeTitle: d => `${d.id}\n${d.group}`,
    //     linkStrokeWidth: l => Math.sqrt(l.value),
    //     width: 600,
    //     height: 600,
    //     // invalidation // a promise to stop the simulation when the cell is re-run
    // })

    // const home = <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    //     viewBox="0 0 330.242 330.242" style="enable-background:new 0 0 330.242 330.242;" xml:space="preserve">
    //     <path d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999
	// c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314
	// c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053
	// v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5
	// c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"
    //     />
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    //     <g>
    //     </g>
    // </svg> 

    
    console.log(ch)
    return (<div>
        <span>
            Analytics Page
        </span>
        <img src={ch}/>
        {/* {ForceGraph(miserables, {
            nodeId: d => d.id,
            nodeGroup: d => d.group,
            nodeTitle: d => `${d.id}\n${d.group}`,
            linkStrokeWidth: l => Math.sqrt(l.value),
            width: 600,
            height: 600,
            // invalidation // a promise to stop the simulation when the cell is re-run
        })} */}
    </div>)

};

export default React.memo(AnalyticsPage);