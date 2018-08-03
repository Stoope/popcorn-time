import * as actions from './';
import * as types from '../constants';

describe('actions', () => {
  it('should create an action CLOSE_DRAWER', () => {
    const expectedAction = {
      type: types.CLOSE_DRAWER
    };
    expect(actions.closeDrawer()).toEqual(expectedAction);
  });
  it('should create an action OPEN_DRAWER', () => {
    const expectedAction = {
      type: types.OPEN_DRAWER
    };
    expect(actions.openDrawer()).toEqual(expectedAction);
  });
});
