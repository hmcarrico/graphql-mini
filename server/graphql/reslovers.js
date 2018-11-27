const characters = require('./model.js');
const axios = require('axios');

module.exports = {
    Query: {
        people: () => characters
    },
    Person: {
        homeworld: (person) => {
            return axios.get(person.homeworld).then(res => res.data)
        } 
    }
}