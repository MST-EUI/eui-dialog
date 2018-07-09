import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Dialog from './Dialog';
import i18n from './i18n';

const clickFn = (fn, close) => {
    if (fn) {
        let ret;
        if (fn.length) {
            ret = fn(close);
        }else {
            ret = fn();
            if (!ret) {
                close();
            }
        }
        if (ret && ret.then) {
            ret.then(close);
        }
    }else {
        close();
    }
};

const ConfirmDialog = (props) => {
    const { visible, title, content, type, className, onOk, onCancel, close, locale } = props;
    const prefixCls = props.prefixCls || 'eui-confirm';
    const okCancel = ('okCancel' in  props) ? props.okCancel : true;
    const i18nText = i18n[locale];
    const okText = props.okText ||
    okCancel ? i18nText['ok'] : i18nText['isee']; 
    const cancelText = props.cancelText || i18nText['cancel'];
    const cancelBtn = okCancel && <button>{cancelText}</button>;
    return (
        <Dialog
            className={classnames(prefixCls, `${prefixCls}-${type}`, className)}
            title=""
            footer=""
            onOk={clickFn(onOk, close)}
            onCancel={clickFn(onCancel, close)}
            visible={visible}
        >
            <div className={`${prefixCls}-body`}>
                <i className={`eui-icon eui-icon-${type}`}></i>
                <span className={`${prefixCls}-title`}>{title}</span>
                <div className={`${prefixCls}-title`}>{content}</div>
            </div>
            <div className={`${prefixCls}-action`}>
                {cancelBtn}
                <button>{okText}</button>
            </div>
        </Dialog>
    );
};

export default function confirm (props = {}) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    function close() {
        const unmountedResult = ReactDOM.unmountComponentAtNode(div);
        console.log(unmountedResult);
        if (div.parentNode && unmountedResult) {
            div.parentNode.removeChild(div);
        }
    }

    const defaultPorps = {
        ...props,
        visible: true,
        locale: 'zh-cn',
        close,
    };

    ReactDOM.render(<ConfirmDialog {...defaultPorps} />, div);

    return {
        close,
    }
}
