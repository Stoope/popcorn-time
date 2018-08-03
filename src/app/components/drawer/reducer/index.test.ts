import reducer from './';
import * as constants from '../constants';

describe('drawer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null })).toEqual({
      isDrawerOpen: false
    });
  });
  it('should handle OPEN_DRAWER', () => {
    expect(
      reducer(undefined, {
        type: constants.OPEN_DRAWER
      })
    ).toMatchObject({ isDrawerOpen: true });
  });
  it('should handle CLOSE_DRAWER', () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        {
          ...initialState,
          isDrawerOpen: true
        },
        {
          type: constants.CLOSE_DRAWER
        }
      )
    ).toMatchObject({ isDrawerOpen: false });
  });
});
