import React from 'react';

import Layout from '../../components/_layout';

import { Login } from 'avengui';
import Source from '!raw!avengui/login';
import SourceExampleBase from '!raw!./ExampleBase';

/**
 * # Page
 */
class Page extends Layout {

  constructor(props) {
    super(props);
  }

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
        {this.renderDescriptionFromMarkdownDoc(Source)}

        {this.renderHodorContent(SourceExampleBase, (
          <Login
              title="Bag of Trycks"
              subtitle="manage all your tricks"
              otherLinks={_otherLinks}
              socialIcons={_socialIcons}
          />
        ))}

        {this.renderProps(Source)}
      </div>
    );
  }
}

export default Page;
