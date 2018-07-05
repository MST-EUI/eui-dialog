import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import EmptyData from '../src/';

Enzyme.configure({ adapter: new Adapter() });

test('EmptyData should render correctly', () => {
  mount(<EmptyData />);
});

test('EmptyData props', () => {
  // Render a checkbox with label in the document
  const emptydata = shallow(<EmptyData className="test" />);
  expect(emptydata.find('.eui-empty-data-content')).toBeTruthy();
});

