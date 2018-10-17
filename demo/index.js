import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import Button from '@mistong/eui-button';
import {
  Demo,
  Code,
} from '@mistong/eui';

/* placeholder begin eui style */
import '@mistong/eui/dist/index.css';
/* placeholder end eui style */

/* placeholder begin src */
import Dialog from '../src';
/* placeholder end src */
import './index.scss';

const {
  confirm, success, warning, error, info,
} = Dialog;
const { log } = console;

const i18nText = {
  'zh-cn': {
    basicTitle: '这是dialog的标题',
    basicContent: '这是一个对话框',
    confirmTitle: '这是一个confirm的title',
    confirmContent: '这是一个confirm的content',
    successTitle: '这是一个success的title',
    successContent: '这是一个success的content',
  },
  en: {
    basicTitle: 'This is a dialog title',
    basicContent: 'This is a dialog content',
    confirmTitle: 'This is a confirm dialog title',
    confirmContent: 'This is a confirm dialog content',
    successTitle: 'This is a success dialog title',
    successContent: 'This is a success dialog content',
  },
};

const confirmFunc = (props = {}) => {
  confirm(assign({
    width: '580',
    title: i18nText[props.locale || 'zh-cn'].confirmTitle,
    content: i18nText[props.locale || 'zh-cn'].confirmContent,
  }, props));
};

const manualClose = (props = {}) => {
  const confirmDlg = confirm(assign({
    width: '580',
    title: i18nText[props.locale || 'zh-cn'].confirmTitle,
    content: i18nText[props.locale || 'zh-cn'].confirmContent,
  }, props));
  setTimeout(() => confirmDlg.close(), 1000);
};

const successFunc = (props = {}) => {
  success(assign({
    title: i18nText[props.locale || 'zh-cn'].successTitle,
    content: i18nText[props.locale || 'zh-cn'].successContent,
  }, props));
};

const warningFunc = (props = {}) => {
  warning(assign({
    title: '这是一个warning的title',
    content: '这是一个warning的content',
  }, props));
};

const errorFunc = (props = {}) => {
  error(assign({
    title: '这是一个error的title',
    content: '这是一个error的content',
  }, props));
};

const infoFunc = (props = {}) => {
  info(assign({
    title: '这是一个info的title',
    content: '这是一个info的content',
  }, props));
};

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  handleOk() {
    log('action: handle ok button');
    this.closeModal();
  }

  handleCancel() {
    log('action: handle cancel button');
    this.closeModal();
  }

  render() {
    return (
      <div className="basic">
        <Button onClick={() => this.showModal()}>Basic Dialog</Button>
        <Dialog
          ref={(c) => { this.dialog = c; }}
          title={i18nText['zh-cn'].basicTitle}
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          onClose={() => this.closeModal()}
        >
          <p>{i18nText['zh-cn'].basicContent}</p>
          <span>这是一个超出换行的文本这是一个超出换行的文本这是一个超出换行的文本这是一个超出换行的文本这是一个超出换行的文本</span>
        </Dialog>
      </div>
    );
  }
}

const Confirm = () => <Button onClick={() => confirmFunc()}>Confirm Dialog</Button>;


const Prompt = () => (
  <div className="prompt">
    <Button onClick={() => successFunc()}>success</Button>
    <Button onClick={() => warningFunc()}>warning</Button>
    <Button onClick={() => errorFunc()}>error</Button>
    <Button onClick={() => infoFunc()}>info</Button>
  </div>
);

class I18n extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  handleOk() {
    log('action: handle ok button');
    this.closeModal();
  }

  handleCancel() {
    log('action: handle cancel button');
    this.closeModal();
  }

  render() {
    return (
      <div className="i18n">
        <Button onClick={() => this.showModal()}>i18n Dialog</Button>
        <Dialog
          locale="en"
          ref={(c) => { this.dialog = c; }}
          title={i18nText.en.basicTitle}
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          onClose={() => this.closeModal()}
        >
          <p>{i18nText.en.basicContent}</p>
        </Dialog>
        <Button onClick={() => confirmFunc({
          locale: 'en',
        })}
        >i18n confirm
        </Button>
        <Button onClick={() => successFunc({
          locale: 'en',
        })}
        >i18n success
        </Button>
      </div>
    );
  }
}

const ManualClose = () => <Button onClick={() => manualClose()}>Manual Close</Button>;

/* placeholder begin class */
class DemoComponent extends React.Component {
  render() {
    const basicCode = `
      import { Dialog, Button } from "@mistong/eui";

      class Basic extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            visible: false,
          };
        }

        showModal() {
          this.setState({
            visible: true,
          });
        }

        closeModal() {
          this.setState({
            visible: false,
          });
        }

        handleOk() {
          log('action: handle ok button');
          this.closeModal();
        }

        handleCancel() {
          log('action: handle cancel button');
          this.closeModal();
        }

        render() {
          return (
            <div className="basic">
              <Button onClick={() => this.showModal()}>Basic Dialog</Button>
              <Dialog
                ref={(c) => { this.dialog = c; }}
                title={i18nText['zh-cn'].basicTitle}
                visible={this.state.visible}
                onOk={() => this.handleOk()}
                onCancel={() => this.handleCancel()}
                onClose={() => this.closeModal()}
              >
                <p>{i18nText['zh-cn'].basicContent}</p>
                <span>这是一个超出换行的文本这是一个超出换行的文本这是一个超出换行的文本这是一个超出换行的文本这是一个超出换行的文本</span>
              </Dialog>
            </div>
          );
        }
      }
    `;
    const confirmCode = `
      import { Dialog, Button } from "@mistong/eui";

      const Confirm = () => <Button onClick={() => confirmFunc()}>Confirm Dialog</Button>;

    `;
    const promptCode = `
      import { Dialog, Button } from "@mistong/eui";

      <div className="prompt">
        <Button onClick={() => successFunc()}>success</Button>
        <Button onClick={() => warningFunc()}>warning</Button>
        <Button onClick={() => errorFunc()}>error</Button>
        <Button onClick={() => infoFunc()}>info</Button>
      </div>
    `;

    const manualCode = `
      import { Dialog, Button } from "@mistong/eui";

      const manualClose = (props = {}) => {
        const confirmDlg = confirm(assign({
          width: '580',
          title: i18nText[props.locale || 'zh-cn'].confirmTitle,
          content: i18nText[props.locale || 'zh-cn'].confirmContent,
        }, props));
        setTimeout(() => confirmDlg.close(), 1000);
      };

      const ManualClose = () => <Button onClick={() => manualClose()}>Manual Close</Button>;
    `;

    const i18nCode = `
      import { Dialog, Button } from "@mistong/eui";
      class I18n extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            visible: false,
          };
        }

        showModal() {
          this.setState({
            visible: true,
          });
        }

        closeModal() {
          this.setState({
            visible: false,
          });
        }

        handleOk() {
          log('action: handle ok button');
          this.closeModal();
        }

        handleCancel() {
          log('action: handle cancel button');
          this.closeModal();
        }

        render() {
          return (
            <div className="i18n">
              <Button onClick={() => this.showModal()}>i18n Dialog</Button>
              <Dialog
                locale="en"
                ref={(c) => { this.dialog = c; }}
                title={i18nText.en.basicTitle}
                visible={this.state.visible}
                onOk={() => this.handleOk()}
                onCancel={() => this.handleCancel()}
                onClose={() => this.closeModal()}
              >
                <p>{i18nText.en.basicContent}</p>
              </Dialog>
              <Button onClick={() => confirmFunc({
                locale: 'en',
              })}
              >i18n confirm
              </Button>
              <Button onClick={() => successFunc({
                locale: 'en',
              })}
              >i18n success
              </Button>
            </div>
          );
        }
      }
    `;

    return (
      <Demo>
        <h2>基本用法</h2>
        <p>对话框，通过打开一个浮层的方式，避免打扰用户的操作流程。</p>
        <h3>代码演示</h3>
        <Code buttonText="基础对话框" sourceCode={basicCode}>
          <Basic />
        </Code>
        <Code buttonText="确认对话框" sourceCode={confirmCode}>
          <Confirm />
        </Code>
        <Code buttonText="自动关闭" sourceCode={manualCode}>
          <ManualClose />
        </Code>
        <Code buttonText="信息提示" sourceCode={promptCode}>
          <Prompt />
        </Code>
        <Code buttonText="国际化" sourceCode={i18nCode}>
          <I18n />
        </Code>
        <h3>API</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>背景图片类型 (<Code mode="inline">small</Code> <Code mode="inline">medium</Code> <Code mode="inline">large</Code>)</td>
              <td>string</td>
              <td><Code mode="inline">medium</Code></td>
            </tr>
            <tr>
              <td>children</td>
              <td>描述文案</td>
              <td>any</td>
              <td>暂无数据</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>自定义图片</td>
              <td>string</td>
              <td>https://yukap6.github.io/images/empty.png</td>
            </tr>
            <tr>
              <td>lang</td>
              <td>语言包类型 (<Code mode="inline">zh-cn</Code> <Code mode="inline">en</Code>)</td>
              <td>string</td>
              <td><Code mode="inline">zh-cn</Code></td>
            </tr>
            <tr>
              <td>className</td>
              <td>添加自定义class</td>
              <td>string</td>
              <td><Code mode="inline">&#39;&#39;</Code></td>
            </tr>
            <tr>
              <td>style</td>
              <td>自定义样式</td>
              <td>object</td>
              <td><Code mode="inline">{'{}'}</Code></td>
            </tr>
            <tr>
              <td>prefixCls</td>
              <td>样式名前缀</td>
              <td>string</td>
              <td>eui-empty-data</td>
            </tr>
          </tbody>
        </table>
      </Demo>
    );
  }
}
/* placeholder end class */

/* placeholder begin ReactDOM */
ReactDOM.render(
  <DemoComponent />,
  document.getElementById('app'),
);
/* placeholder end ReactDOM */
