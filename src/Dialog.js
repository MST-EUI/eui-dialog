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

  handleOk() {
    this.props.onOk();
  }

  handleCancel() {
    this.props.onCancel();
  }

  render() {
    const { props } = this;

    const { footer, visible } = props;  

    const defaultFooter = [
      <button className='btn btn-cancel' onClick={() => this.handleCancel()}>
        取消
      </button>,
      <button className='btn btn-ok' onClick={() => this.handleOk()}>
        确定
      </button>
    ];

    return (
      <RcDialog
        footer={props.footer || defaultFooter}
        visible={visible}
        ref={c => this.rcDialog = c}
        {...props}
      />
    );
  }
}

