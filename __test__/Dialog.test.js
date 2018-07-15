import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import Dialog from '../src/';

Enzyme.configure({ adapter: new Adapter() });

class DialogTester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    this.setState({
      visible: true,
    });
  }

  render() {
    return (
      <div>
        <Dialog
          {...this.props}
          title="这是dialog的标题"
          visible={this.state.visible}
        >
          <p>这是一个对话框</p>
        </Dialog>
      </div>
    );
  }
}

describe('Dialog', () => {
  it('render correctly', () => {
    const wrapper = mount(<DialogTester />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
