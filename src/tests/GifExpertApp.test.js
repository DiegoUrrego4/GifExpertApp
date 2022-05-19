import React from 'react';
import { shallow } from 'enzyme/build';
import GifExpertApp from '../GifExpertApp';

describe('Tests in GifExpertApp', () => {
  test('Must display the component correctly', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show a list of categories', () => {
    const categories = ['One Punch', 'One Piece'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
