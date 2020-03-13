import React from 'react';

import { billetes } from './billetes.json';

export default class ComponentTotalQuant extends React.Component {

    render() {

        var totalCant = 0;

        billetes.forEach(cant => {
            totalCant+=cant.cantidad;
            return totalCant;
            //totalPesos+=cant.cantidad*cant.valor;
        })

        return (
            <div>
                <div>
                    <p className='title-total'>CANTIDAD TOTAL</p>
                </div>
                <div className='totals'>
                    <p>{totalCant}</p>
                </div>
            </div>
        );

    }
    
}
