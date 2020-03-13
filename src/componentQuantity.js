import React from 'react';

export default class ComponentQuantity extends React.Component {

    render() {

        var element = <a>{this.props.quantity}</a>;

        return element;

    }
    
}