const assert = require('assert');
const Bicicleta = require('../models/bicicleta');
const Usuario = require('../models/usuario');
const Reserva = require('../models/reserva');


let from = new Date();
let until = new Date();
let lengthDay = Math.floor(Math.random() * 5)

until.setDate(from.getDate() + lengthDay)

describe('Bike booking test', function(){
    describe('Book a bike', bikeBook);
});

function bikeBook() {
    it('Booking bike', function() {
        const user = new Usuario({nombre: 'Alex', password: 'foobarPassword123', email: 'itsalexhelo@gmail.com'});
        user.save();
        let bike = new Bicicleta({code: 2, color: 'Yellow', modelo: 'Benotto'});
        bike.save();
        user.reservar(
            bike.id,
            from,
            until,
            function(err, Reserva) {
                Reserva.find({}).populate('Bicicleta').populate('Usuario').exec(function(booking) {
                    assert.equal(booking.length, 1);
                    assert.equal(booking[0].diasDeReserva(), lengthDay);
                    assert.equal(booking[0].bicicleta.code, 2);
                    assert.equal(booking[0].usuario.nombre, user.nombre);
                })
        });
    });
}