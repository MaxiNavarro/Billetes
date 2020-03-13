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
                    <p className='title-total'>MONTO TOTAL</p>
                </div>
                <div className='totals'>
                    <p>{total}</p>
                </div>
            </div>
        );

    }
    
}
