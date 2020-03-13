import React from 'react';

export default class ComponentImg extends React.Component {

    render() {

        var element = <img src={this.props.img}></img>;

        return element;

    }
    
}
