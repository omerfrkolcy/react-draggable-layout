import _ from 'lodash';

export const generateLayout = (items, column) =>
  _.map(items, (item, index) => ({
    x: index % column,
    y: Math.floor(index / column) * 4,
    w: 1,
    h: 4,
    i: item,
  }));
