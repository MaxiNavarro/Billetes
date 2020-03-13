import React from 'react';

import ComponentTotalQuant from './componentTotalQuant';
import ComponentTotalPesos from './componentTotalPesos';

export default class ComponentTotal extends React.Component {

    render() {

        return (
            <div className='container-totals'>
                <table>
                    <tr>
                        <th>
                            <ComponentTotalQuant/>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <ComponentTotalPesos/>
                        </td>
                    </tr>
                </table>                  
            </div>
        );

    }
    
}
