import React from 'react';
import {IconButton} from 'evergreen-ui';
import './inputComponents.scss';

const Edit = (props) => {
    return (
        <IconButton icon="plus" height={24} className="editBtn" onClick={props.editButtonInfo.editClickHandler}/>
    )
}

export default Edit;