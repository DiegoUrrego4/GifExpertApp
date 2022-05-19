import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test in hook useFetchGifs', () => {
  test('It must return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    // const { data, loading } = useFetchGifs(category);
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    // expect(loading).toBe(true) --> Podemos hacerlo así o podemos usar lo siguiente:
    expect(loading).toBeTruthy();
  });

//   test('It must be return an array of images and loading: false', async () => {
//     const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
//     await waitForNextUpdate
//     const { data, loading } = result.current;
//     expect(data).toBe(10);
//     expect(loading).toBe(false);
//   });
});
