import { NcStateScienceHousePage } from './app.po';

describe('nc-state-science-house App', function() {
  let page: NcStateScienceHousePage;

  beforeEach(() => {
    page = new NcStateScienceHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
