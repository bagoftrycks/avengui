import React from 'react';

import {
  Login,
} from 'avengui';

/**
 * # ExampleBase
 */
class ExampleBase extends React.Component {

  render() {
    const _socialIcons = [{
      iconClassName: 'fa fa-facebook',
      href: '',
    }, {
      iconClassName: 'fa fa-twitter',
      href: '',
    }, {
      iconClassName: 'fa fa-instagram',
      href: '',
    }];

    const _otherLinks = [{
      content: 'Don\t have an account? Create one',
      href: '',
    }, {
      content: 'Forgot password?',
      href: '',
    }];

    return (
      <div>
        <Login
            title="Bag of Trycks"
            subtitle="manage all your tricks"
            otherLinks={_otherLinks}
            socialIcons={_socialIcons}
        />
      </div>
    );
  }
}

export default ExampleBase;
