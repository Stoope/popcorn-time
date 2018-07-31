// @flow
import type { Reducers } from './';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>;
