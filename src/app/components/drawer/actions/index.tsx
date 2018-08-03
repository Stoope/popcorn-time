import { action } from 'typesafe-actions';
import * as constants from '../constants';

export const closeDrawer = () => action(constants.CLOSE_DRAWER);
export const openDrawer = () => action(constants.OPEN_DRAWER);
