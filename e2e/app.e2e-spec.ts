import { ImagesAppPage } from './app.po';

describe('images-app App', () => {
  let page: ImagesAppPage;

  beforeEach(() => {
    page = new ImagesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
