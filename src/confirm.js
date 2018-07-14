import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Dialog from './Dialog';
import i18n from './i18n';
import './style/index.scss';

const { PropTypes } = React;

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

const ConfirmDialog = (props) => {
  const {
    visible,
    title,
    content,
    type,
    className,
    onOk,
    onCancel,
    close,
    locale,
  } = props;
  const prefixCls = props.prefixCls || 'eui-confirm';
  const okCancel = ('okCancel' in props) ? props.okCancel : true;
  const i18nText = i18n[locale];
  const okText = props.okText ||
    okCancel ? i18nText.ok : i18nText.isee;
  const cancelText = props.cancelText || i18nText.cancel;
  const cancelBtn = okCancel && <button className="btn btn-cancel" onClick={() => clickFn(onCancel, close)}>{cancelText}</button>;
  return (
    <Dialog
      className={classnames(prefixCls, `${prefixCls}-${type}`, className)}
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
};

ConfirmDialog.propTypes = {
  prefixCls: PropTypes.string,
  visible: PropTypes.boolean,
  okCancel: PropTypes.boolean,
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.string,
  className: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  close: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  locale: PropTypes.string,
};

ConfirmDialog.defaultProps = {
  prefixCls: 'eui-confirm',
  visible: true,
  okCancel: true,
  title: '',
  content: '',
  type: 'confirm',
  className: '',
  onOk: () => {},
  onCancel: () => {},
  close: () => {},
  locale: 'zh-cn',
  okText: i18n['zh-cn'].ok,
  cancelText: i18n['zh-cn'].cancel,
};

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
