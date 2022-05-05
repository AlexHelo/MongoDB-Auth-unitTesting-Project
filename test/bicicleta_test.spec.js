const Bike = require('../models/bicicleta');
const assert = require('assert');

describe('Bike testing', function() {
    describe('Create a bike', createBike);
    describe('List all bikes', listBike);
    describe('Add a bike', addBike);
    describe('Find a bike', findBike);
    describe('Remove a bike ', removeBike);
})

function createBike() {
    it('Creating a bike...', function() {
        let code = 3;
        let color = 'Blue';
        let brand = 'Santa Cruz';
        let lat = 19.284369675300404;
        let long = -99.1385597129053;
        let bike = Bike.createInstance(code, color, brand, [lat, long]);
        assert.equal(bike.code, code);
        assert.equal(bike.color, color);
        assert.equal(bike.modelo, brand);
        assert.equal(bike.ubicacion[0], lat);
        assert.equal(bike.ubicacion[1], long);
    });
}

function listBike() {
    it('Listing bikes...', function() {
        Bike.allBicis(function(err, ) {
            assert.equal(bikes.length, 0);
        })
    });
}

function addBike() {
    it('Adding a bike...', function() {
        let bike = new Bike({code: 3, color: 'Blue', modelo: 'Santa Cruz'});
        Bike.add(bike, function(err, newBike) {
            if(err)
                console.log(err);
                Bike.allBicis(function(err, bikes) {
                assert.equal(bicis.length, 1);
                assert.equal(bicis[0].code, bike.code);
            });
        });
    });
}

function findBike() {
    it('Finding bike 1...', function() {
        Bike.allBicis(function(err, bikes) {
            assert.equal(bicis.length, 0);
            const bike = new Bike({code: 3, color: 'Blue', modelo: 'Santa Cruz'});
            Bike.add(bike, function(err, newBike){
                if(err)
                    console.log(err);
                    Bike.findByCode(1, function(err, targetBici){
                    assert.equal(targetBici.code, bici.code);
                    assert.equal(targetBici.color, bici.color);
                    assert.equal(targetBici.modelo, bici.modelo);
                });
            });
        })
    });
}

function removeBike() {
    it('Deleting bike 1...', function() {
        Bike.allBicis(function(err, bikes) {
            assert.equal(bikes.length, 0);
            const bike = new Bike({code: 3, color: 'Blue', modelo: 'Santa Cruz'});
            Bike.add(bike, function(err, newBike){
                if(err)
                    console.log(err);
                    Bike.allBicis(function(err, bikes) {
                    assert.equal(bikes.length, 1);
                    Bike.removeByCode(1, function(err, cb){
                        Bike.allBicis(function(err, bikes) {
                            assert.equal(bikes.length, 0);
                        });
                    });
                });
            });
        });
    });
}