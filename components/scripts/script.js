var fillOut, info,
  __slice = [].slice;

info = ['Ray Villalobos', 'http://planetoftheweb.com', 'http://authoredcontent.com', 'http://iviewsource.com'];

fillOut = function() {
  var item, links, name, _i, _len, _results;
  name = arguments[0], links = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  $('#content').append("" + name + "<br>");
  _results = [];
  for (_i = 0, _len = links.length; _i < _len; _i++) {
    item = links[_i];
    _results.push($('#content').append("" + item + "<br>"));
  }
  return _results;
};

fillOut.apply(null, info);
