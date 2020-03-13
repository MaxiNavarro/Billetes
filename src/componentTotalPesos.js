import React from 'react';

import { billetes } from './billetes.json';

export default class ComponentTotalCant extends React.Component {

    render() {

        var totalPesos = 0;
        var total;

        billetes.forEach(cant => {
            totalPesos+=(cant.cantidad*cant.valor);
            total = '$' + totalPesos;
            return total;
        })

        return (
            <div>
                <div>
                    <a>MONTO TOTAL</a>
                </div>
                <div className='totals'>
                    <a>{total}</a>
                </div>
            </div>
        );

    }
    
}