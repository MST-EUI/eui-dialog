import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from '../src/index';
import './demo.scss';
const { confirm } = Dialog;
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

  render() {
    return (
      <div className="demo">
        <h1>基本用法</h1>
        <button onClick={() => this.showModal()}>show dialog</button>
        <Dialog
          ref={c => this.dialog =c}
          title="这是dialog的标题"
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          onClose={() => this.closeModal()}
        >
          <p>这是一个对话框</p>
        </Dialog>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
