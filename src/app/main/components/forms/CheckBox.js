import React from 'react';
import {Checkbox} from 'evergreen-ui';
import {withFormsy} from 'formsy-react';

const CheckBox = (props) => {
    return (
        <div>
        {props.items.map((item) => 
            <Checkbox 
            label={item.label}
            checked={props.checked}
            // onChange={props.CheckBoxHandler}
            value={item.value}
        >{item.label}</Checkbox>
        )}
        
       </div>
    )
}

export default withFormsy(CheckBox);