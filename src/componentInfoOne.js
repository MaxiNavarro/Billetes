import React from 'react';

import { billetes } from './billetes.json'
import ComponentListInfo from './componentListInfo.js';

export default class ComponentInfoOne extends React.Component {
    
    render() {

        var bc = billetes.slice(0, 4);
        var billetesC = [];

        bc.forEach(unaResp => {billetesC.push(<ComponentListInfo dato={unaResp}/>)});

        return (
            <div>
                <div>
                    <table className='table-titles'>
                        <tr>
                            <th className='title-quant'>CANTIDAD</th>
                            <th className='title-value'>VALOR</th>
                            <th className='title-pesos'>PESOS</th>
                        </tr>
                    </table>
                </div> 
                <div>
                    {billetesC}    
                </div>
            </div>
        );

    }
    
}