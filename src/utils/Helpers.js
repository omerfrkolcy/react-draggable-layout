import _ from 'lodash';

const generateLayout = (items, column) => {
  return _.map(items, function (item, index) {
    return {
      x: index % column,
      y: Math.floor(index / column) * 4,
      w: 1,
      h: 4,
      i: item,
    };
  });
};

export default {
  generateLayout,
};
