import React from 'react';
import {withFormsy} from 'formsy-react';
import {Textarea, Pane ,Label} from 'evergreen-ui';

const TextArea = (props) => {
    const textAreaHandler = (event) => {
        props.setValue(event.target.value)
    }
    return (
        <Pane>
            <Label
                htmlFor="textarea-2"
                marginBottom={4}
                display="block"
            >
                {props.label}
            </Label>
            <Textarea
                name="Textarea-1"
                width={200} //should be dynamic adjusted with props
                onChange={textAreaHandler}
                value={props.getValue() || ''}
            />
        </Pane>
    )
}

export default withFormsy(TextArea);