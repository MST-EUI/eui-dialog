import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from '../src/';
import './demo.scss';

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

  render() {
    return (
      <div className="demo">
        <button onClick={() => this.showModal()}>show dialog</button>
        <Dialog
          title="温馨提示"
          visible={this.state.visible}
          onClose={() => this.closeModal()}
        >
          <span>这是一个对话框</span>
        </Dialog>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
