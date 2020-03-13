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
                        <ComponentQuantity quantity={this.props.dato.cantidad}/>
                        <ComponentImg img={this.props.dato.imagen}/>
                        <ComponentPesos pesos={this.props.dato.pesos}/>
                    </tr>
                </table>
            </div>
        );

    }

}
