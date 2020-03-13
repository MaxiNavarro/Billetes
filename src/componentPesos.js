import React from 'react';

export default class ComponentPesos extends React.Component {

    render() {

        var element = <td className='table-pesos'>{this.props.pesos}</td>;

        return element;

    }
    
}
