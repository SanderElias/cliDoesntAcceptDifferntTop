import { CliDoesntAcceptDifferntTopPage } from './app.po';

describe('cli-doesnt-accept-differnt-top App', () => {
  let page: CliDoesntAcceptDifferntTopPage;

  beforeEach(() => {
    page = new CliDoesntAcceptDifferntTopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
