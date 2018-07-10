import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from '../src/index';
import './demo.scss';
const { confirm, success, error, info } = Dialog;
const { log } = console;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal() {
    this.setState({
      visible: true,
    })
  }

  closeModal() {
    this.setState({
      visible: false,
    })
  }

  handleOk() {
    log('action: handle ok button');
    this.closeModal();
  }

  handleCancel() {
    log('action: handle cancel button');
    this.closeModal();
  }

  showConfirm() {
    confirm({
      title: '这是一个confirm的title',
      content: '这是一个confirm的content',
    })
  }

  success() {
    success({
      title: '这是一个success的title',
      content: '这是一个success的content',
    })
  }

  error() {
    error({
      title: '这是一个error的title',
      content: '这是一个error的content',
    })
  }

  info() {
    info({
      title: '这是一个info的title',
      content: '这是一个info的content',
    })
  }

  render() {
    return (
      <div className="demo">
        <h1>基本用法</h1>
        <button onClick={() => this.showModal()}>Show Dialog</button>
        <Dialog
          ref={c => this.dialog =c}
          title="这是dialog的标题"
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          onClose={() => this.closeModal()}
        >
          <p>这是一个对话框</p>
          <p>这是一个对话框这是一个对话框这是一个对话框这是一个对话框这是一个对话框</p>
        </Dialog>

        <h1>确认对话框</h1>
        <button onClick={this.showConfirm}>confirm</button>
        <h1>信息提示</h1>
        <button onClick={this.success}>success</button>
        <button onClick={this.error}>error</button>
        <button onClick={this.info}>info</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
