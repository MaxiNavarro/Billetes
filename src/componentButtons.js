import React from 'react';

export default class ComponentButtons extends React.Component {

    render() {

        return (
            <div className='containerButton'>
                <input type='submit' className='btn-l' value='Agregar m&aacute;s billetes'/>
                <input type='submit' className='btn-r' value='Aceptar'/>   
            </div>
        );

    }
    
}