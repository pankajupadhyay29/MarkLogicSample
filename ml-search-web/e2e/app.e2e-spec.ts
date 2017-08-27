import { MlSearchPocPage } from './app.po';

describe('ml-search-poc App', () => {
  let page: MlSearchPocPage;

  beforeEach(() => {
    page = new MlSearchPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
