import React from 'react';
import { shallow } from 'enzyme/build';
import AddCategory from '../../components/AddCategory';

describe('Tests in AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('It must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It must change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(value);
  });

  test('It should NOT post the information onsubmit.', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('It should call the setCategories and clear the text box', () => {
    // 1. Simular el inputChange
    const value = 'One Piece';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    // 2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    // 3. setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. El valor del input debe de estar ''
    expect(input.prop('value')).toBe('');
  });
});
