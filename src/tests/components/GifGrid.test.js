import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifGrid from '../../components/GifGrid';

jest.mock('../../hooks/useFetchGifs');

describe('Tests in GifGrid', () => {
  const category = 'Dragon Ball';

  test('The component must be displayed correctly', () => {
    // ! Este es EL valor inicial que tiene nuestro estado en useFetchGifs
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Must display  when loading images useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier Cosa',
      },
      {
        id: 'ABCD',
        url: 'https://localhost/cualquier/otraCosa.jpg',
        title: 'Cualquier Otra Cosa',
      },
    ];
    // ! Al traer "información" nuestro estado debe cambiar, tal cual como lo hace nuestro componente
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
