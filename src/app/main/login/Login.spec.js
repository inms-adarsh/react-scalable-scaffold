// dependencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

// components
import Login from './Login';

describe('<Login />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      submitLogin: () => {
      },
      login: {}
    };
    const mockLoginfn = jest.fn();
    wrapper = shallow(<Login submitLogin={mockLoginfn}/>);
  });

  it('should have a `<form>` element', () => {
      console.log(wrapper);
    expect(
      wrapper.find('.login').length
    ).toBe(1);
  });

  describe('<form />', () => {
    it('`<form>` element should have a onSubmit attribute', () => {
      expect(
        wrapper.props().onSubmit
      ).toBeDefined();
    });

    it('onSubmit attribute should be of type `function`', () => {
      expect(
        typeof wrapper.props().onSubmit === 'function'
      ).toBe(true);
    });

    it('`<form>` element should have an `<input />` element', () => {
      expect(
        wrapper.find('form').childAt(0).type()
      ).toBe('input');
    });

    describe('<input />', () => {

      it('`<input>` element should be of type `text`', () => {
        expect(
          wrapper.find('form').childAt(0).props().type
        ).toBe('text');
      });

      it('`<input>` element should have a placeholder attribute with value `Enter your username...`', () => {
        expect(
          wrapper.find('form').childAt(0).props().placeholder
        ).toBe('Enter your username...');
      });

      it('`<input>` element value should be empty', () => {
        expect(
          wrapper.find('form').childAt(0).props().value
        ).toBe('');
      });

      it('`<input>` element should have an onChange attribute', () => {
        expect(
          wrapper.find('form').childAt(0).props().onChange
        ).toBeDefined();
      });

      it('onChange attribute should be of type `function`', () => {
        expect(
          typeof wrapper.find('form').childAt(0).props().onChange === 'function'
        ).toBe(true);
      });

      it('should update the state when a value is input', () => {
        const apiKey = 'c2ca0198';
        const input = wrapper.find('form').childAt(0);
        input.simulate('change', {
          target: {
            name: 'apiKey',
            value: apiKey,
          }
        });
        expect(
          wrapper.state().fields.apiKey
        ).toBe(apiKey);
      });

      it('should display an error when no value is input', () => {
        const submitLogin = spy();
        wrapper = mount(<Login submitLogin={submitLogin} />);
        wrapper.find('form').simulate('submit');
        expect(
          wrapper.state().fieldErrors.apiKey
        ).toBe('Please enter your username.');
      });

    });

    it('`<form>` element should have an `<p>` element', () => {
      expect(
        wrapper.find('form').childAt(1).type()
      ).toBe('p');
    });

    describe('<p>', () => {
      it('`<p>` element should have a className', () => {
        expect(
          wrapper.find('p').hasClass('error')
        ).toBe(true);
      });

      it('`<p>` element should be null when passed validationError: false', () => {
        expect(
          wrapper.text()
        ).toBe('');
      });

      it('`<p>` element should be `Please enter your username.` when passed validationError: true', () => {
        const submitLogin = spy();
        wrapper = mount(<Login submitLogin={submitLogin} />);
        wrapper.find('form').simulate('submit');
        expect(
          wrapper.text()
        ).toBe('Please enter your username..');
      });    

    });

    it('`<form>` element should have an `<input type="submit" />` element', () => {
      expect(
        wrapper.find('form').childAt(2).type()
      ).toBe('input');
    });


  });

});