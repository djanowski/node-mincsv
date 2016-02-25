'use strict';


function parse(str) {
  const lines      = str.split('\n');
  const headers    = parseLine(lines.shift());
  const rows       = lines.map(parseLine);
  const objectRows = rows.map(function(row) {
    return row.reduce(function(object, column, index) {
      const name   = headers[index];
      object[name] = column;
      return object;
    }, {});
  });

  return objectRows;
}


// This is a modified version of the world-famous CSVToArray by Ben Nadel:
// http://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm

const DELIMITER = ',';
const FIELDS    = new RegExp(
  // Delimiters.
  `(\\${DELIMITER}|^)` +
  // Quoted fields.
  `(?:"([^"]*(?:""[^"]*)*)"|` +
  // Standard fields.
  `([^"\\${DELIMITER}]*))`
,
'gi');


function parseLine(str) {
  const row = [];
  let   match;
  while (match = FIELDS.exec(str)){
    if (match[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      const unquoted = match[2].replace(/""/g, '"');
      row.push(unquoted);
    }
    else
      row.push(match[3]);
  }
  return row;
}


module.exports = { parse };
