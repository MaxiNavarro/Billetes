import React from 'react';

export default class ComponentPesos extends React.Component {

    render() {

        var element = <a>{this.props.pesos}</a>;

        return element;

    }
    
}