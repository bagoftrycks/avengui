import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
} from 'material-ui/Card';

import {
  redA700,
} from 'material-ui/styles/colors';

import styled from 'styled-components';

import {
  ERROR_FIELD_REQUIRED,
  ERROR_FIELD_EMAIL_INVALID,
  REGEX_EMAIL,
} from './config';


const StyledFloatingActionButton = styled(FloatingActionButton)`
  margin: 10px 5px;
`;

const StyledCardActions = styled(CardActions)`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledCard = styled(Card)`
  max-width: 350px;
  margin: 10px auto;
  text-align: center;
`;


/**
 * # Login
 *
 * Component that displays `<Login />`.
 * Its a default box containing:
 * - `email` and `password` input,
 * - `log in` button,
 * - links to register and to retrieve password,
 * - socials links
 *
 * Almost everything is configurable.
 */
class Login extends React.Component {

  static propTypes = {
    /**
     * Style the root element.
     */
    style: React.PropTypes.object,

    /**
     * Title to display.
     */
    title: React.PropTypes.string,

    /**
     * Subtitle to display.
     */
    subtitle: React.PropTypes.string,

    /**
     * String url of the avatar to display.
     */
    avatar: React.PropTypes.string,

    /**
     * Array of links (e.g register new account, forgot password).
     */
    otherLinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      content: React.PropTypes.string,
      href: React.PropTypes.string,
    })),

    /**
     * Array of socials icons to display.
     */
    socialIcons: React.PropTypes.arrayOf(React.PropTypes.shape({
      iconClassName: React.PropTypes.string,
      href: React.PropTypes.string,
    })),

    /**
     * Set to true to displays a circular progress.
     */
    isFetching: React.PropTypes.bool,

    /**
     * String to display error message.
     */
    error: React.PropTypes.string,

    /**
     * Callback when click on `LOG IN` button.
     * ```
     * Signature:
     * (event: Object, data: Object (email, password)) => void
     * ```
     */
    onSubmit: React.PropTypes.func,
  };

  static get defaultProps() {
    return {
      isFetching: false,
      socialIcons: [],
      otherLinks: [],
    };
  }

  constructor(props) {
    super(props);

    // Internal component state
    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
    };

    this.isValidField = this.isValidField.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isValidField(nameValue, nameErrorText, value, validator) {
    let _o = {};

    _o[nameValue] = value;

    if (!value || value === '') {
      _o[nameErrorText] = ERROR_FIELD_REQUIRED;
    } else {
      if (validator) {
        if (!validator.reg.test(value)) {
          _o[nameErrorText] = validator.message;
        } else {
          _o[nameErrorText] = false;
        }
      } else {
        _o[nameErrorText] = false;
      }
    }

    this.setState(_o);

    return !_o[nameErrorText];
  }

  handleEmailChange(e) {
    this.isValidField('email', 'emailError', e.target.value, {
      reg: REGEX_EMAIL,
      message: ERROR_FIELD_EMAIL_INVALID,
    });
  }

  handlePasswordChange(e) {
    this.isValidField('password', 'passwordError', e.target.value);
  }

  handleSubmit(e) {
    this.isValidField('password', 'passwordError', this.state.password);
    this.isValidField('email', 'emailError', this.state.email, {
      reg: REGEX_EMAIL,
      message: ERROR_FIELD_EMAIL_INVALID,
    });

    if (!this.state.emailError && !this.state.passwordError &&
        this.state.email && this.state.password) {
      if (!this.props.onSubmit) {
        return;
      }

      this.props.onSubmit(e, {
        email: this.state.email,
        password: this.state.password,
      });
    }
  }

  render() {
    const {
      style,
      title,
      subtitle,
      avatar,
      otherLinks,
      socialIcons,
    } = this.props;

    const {
      email,
      emailError,
      password,
      passwordError,
    } = this.state;

    return (
      <StyledCard style={{...style}}>
        <CardHeader
            title={title}
            subtitle={`${subtitle ? (`Log in to ${subtitle}`) : ''}`}
            avatar={avatar}
            style={{ textAlign: 'left' }}
        />

        <CardText>
          <form onSubmit={this.handleSubmit}>
            <TextField
                id="email"
                autoFocus
                errorText={emailError}
                errorStyle={{ textAlign: 'left' }}
                fullWidth
                hintText="Email address"
                onChange={this.handleEmailChange}
                value={email}
            />
            <br />
            <TextField
                id="password"
                errorText={passwordError}
                errorStyle={{ textAlign: 'left' }}
                fullWidth
                hintText="Password"
                onChange={this.handlePasswordChange}
                type="password"
                value={password}
            />
          </form>
        </CardText>

        <StyledCardActions>
          <RaisedButton
              primary
              fullWidth
              label="Log In"
              onTouchTap={this.handleSubmit}
          />

          {this.props.error ? (
            <p style={{ color: redA700 }}>{this.props.error}</p>
          ) : null}

          {this.props.isFetching ? (
            <CircularProgress size={0.5} />
          ) : null}

          {otherLinks.length ? (
            <div>
              {otherLinks.map((link, i) => {
                return (
                  <p key={i}>
                    <a href={link.href}>
                      {link.content}
                    </a>
                  </p>
                );
              })}
            </div>
          ) : null}

          <Divider />

          {socialIcons.length ? (
            <div>
              <p>{'Or log in with'}</p>
              <div>
                {socialIcons.map((socialIcon, i) => {
                  return (
                    <StyledFloatingActionButton
                        href={socialIcon.href}
                        iconClassName={socialIcon.iconClassName}
                        key={i}
                        mini
                        secondary
                    />
                  );
                })}
              </div>
            </div>
          ) : null}
        </StyledCardActions>
      </StyledCard>
    );
  }
}

export default Login;
