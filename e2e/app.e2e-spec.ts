import { ConvertTempPage } from './app.po';

describe('convert-temp App', () => {
  let page: ConvertTempPage;

  beforeEach(() => {
    page = new ConvertTempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
