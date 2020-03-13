import React from 'react';

export default class ComponentQuantity extends React.Component {

    render() {

        var element = <td className='table-cant'>{this.props.quantity}</td>;

        return element;

    }
    
}
