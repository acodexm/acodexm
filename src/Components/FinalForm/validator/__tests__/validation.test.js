import {
  isRequired,
  maxLength,
  maxValue,
  minLength,
  minValue,
  mustBeEmail,
  mustBeNumber,
} from '../validator';

describe('check custom validators', () => {

  it('should validate isRequired', () => {
    expect(isRequired(false)()).toMatchSnapshot();
    expect(isRequired(false)('')).toMatchSnapshot();
    expect(isRequired(false)('test')).toMatchSnapshot();
    expect(isRequired(true)('test')).toMatchSnapshot();
    expect(isRequired()('test')).toMatchSnapshot();
    expect(isRequired()(true)).toMatchSnapshot();
    // incorrect
    expect(isRequired(true)()).toMatchSnapshot();
    expect(isRequired(true)('')).toMatchSnapshot();
    expect(isRequired()()).toMatchSnapshot();
    expect(isRequired()('')).toMatchSnapshot();
    expect(isRequired()(null)).toMatchSnapshot();
    expect(isRequired()(undefined)).toMatchSnapshot();
    expect(isRequired()(0)).toMatchSnapshot();
    expect(isRequired()(false)).toMatchSnapshot();
  });
  it('should validate mustBeNumber', () => {
    expect(mustBeNumber(1)).toMatchSnapshot();
    expect(mustBeNumber('NaN')).toMatchSnapshot();
  });
  it('should validate minValue', () => {
    expect(minValue(10)(10)).toMatchSnapshot();
    expect(minValue(10)(1)).toMatchSnapshot();
    expect(minValue(10)()).toMatchSnapshot();
  });
  it('should validate maxValue', () => {
    expect(maxValue(10)(10)).toMatchSnapshot();
    expect(maxValue(10)(100)).toMatchSnapshot();
    expect(maxValue(10)()).toMatchSnapshot();
  });
  it('should validate minLength', () => {
    expect(minLength(10)('ten chars!')).toMatchSnapshot();
    expect(minLength(10)('less 10')).toMatchSnapshot();
    expect(minLength(10)()).toMatchSnapshot();
  });
  it('should validate maxLength', () => {
    expect(maxLength(10)('ten chars!')).toMatchSnapshot();
    expect(maxLength(10)('over ten chars!')).toMatchSnapshot();
    expect(maxLength(10)()).toMatchSnapshot();
  });
  it('should validate mustBeEmail', () => {
    expect(mustBeEmail('a@a.a')).toMatchSnapshot();
    expect(mustBeEmail('aa.a')).toMatchSnapshot();
    expect(mustBeEmail()).toMatchSnapshot();
  });
});
