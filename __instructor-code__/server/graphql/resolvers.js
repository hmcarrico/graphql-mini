const characters = require('./model');
const axios = require('axios');

module.exports = {
  Query: {
    people: () => {
      return characters
    }
  },
  Person: {
    homeworld(person) {
      // return {
      //   name: 'blah',
      //   climate: 'something',
      //   population: 5
      // }
      return axios.get(person.homeworld).then(response => response.data)
    }
  }
}