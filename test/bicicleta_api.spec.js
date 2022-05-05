const axios = require('axios')
const assert = require('assert');

let endpoint = 'http://localhost:3000/api/bicicletas/';

describe('API Test', function() {
    describe('Get Bikes /', getBikes);
    describe('Post Bikes /create', postBikes);
});

function getBikes() {
    it('200 OK!', function() {
        axios.get(endpoint).then(function(response) {
            let res = JSON.parse(response.data);
            assert.equal(response.status, 200);
            let bikeCount = res.bicicletas.length;
            assert.equal(bikeCount, 0)
        });
    });
};

function postBikes() {
    it('200 OK!', function() {
        let testBike = {
            code: 1,
            color: 'Red',
            modelo: 'Trek',
            lat: -99.1351392435805,
            lon: 19.283457397377894
        }
        axios.post(endpoint+'create', testBike).then(function(response) {
            assert.equal(response.status, 200);
        });
    });
}