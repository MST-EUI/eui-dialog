# eui-dialog
react dialog component

# Usage
```
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'eui-dialog';

ReactDOM.render(
    <Dialog
        title="这是对话框的标题"
        visible={this.state.visible}
        onOk={() => this.handleOk()}
        onCancel={() =>this.handleCancel()}
    >
        <p>这是对话框的内容</p>
    </Dialog>,
    document.getElementById('app')
);

```

# API

参数 | 类型 | 默认值 |  说明 
---  | ---- | ---- | ----
title | String \| ReactElement | 无 | 标题 
className | String | 无 | 容器类名
prefixCls | String | `"eui-dialog"` | 自定义类名前缀 
visible | Boolean | `false` | 对话框是否可见
width | String \| Number | `"520px"` | 宽度
locale | String | `zh-cn` | 国际化(`zh-cn`, `en`)
maskClosable | Boolean | `false` | 点击蒙层是否允许关闭
onOk | Function | () => {} | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭
onCancel | Function | () => {} | 点击取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭



# Dialog.method()
包含：
- `Dialog.confirm`
- `Dialog.success`
- `Dialog.error`
- `Dialog.info`

以上均为一个函数，参数为 object，具体属性如下：

参数 | 类型 | 默认值 |  说明 
---  | ---- | ---- | ----
title | String \| ReactElement | 无 | 标题
content | String \| ReactElement | 无 | 内容
className | String | 无 | 容器类名
width | String \| Number | `"390px"` | 宽度
locale | String | `zh-cn` | 国际化(`zh-cn`, `en`)
okText | String  | 确定 | 确认按钮文字
cancelText | String  | 取消 | 取消按钮文字
onOk | Function | () => {} | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭
onCancel | Function | () => {} | 点击取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭



