const clog = require('fbkt-clog');
const client = require('./testSchemaClient');

describe('hello', function() {

  it('should say hello', function (done) {
    client.send(`
    {
      hello
    }
`
    )
      .then(response => {
        clog('HELLO', response);
        done();
      });
  });

});