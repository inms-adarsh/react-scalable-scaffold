import React from 'react';
import {TextInputField} from 'evergreen-ui';
import {withFormsy} from 'formsy-react';

const InputBox = (props) => {
   const changeValue = event => {
        props.setValue(event.currentTarget[props.type === 'checkbox' ? 'checked' : 'value']);
      }
   
    const errorMessage = props.getErrorMessage();
    return (
        <div className='required'>
        <TextInputField 
            label={props.label}
            // description="This is a description."
            // placeholder="Placeholder text"
            width={150} //should be dynamic and adjusted with props
            onChange={changeValue}
            required={props.required}
            value={props.getValue() || ''}
        />
         <span className='validation-error'>{errorMessage}</span>
    </div>
        
    )
    
}

export default withFormsy(InputBox);