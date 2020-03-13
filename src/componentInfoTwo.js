import React from 'react';

import { billetes } from './billetes.json';
import ComponentListInfo from './componentListInfo.js';

export default class ComponentInfoTwo extends React.Component {

    render() {

        var bg = billetes.slice(4, 8);
        var billetesG = [];

        bg.forEach(unaResp => {billetesG.push(<ComponentListInfo dato={unaResp}/>)});

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
                    {billetesG}  
                </div>
            </div>  
        );

    }
    
}