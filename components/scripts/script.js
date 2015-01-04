var a, item, names, _i, _len, _ref;

a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

names = ['Barot Bellingham', 'Constance Smith', 'Hassum Harrod', 'Hillary Goldwynn', 'Xhou Ta'];

[].splice.apply(names, [1, 2].concat(_ref = ['Bob', 'Pete'])), _ref;

for (_i = 0, _len = names.length; _i < _len; _i++) {
  item = names[_i];
  console.log(item);
}
