import { createElement } from 'react';
import ValidatedAbstract from './abstract';

/**
 * Build a wrapper to component.
 * Component should be a `material-ui` type form.
 * Inteed, the purpose of this is to validate field (e.g TextInput)
 * against some rules.
 *
 * @param  {React.Component} component The component to wrapp (e.g TextInput)
 * @return {React.Component}           Wrapped component.
 */
const Alidation = (component) => {
  /**
   * Create the validated component with its validathor.
   *
   * @param  {Object}           validathor The validathor used
   * @return {React.Component}             The newly component wrapped
   */
  const _createValidatedComponent = (validathor) => {
    /**
     * # ValidatedComponent
     */
    class ValidatedComponent extends ValidatedAbstract {

      handleOnChange(e) {
        if (!validathor) {
          return;
        }

        const _errors = validathor.validate(e.target.value);

        this.setState({
          error: _errors.length ? _errors : null,
        });
      }

      render() {
        return createElement(component, this.buildProps());
      }
    }

    return ValidatedComponent;
  };

  if (!component) {
    throw new Error('component should be passed as func argument');
  }

  return _createValidatedComponent;
};

export default Alidation;
