import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Dialog from './Dialog';
import i18n from './i18n';
import './style/index.scss';

const clickFn = (fn, close) => {
  if (fn) {
    let ret;
    if (fn.length) {
      ret = fn(close);
    } else {
      ret = fn();
      if (!ret) {
        close();
      }
    }
    if (ret && ret.then) {
      ret.then(close);
    }
  } else {
    close();
  }
};

class ConfirmDialog extends Component {
  static defaultProps = {
    visible: false,
    prefixCls: 'eui-confirm',
    width: '390px',
    locale: 'zh-cn',
    okCancel: true,
  }
  componentDidMount() {
    const { props } = this;
    // 如果内容宽度超过580px，则底部操作按钮居右对齐
    if (props.visible) {
      const dlgBody = this.euiDialog.rcDialog._component.body;
      const dlgFooter = document.querySelector(`.${props.prefixCls}-action`);
      if (dlgBody.offsetWidth >= 580) {
        dlgFooter.style.textAlign = 'right';
      }
    }
  }
  render() {
    const { props } = this;
    const {
      prefixCls,
      width,
      visible,
      title,
      content,
      type,
      className,
      onOk,
      onCancel,
      okCancel,
      close,
      locale,
    } = props;
    const i18nText = i18n[locale];
    const okText = props.okText ||
      okCancel ? i18nText.ok : i18nText.isee;
    const cancelText = props.cancelText || i18nText.cancel;
    const cancelBtn = okCancel && <button className="btn btn-cancel" onClick={() => clickFn(onCancel, close)}>{cancelText}</button>;
    return (
      <Dialog
        ref={(c) => { this.euiDialog = c; }}
        className={classnames(prefixCls, `${prefixCls}-${type}`, className)}
        width={width}
        title=""
        footer=""
        visible={visible}
        onClose={() => clickFn(onCancel, close)}
      >
        <div className={`${prefixCls}-body`}>
          <i className={`eui-icon eui-icon-${type}`} />
          <span className={`${prefixCls}-title`}>{title}</span>
          <div className={`${prefixCls}-content`}>{content}</div>
        </div>
        <div className={`${prefixCls}-action`}>
          {cancelBtn}
          <button className="btn btn-ok" onClick={() => clickFn(onOk, close)}>{okText}</button>
        </div>
      </Dialog>
    );
  }
}

export default function confirm(props = {}) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    const unmountedResult = ReactDOM.unmountComponentAtNode(div);
    if (div.parentNode && unmountedResult) {
      div.parentNode.removeChild(div);
    }
  }

  const defaultPorps = {
    ...props,
    visible: true,
    locale: props.locale || 'zh-cn',
    close,
  };

  ReactDOM.render(<ConfirmDialog {...defaultPorps} />, div);

  return {
    close,
  };
}
