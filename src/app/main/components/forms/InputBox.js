import React from 'react';
import {TextInputField} from 'evergreen-ui';

const Input = (props) => {
    return (
        <TextInputField 
            label="Default text input field"
            description="This is a description."
            placeholder="Placeholder text"
        />
    )
    
}

export default Input;