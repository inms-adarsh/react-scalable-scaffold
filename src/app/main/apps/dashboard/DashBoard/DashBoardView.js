import React from 'react';
import Formsy from 'formsy-react';

import {Pane, Heading} from 'evergreen-ui';
import InputBox from '../../../components/forms/InputBox';

const DashBoardView = (props) => {
    let data = props.modelData;
    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600}>DashBoard</Heading>
            </Pane>
            <Formsy onValidSubmit={props.onSubmit}>
             {
                data.map(m => 
                    <InputBox name={m.name} label={m.label} required ={m.props.required} />
                ) 
             }

            </Formsy>
        </Pane>
       
    )

}

export default DashBoardView;