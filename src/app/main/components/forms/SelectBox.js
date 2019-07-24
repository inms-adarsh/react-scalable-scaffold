import React from 'react';
import {withFormsy} from 'formsy-react';
import {Combobox} from 'evergreen-ui';
import './inputComponents.scss';

const SelectBox = (props) => {
    const selectBoxHandler = (selected) => {
         props.setValue(selected);
        console.log('m here', selected);
      }
    return (
        <div className="selecBoxStyle">
            <Combobox
                items={props.loadData}
                onChange={selectBoxHandler}
                placeholder={props.name}

            />
        </div>
       
    )
}

export default withFormsy(SelectBox);