import React from 'react';

class Button extends React.Component {
    render() {
        const { buttonName } = this.props
        return (
            <button>{buttonName}Teste</button>
        );
    }
}

export default Button;