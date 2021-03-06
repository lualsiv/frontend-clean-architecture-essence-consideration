import { isTitleTextValid, isDetailTextValid } from '~/business/entities';
import { createRamdomRangeString } from '~/utils/test';

describe('Title text validation', () => {
  const TITLE_VALID_NUMBER = 60;
  const TITLE_INVALID_NUMBER = 61;

  it('should valid', () => {
    const validString = createRamdomRangeString(TITLE_VALID_NUMBER);

    expect(isTitleTextValid(validString)).toBe(true);
  });

  it('should invalid (reuqired checking)', () => {
    expect(isTitleTextValid('')).toBe(false);
  });

  it('should invalid (over valid range)', () => {
    const invalidString = createRamdomRangeString(TITLE_INVALID_NUMBER);

    expect(isTitleTextValid(invalidString)).toBe(false);
  });
});

describe('Detail text validation', () => {
  const DETAIL_VALID_NUMBER = 500;
  const DETAIL_INVALID_NUMBER = 501;

  it('should valid (set no data)', () => {
    expect(isDetailTextValid(undefined)).toBe(true);
  });

  it('should valid (empty string)', () => {
    expect(isDetailTextValid('')).toBe(true);
  });

  it('should valid (fill string)', () => {
    const validString = createRamdomRangeString(DETAIL_VALID_NUMBER);

    expect(isDetailTextValid(validString)).toBe(true);
  });

  it('should invalid (over valid range', () => {
    const invalidString = createRamdomRangeString(DETAIL_INVALID_NUMBER);

    expect(isDetailTextValid(invalidString)).toBe(false);
  });
});
