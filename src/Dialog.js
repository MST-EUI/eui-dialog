import React from 'react';
import classnames from 'classnames';
import RcDialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';
import i18n from './i18n';

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
    animation: PropTypes.string,
    maskAnimation: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'eui-dialog',
    width: '520px',
    locale: 'zh-cn',
    animation: 'zoom',
    maskAnimation: 'fade',
    onOk: () => {},
    onCancel: () => {},
  };

  componentDidUpdate() {
    const { props } = this;
    // 如果内容宽度超过520px，则底部操作按钮居右对齐
    if (props.visible) {
      const dlgBody = this.rcDialog._component.body;
      const dlgFooter = document.querySelector(`.${props.prefixCls}-footer`);
      if (dlgBody.offsetWidth >= 520) {
        dlgFooter.style.textAlign = 'right';
      }
    }
  }

  handleOk() {
    this.props.onOk();
  }

  handleCancel() {
    this.props.onCancel();
  }


  render() {
    const { props } = this;

    const { visible, locale } = props;

    const i18nText = i18n[locale];

    const defaultFooter = [
      <button key="cancel" className="btn btn-cancel" onClick={() => this.handleCancel()}>
        {i18nText.cancel}
      </button>,
      <button key="ok" className="btn btn-ok" onClick={() => this.handleOk()}>
        {i18nText.ok}
      </button>,
    ];
    const wrapClassName = classnames({
      [props.wrapClassName]: !!props.wrapClassName,
      'vertical-center-dialog': !isIE,
    });

    const transitionName = props.transitionName || `${props.prefixCls}-${props.animation}`;
    const maskTransitionName = props.maskTransitionName || `${props.prefixCls}-${props.maskAnimation}`;

    return (
      <RcDialog
        transitionName={transitionName}
        maskTransitionName={maskTransitionName}
        wrapClassName={wrapClassName}
        footer={props.footer || defaultFooter}
        visible={visible}
        ref={(c) => { this.rcDialog = c; }}
        {...props}
      />
    );
  }
}

