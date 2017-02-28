import { GescomPage } from './app.po';

describe('gescom App', function() {
  let page: GescomPage;

  beforeEach(() => {
    page = new GescomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
