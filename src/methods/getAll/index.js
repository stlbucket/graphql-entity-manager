const clog = require('fbkt-clog');

function getAllEntities(client, templates){
  const query = `{${templates.getAll()}}`;
  return client.query(query)
    .then(result => {
      return result[`all${templates.entityName}s`]
    })
    .catch(error => {
      clog(`Unable to get all ${templates.entityName}s`);
      throw error;
    })
}

module.exports = getAllEntities;