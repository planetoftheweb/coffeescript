var append, author;

append = function(item) {
  return $('#content').append("" + item);
};

author = 'Morten';

switch (author) {
  case 'Ray':
    append('JavaScript');
    break;
  case 'James':
  case 'Morten':
    append('Web Design');
    break;
  default:
    append('Training');
}
