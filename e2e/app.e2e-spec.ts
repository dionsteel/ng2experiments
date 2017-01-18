import { Ng2experimentsPage } from './app.po';

describe('ng2experiments App', function() {
  let page: Ng2experimentsPage;

  beforeEach(() => {
    page = new Ng2experimentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
