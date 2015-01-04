var info, key, value;

info = {
  name: 'Ray',
  title: 'Staff Author',
  tuts: 'http://lynda.planetoftheweb.com'
};

for (key in info) {
  value = info[key];
  console.log("" + key + ": " + value);
}
