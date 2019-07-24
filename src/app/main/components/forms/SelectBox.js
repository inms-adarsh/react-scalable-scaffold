import React from 'react';
import {withFormsy} from 'formsy-react';
import {Combobox, FormField} from 'evergreen-ui';
import './inputComponents.scss';

const SelectBox = (props) => {
    const selectBoxHandler = (selected) => {
         props.setValue(selected);
        console.log('m here', selected);
      }
    return (
        <div className="selecBoxStyle">
            <FormField label ={props.label}> 
                <Combobox
                    items={props.loadData}
                    onChange={selectBoxHandler}
                    placeholder={props.name}
                 />
            </FormField>
        </div>
       
    )
}

export default withFormsy(SelectBox);