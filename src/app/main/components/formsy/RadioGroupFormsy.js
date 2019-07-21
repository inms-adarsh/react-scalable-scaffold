import React, {Component} from 'react';
import {FormControl, FormHelperText, FormLabel} from '@material-ui/core';
import { RadioGroup } from 'evergreen-ui';
import {withFormsy} from 'formsy-react';
import _ from '@lodash';

class RadioGroupFormsy extends Component {

    changeValue = (event, value) => {
        this.props.setValue(value);
        if ( this.props.onChange )
        {
            this.props.onChange(event);
        }
    };

    render()
    {
        const importedProps = _.pick(this.props, [
            'children',
            'name',
            'onBlur',
            'onChange',
            'onKeyDown',
            'variant'
        ]);

        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
        const value = this.props.getValue();

        return (
            <FormControl error={Boolean(errorMessage)} className={this.props.className}>
                <FormControl component="fieldset" required={this.props.required} error={Boolean(errorMessage)}>
                    <RadioGroup
                        {...importedProps}
                        value={value}
                        onChange={this.changeValue}
                        label={this.props.label}
                        options={this.props.options}
                    />
                    {Boolean(errorMessage) && (
                        <FormHelperText>{errorMessage}</FormHelperText>
                    )}
                </FormControl>
            </FormControl>
        );
    }
}

export default withFormsy(RadioGroupFormsy);
