import React from 'react';
import classnames from 'classnames';
import i18n from './i18n';

import RcDialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

import './style/index.scss';

const { PropTypes } = React;

export default class Dialog extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'eui-dialog',
    width: '520px',
    maskClosable: false,
    locale: 'zh-cn',
  };

  render() {
    const { props } = this;



    return (
      <RcDialog {...props} />
    );
  }
}

