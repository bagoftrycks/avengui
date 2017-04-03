import React from 'react';
import validAttr from './validAttr';

/**
 * # ValidatedAbstract
 *
 * This component should not be used alone.
 * You should create another component that extends this one
 * then surcharge `handleOnChange`.
 */
class ValidatedAbstract extends React.Component {

  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    /**
     * The value of the element (e.g TextField)
     */
    value: React.PropTypes.any,
  };
  /* eslint-enable */

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      error: null,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {}

  buildProps() {
    const _props = {};

    Object.keys(this.props)
      .filter((prop) => {
        return validAttr(prop);
      })
      .forEach((prop) => {
        _props[prop] = this.props[prop];
      });

    _props.value = this.state.value;
    _props.errorText = this.state.error;
    _props.onChange = this.handleOnChange;

    return _props;
  }
}

export default ValidatedAbstract;
