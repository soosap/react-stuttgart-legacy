import React from 'react';
import CSSModules from 'react-css-modules';
import { compose } from 'recompose';

import styles from './Auth.scss';

const Auth = ({ children }) => (
  <div styleName="root" className="ui basic segment">
    {children}
  </div>
);

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Auth);
