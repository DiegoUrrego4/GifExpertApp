import { getGifs } from '../../helpers/getGifs';

describe('Test in getGifs fetch', () => {
  test('It must bring 10 items', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs).toHaveLength(10);
  });

  test('empty arguments', async () => {
    const gifs = await getGifs('');
    expect(gifs).toHaveLength(0);
  });
  
});
