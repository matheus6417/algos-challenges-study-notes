import { isBoolean } from 'lodash/fp';

export const sandbox = (params) => {
  return isBoolean(params);
};
