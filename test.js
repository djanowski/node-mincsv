const test = require('tape');
const mincsv = require('./index');

test('parse', function(t) {
  const result = mincsv.parse('name,surname\nUmberto,Eco\nHenning,Mankel');
  t.equal(result[0].name,    'Umberto');
  t.equal(result[0].surname, 'Eco');
  t.equal(result[1].name,    'Henning');
  t.equal(result[1].surname, 'Mankel');
  t.end();
});

test('parse with quotes', function(t) {
  const result = mincsv.parse('fullname\n"Umberto Eco"\n"Henning Mankel"');
  t.equal(result[0].fullname, 'Umberto Eco');
  t.equal(result[1].fullname, 'Henning Mankel');
  t.end();
});
