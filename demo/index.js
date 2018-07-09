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

  showConfirm() {
    confirm({
      title: '这是一个confirm的title',
      content: '这是一个confirm的content'
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
          width="390"
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          onClose={() => this.closeModal()}
        >
          <p>这是一个对话框</p>
        </Dialog>

        <h1>使用confirm</h1>
        <button onClick={this.showConfirm}>Confirm Dialog</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
