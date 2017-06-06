import { SzechuanSaucePage } from './app.po';

describe('szechuan-sauce App', () => {
  let page: SzechuanSaucePage;

  beforeEach(() => {
    page = new SzechuanSaucePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
