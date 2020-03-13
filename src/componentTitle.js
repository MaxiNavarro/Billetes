import React from 'react';

export default class ComponentTitle extends React.Component {

    render() {

        const element = <a className='title'>{this.props.title}</a>;

        return element;

    }
    
}
