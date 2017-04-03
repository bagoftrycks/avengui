import utils from '../src/alidation/utils';

test('utils.isEmpty should return true', () => {
  const _value = utils.isEmpty();

  expect(_value).toBe(true);
});

test('utils.isEmpty should return false', () => {
  const _value = utils.isEmpty([2, 3]);

  expect(_value).toBe(false);
});

test('utils.isEmpty should return false', () => {
  const _value = utils.isEmpty('hello');

  expect(_value).toBe(false);
});

test('utils.isEqual 2, 2 should return true', () => {
  const _value = utils.isEqual(2, 2);

  expect(_value).toBe(true);
});

test('utils.isEqual object against object should return true', () => {
  const _value = utils.isEqual({a: 2}, {a: 2});

  expect(_value).toBe(true);
});

test('utils.isEqual object against object deeply should return true', () => {
  const _obj1 = {
    test: {
      ok: 1,
    },
  };

  const _obj2 = {
    test: {
      ok: 1,
    },
  };

  const _value = utils.isEqual(_obj1, _obj2);

  expect(_value).toBe(true);
});

test('utils.isArray', () => {
  expect(utils.isArray([])).toBe(true);
});

test('utils.isFunction', () => {
  expect(utils.isFunction(() => {})).toBe(true);
});

test('utils.isNull', () => {
  expect(utils.isNull(null)).toBe(true);
});

test('utils.isString against a function', () => {
  expect(utils.isString(() => {})).toBe(false);
});

test('utils.isUndefined against a function', () => {
  expect(utils.isUndefined(() => {})).toBe(false);
});

test('utils.isUndefined', () => {
  expect(utils.isUndefined()).toBe(true);
});

test('utils.omit', () => {
  expect(utils.omit({
    test: 'ok',
    value: 'yes',
  }, 'test')).toEqual({
    value: 'yes',
  });
});
