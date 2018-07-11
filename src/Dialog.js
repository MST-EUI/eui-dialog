import React from 'react';
import classnames from 'classnames';
import i18n from './i18n';

import RcDialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

import './style/index.scss';

const { PropTypes } = React;

const isIE = window.navigator.userAgent.indexOf('MSIE') >= 1;

export default class Dialog extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    locale: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'eui-dialog',
    width: '390px',
    locale: 'zh-cn',
    onOk: () => {},
    onCancel: () => {},
  };

  handleOk() {
    this.props.onOk();
  }

  handleCancel() {
    this.props.onCancel();
  }

  render() {
    const { props } = this;

    const { footer, visible, locale } = props;

    const i18nText = i18n[locale];

    const defaultFooter = [
      <button className='btn btn-cancel' onClick={() => this.handleCancel()}>
        {i18nText['cancel']}
      </button>,
      <button className='btn btn-ok' onClick={() => this.handleOk()}>
        {i18nText['ok']}
      </button>
    ];
    const wrapClassName = classnames({
      [props.wrapClassName]: !!props.wrapClassName,
      'vertical-center-dialog': !isIE,
    })

    return (
      <RcDialog
        wrapClassName={wrapClassName}
        footer={props.footer || defaultFooter}
        visible={visible}
        ref={c => this.rcDialog = c}
        {...props}
      />
    );
  }
}

