import React from 'react';

import ComponentQuantity from './componentQuantity.js'
import ComponentImg from './componentImg.js'
import ComponentPesos from './componentPesos.js'

export default class ComponentListInfo extends React.Component {

    render() {
        
        return (
            <div>
                <table className='table-data'>
                    <tr>
                        <td className='table-cant'>
                            <ComponentQuantity quantity={this.props.dato.cantidad}/>
                        </td>
                        <td className='table-img'>
                            <ComponentImg img={this.props.dato.imagen}/>
                        </td>
                        <td className='table-pesos'>
                            <ComponentPesos pesos={this.props.dato.pesos}/>
                        </td>
                    </tr>
                </table>
            </div>
        );

    }

}