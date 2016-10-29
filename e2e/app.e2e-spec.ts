import { CrashOverdriveFrontendPage } from './app.po';

describe('crash-overdrive-frontend App', function() {
  let page: CrashOverdriveFrontendPage;

  beforeEach(() => {
    page = new CrashOverdriveFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
