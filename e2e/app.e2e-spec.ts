import { DatepickerIssuePage } from './app.po';

describe('datepicker-issue App', function() {
  let page: DatepickerIssuePage;

  beforeEach(() => {
    page = new DatepickerIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
