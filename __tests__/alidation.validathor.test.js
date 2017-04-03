import Validathor from '../src/alidation/validathor';
import utils from '../src/alidation/utils';
import TYPES from '../src/alidation/types';

test('Validathor', () => {
  const toString = Object.prototype.toString;

  const _validathor = Validathor.required();

  expect(toString.call(_validathor) === '[object Object]').toBe(true);
  expect(_validathor._rules.length).toEqual(1);
  expect(_validathor._rules[0].type === TYPES.REQUIRED).toBe(true);

  expect(utils.isArray(_validathor.validate())).toBe(true);
  expect(_validathor.validate().length).toEqual(1);

  _validathor.email();

  expect(_validathor._rules.length).toEqual(2);
  expect(_validathor._rules[1].type === TYPES.REGEX).toBe(true);
  expect(_validathor.validate('sd').length).toEqual(1);
  expect(_validathor.validate('sovanna.hing@gmail.com').length).toEqual(0);

  _validathor.minLength(3);

  expect(_validathor._rules.length).toEqual(3);
  expect(_validathor._rules[2].type === TYPES.MIN_LENGTH).toBe(true);
  expect(_validathor.validate('sd').length).toEqual(2);
});
