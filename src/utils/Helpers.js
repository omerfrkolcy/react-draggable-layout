import _ from 'lodash';

const generateLayout = (items, column) => {
  return _.map(items, function (item, index) {
    return {
      x: (index % column) * 2,
      y: Math.floor(index / column) * 4,
      w: 2,
      h: 4,
      i: item,
    };
  });
};

export default {
  generateLayout,
};
