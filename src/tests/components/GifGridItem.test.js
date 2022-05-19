import React from 'react';
import { shallow } from 'enzyme/build';
import GifGridItem from '../../components/GifGridItem';

describe('Tests in GifGridItem', () => {
  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('The component must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should have a paragraph with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Must have the image equal to the url and alt of the props.', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Must have class animate__fadeInUp', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeInUp')).toBe(true);
  });
});
