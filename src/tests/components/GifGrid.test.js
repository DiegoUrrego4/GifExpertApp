import React from 'react';
import { shallow } from 'enzyme/build';
import GifGrid from '../../components/GifGrid';

describe('Pruebas en GifGrid', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const category = 'Goku';
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
