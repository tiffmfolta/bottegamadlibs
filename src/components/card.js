import React, { Component } from 'react';

import Input from './input';

class Card extends Components {
    
    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: ''
        }
    }
    
    handleInputChange() {
        this.setState({ color: 'red' })
    }
    
    render() {

        return (
            <div className="card">
                <h1>{this.state.color}p</h1>
                <Input/>
            </div>
        )

        return (
            <div className="card">
            <h1>{this.state.color}</h1>
            { Input('Color') }
            { Input('Plural Noun') }
            </div>
        )
    }
}

export default Card;