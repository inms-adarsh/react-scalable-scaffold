import React from 'react';
import {SelectField, IconButton} from 'evergreen-ui';
import './inputComponents.scss';

const SelectBoxWithEdit = (props) => {
    return (
        <div className="selecBoxStyle">
            <SelectField
                width={200}
                className="selectBoxField"
                label={props.data.label}
                value="Select Load"
                onChange={props.data.selectBoxHandler}
            >
                {props.data.loadData.map((val, key) => <option value={val}> {val}</option>)}
            </SelectField> 
            <IconButton icon="plus" height={24} className="editBtn" onClick={() => console.log('yj clicked')} />
        </div>
    )
}

export default SelectBoxWithEdit;