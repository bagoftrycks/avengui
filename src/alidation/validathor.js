import utils from './utils';
import TYPES from './types';

/**
 * # Validathor
 */
class Validathor {

  _value = null;
  _rules = [];
  _messages = [];

  setMessages(value) {
    this._messages = value;
  }

  getMessages() {
    return this._messages;
  }

  regex(regex, message) {
    this._rules.push({
      type: TYPES.REGEX,
      message,
      terminator: function (regex, message, value) {
        if (!utils.isEmpty(value)) {
          if (!regex.test(value)) {
            this._messages.push(message || TYPES.REGEX);
          }
        }
      }.bind(this, regex, message),
    });

    return this;
  }

  required(message) {
    this._rules.push({
      type: TYPES.REQUIRED,
      message,
      terminator: function (message, value) {
        if (utils.isEmpty(value)) {
          this._messages.push(message || TYPES.REQUIRED);
        }
      }.bind(this, message),
    });

    return this;
  }

  email(message) {
    /* eslint-disable max-len */
    return this.regex(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message
    );
    /* eslint-enable */
  }

  minLength(length, message) {
    this._rules.push({
      type: TYPES.MIN_LENGTH,
      message,
      terminator: function (length, message, value) {
        if (!utils.isEmpty(value)) {
          const string = String(value);
          if (string.length < length) {
            this._messages.push(
              message || TYPES.MIN_LENGTH.replace('{0}', length)
            );
          }
        }
      }.bind(this, length, message),
    });

    return this;
  }

  validate(value) {
    this.setMessages([]);

    this._rules.forEach((rule) => {
      rule.terminator(value);
    });

    return this.getMessages();
  }
}

export default new Validathor();
