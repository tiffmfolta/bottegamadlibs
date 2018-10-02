import React from 'react';

const Input = (title) => {
    render() {
        return (
            <div className="input">
                <input> 
                <label>{title}</label>
            </div>
        )
    }
}

export default Input;