import React from 'react';

export default class ComponentTitle extends React.Component {

    render() {

        const element = <p className='title'>{this.props.title}</p>;

        return element;

    }
    
}
