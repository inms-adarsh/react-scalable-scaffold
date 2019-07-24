import Formsy from 'formsy-react';
import React from 'react';
import InputBox from './InputBox';
import SelectBox from './SelectBox';
import CheckBox from './CheckBox';
import TextArea from './TextArea';
import { ENTER_ADD_CHECK, INDIA, STATE } from '../../constants/Constants';
import { Pane, Heading } from 'evergreen-ui';
import './inputComponents.scss';

export default class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    console.log('submit sucessful', model)
  }

  render() {
    return (
      <Pane
        height="100%"
        width="80%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        padding={20}
        margin={50}
      >

        <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="customerRegistration">
          <Pane padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Heading size={400}>Customer Registration</Heading>
            </Pane>

          </Pane>
          <div className="twoColumn">
            <div className="column">
              <span> Fields marked '*' are mandatory</span>

              <InputBox name="companyName" label="Company Name" required />
              <InputBox name="accountNumber" label="Account Number" validations="isNumeric" validationError="Please enter numbers only" />
              <InputBox name="contactFirstName" label="Contact First Name" required />
            </div>
            <div className="column">
              <InputBox name="contactLastName" label="Contact Last Name" required />
              <InputBox name="email" validations="isEmail" label="Email" validationError="This is not a valid email" />
              <InputBox name="phone" label="Phone" required />
            </div>
            <div className="column">
              <SelectBox name="country" loadData={INDIA} label='Country' width={100} selected={true} />
            </div>
            <div className="column">
              <CheckBox name="Enter Address manually" items={ENTER_ADD_CHECK} checked={false} />
            </div>
            <br /> <br />
            <div className="column">
              <InputBox name="address1" label="Address 1" required />
              <TextArea name="addressInDetail" label="Address 2" />
              <SelectBox name="states" label="States" loadData={STATE} width={200} />
            </div>

            <div className="column">
              <InputBox name="city1" label="City1" required />
              <InputBox name="email" label="Account Payable Email" required />
              <InputBox name="zip" label="Zip Code" required />
            </div>
            <br />
            <CheckBox name="saveAsLoc" items={ENTER_ADD_CHECK} checked={true} />

          </div>
          <button type="submit" disabled={!this.state.canSubmit}>
            Save
        </button>
        </Formsy>
      </Pane>

    );
  }
}