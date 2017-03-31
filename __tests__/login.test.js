import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderer from 'react-test-renderer';
import Login from '../src/login';

test('Login without any props setuped', () => {
  const component = renderer.create(
    <MuiThemeProvider>
      <Login />
    </MuiThemeProvider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
