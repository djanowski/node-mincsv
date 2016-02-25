mincsv
======

A minimal CSV parser for Node.js.


Motivation
----------

I couldn't find a simple CSV parser that would:

- Transform rows into objects by reading a header line.
- Provide both a standard API returning arrays of objects
  and also expose a Stream Transform for more efficient
  processing.
- Support quoted fields.
- Be readable.
- Less important, but: read like modern JavaScript.


Usage
-----

```javascript
const mincsv  = require('./index');
const request = require('request');

request('http://example.com', function(error, response, body) {
  const rows = mincsv.parse(body);
  console.log(rows);
});
```


Roadmap
-------

- Provide a Stream Transform API.


LICENSE
-------

MIT
