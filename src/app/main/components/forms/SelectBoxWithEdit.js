import React from 'react';
import {SelectField, IconButton} from 'evergreen-ui';
import Edit from './EditButton';
import './inputComponents.scss';

const SelectBoxWithEdit = (props) => {
    return (
        <div className="selecBoxStyle">
            <SelectField
                // width= {props.data.width}
                width ={200}
                className="selectBoxField"
                label={props.data.label}
                value="Select Load"
                onChange={props.data.selectBoxHandler}
            >
                {props.data.loadData.map((val, key) => <option value={val}> {val}</option>)}
            </SelectField> 
            {props.data.isEditButtonRequired ? <Edit editButtonInfo={props.data.editButtonHandler} /> : null}
        </div>
    )
}

export default SelectBoxWithEdit;