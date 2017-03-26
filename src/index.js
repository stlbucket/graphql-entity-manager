const methods = require('./methods');

class GraphQLEntityManager{
  constructor(client, templates){
    this.client = client;
    this.templates = templates;
  }

  getAll(){
    return methods.getAll(this.client, this.templates);
  }

}

module.exports = GraphQLEntityManager;