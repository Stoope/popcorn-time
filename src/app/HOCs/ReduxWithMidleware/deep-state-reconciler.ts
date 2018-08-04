import { State } from 'types';
import merge from 'deepmerge';

const deepStateReconciler = (
  inboundState: State,
  originalState: State
): State =>
  merge(originalState, inboundState, {
    arrayMerge: (destination, source) => source
  });

export default deepStateReconciler;
