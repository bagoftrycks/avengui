import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import Alidation from '../src/alidation';
import AlidationValidation from '../src/alidation/validathor';

test('Validation over a TextField without validathor', () => {
  const ValidatedTextField = Alidation(TextField)();

  const rendered = (
    <MuiThemeProvider>
      <ValidatedTextField id="testText" />
    </MuiThemeProvider>
  );

  const component = renderer.create(rendered);
  const shallowComponent = shallow(rendered);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(shallowComponent.find(ValidatedTextField)).not.toBeNull();
});

test('Validation over a TextField with validathor', () => {
  const ValidatedTextField = Alidation(TextField)(
    AlidationValidation.required()
  );

  const rendered = (
    <MuiThemeProvider>
      <ValidatedTextField id="testText" />
    </MuiThemeProvider>
  );

  const component = renderer.create(rendered);
  const shallowComponent = shallow(rendered);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(shallowComponent.find(ValidatedTextField)).not.toBeNull();
});

test('Alidation function', () => {
  const toString = Object.prototype.toString;
  const createAlidationComponent = Alidation(TextField);

  expect(
    toString.call(createAlidationComponent) === '[object Function]'
  ).toBeTruthy();
});

test('Alidation create component', () => {
  const toString = Object.prototype.toString;
  const ValidatedTextField = Alidation(TextField)();

  expect(
    toString.call(ValidatedTextField) === '[object Function]'
  ).toBeTruthy();
});

test('Alidation function throw error', () => {
  expect(Alidation).toThrow('component should be passed as func argument');
});
