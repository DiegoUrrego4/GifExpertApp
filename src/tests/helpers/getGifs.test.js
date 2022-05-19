import { getGifs } from '../../helpers/getGifs';

describe('pruebas en getGifs fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs).toHaveLength(10);
  });

  test('argumentos vacioss', async () => {
    const gifs = await getGifs('');
    expect(gifs).toHaveLength(0);
  });
  
});
