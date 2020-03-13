import React from 'react';

import ComponentTitle from './componentTitle';
import ComponentTotal from './componentTotal';
import ComponentInfoOne from './componentInfoOne';
import ComponentInfoTwo from './componentInfoTwo';
import ComponentButtons from './componentButtons';

export default class ComponentContainer extends React.Component {

    render() {

        return (
            <div>
                <div className='head'>
                    <br/>
                    <ComponentTitle title='Resumen del monto recibido'/>
                </div>
                <div className='info'>
                    <div>
                        <table>
                            <tr>
                                <th className='info-one'>
                                    <ComponentInfoOne/>
                                </th>
                                <th className='info-two'>
                                    <ComponentInfoTwo/>
                                </th>
                                <th className='info-total'>
                                    <ComponentTotal/>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <ComponentButtons/>
                    </div>
                </div>
            </div>
        );

    }
    
}
