import * as actions from './';
import * as types from '../constants';

describe('actions', () => {
  it('should create an action CLOSE_SETTINGS', () => {
    const expectedAction = {
      type: types.CLOSE_SETTINGS
    };
    expect(actions.closeSettings()).toEqual(expectedAction);
  });
  it('should create an action OPEN_SETTINGS', () => {
    const expectedAction = {
      type: types.OPEN_SETTINGS
    };
    expect(actions.openSettings()).toEqual(expectedAction);
  });
  it('should create an action CHANGE_SETTINGS', () => {
    const payload = { theme: {} };
    const expectedAction = {
      type: types.CHANGE_SETTINGS,
      payload
    };
    expect(actions.changeSettings(payload)).toEqual(expectedAction);
  });
});
