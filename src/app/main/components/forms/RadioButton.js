import React from 'react';
import {RadioGroup} from 'evergreen-ui';
import {withFormsy} from 'formsy-react';

const RadioButton = (props) => {
    const options= [
        { label: 'Read-only', value: 'read-only' },
        { label: 'Write', value: 'write' },
        { label: 'Restricted', value: 'restricted' }
      ]
     const radioButtonHandler = (e) => {
          console.log('rad val', e);
          props.setValue(e)
      }
    return(
        <RadioGroup 
            value={options.value}
            options={options}
            onChange={radioButtonHandler}
        />
    )
}

export default withFormsy(RadioButton);
